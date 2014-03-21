module.exports = isEqual;

function isEqual (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) return null;
  if (a.length !== b.length) return false;

  for (var i = 0; i < a.length; i++) {
    if (a[i] ^ b[i]) return false;
  }

  return true;
}