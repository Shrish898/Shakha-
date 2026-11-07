const PERMISSIONS = [
  "Free to reuse with credit",
  "Reuse for non-commercial only",
  "Ask the community first",
  "Do not reuse"
];
const MAX_PHOTOS = 6;

function getAllRecords() {
  const added = JSON.parse(localStorage.getItem("shakhaRecords") || "[]");
  const edits = JSON.parse(localStorage.getItem("shakhaEdits") || "{}");
  return [...records, ...added].map(r => edits[r.id] ? { ...r, ...edits[r.id] } : r);
}

function saveEdit(id, changes) {
  const edits = JSON.parse(localStorage.getItem("shakhaEdits") || "{}");
  edits[id] = { ...(edits[id] || {}), ...changes };
  localStorage.setItem("shakhaEdits", JSON.stringify(edits));
}

function addRecord(rec) {
  const added = JSON.parse(localStorage.getItem("shakhaRecords") || "[]");
  added.push(rec);
  localStorage.setItem("shakhaRecords", JSON.stringify(added));
}

function nextId() {
  return "SHK-" + String(getAllRecords().length + 1).padStart(3, "0");
}

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

function esc(text) {
  const d = document.createElement("div");
  d.textContent = text;
  return d.innerHTML;
}

/* ---------- PHOTOS ---------- */
function getPhotos(id) {
  const all = JSON.parse(localStorage.getItem("shakhaPhotos") || "{}");
  return all[id] || [];
}

// returns null on success, or an error message to show the user
function addPhoto(id, photo) {
  const all = JSON.parse(localStorage.getItem("shakhaPhotos") || "{}");
  const list = all[id] || [];
  if (list.length >= MAX_PHOTOS) {
    return "This record already has " + MAX_PHOTOS + " photos (the maximum).";
  }
  list.push(photo);
  all[id] = list;
  try {
    localStorage.setItem("shakhaPhotos", JSON.stringify(all));
  } catch (e) {
    return "Browser storage is full. Try a smaller photo.";
  }
  return null;
}

// shrinks a photo to max 900px and converts to JPEG so it fits in storage
function compressImage(file, maxSize = 900, quality = 0.75) {
  return new Promise((resolve, reject) => {
    if (!file.type.startsWith("image/")) {
      reject(new Error("Please choose an image file."));
      return;
    }
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Could not read the file."));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error("Could not open this image."));
      img.onload = () => {
        const scale = Math.min(1, maxSize / Math.max(img.width, img.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", quality));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

/* ---------- DIFF: longest common subsequence on words ---------- */
function diffWords(oldText, newText) {
  const a = oldText.split(/\s+/).filter(Boolean);
  const b = newText.split(/\s+/).filter(Boolean);

  const t = Array.from({ length: a.length + 1 }, () => new Array(b.length + 1).fill(0));
  for (let i = a.length - 1; i >= 0; i--) {
    for (let j = b.length - 1; j >= 0; j--) {
      t[i][j] = a[i] === b[j] ? t[i + 1][j + 1] + 1 : Math.max(t[i + 1][j], t[i][j + 1]);
    }
  }

  const out = [];
  let i = 0, j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) { out.push({ type: "same", text: a[i] }); i++; j++; }
    else if (t[i + 1][j] >= t[i][j + 1]) { out.push({ type: "del", text: a[i] }); i++; }
    else { out.push({ type: "add", text: b[j] }); j++; }
  }
  while (i < a.length) out.push({ type: "del", text: a[i++] });
  while (j < b.length) out.push({ type: "add", text: b[j++] });
  return out;
}

function diffHtml(oldText, newText) {
  return diffWords(oldText, newText).map(p => {
    const w = esc(p.text);
    if (p.type === "add") return `<ins>${w}</ins>`;
    if (p.type === "del") return `<del>${w}</del>`;
    return w;
  }).join(" ");
}