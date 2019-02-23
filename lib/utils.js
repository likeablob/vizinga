export function utf8ToB64(str) {
  return window.btoa(unescape(encodeURIComponent(str)));
}

export function b64ToUTF8(str) {
  return decodeURIComponent(escape(window.atob(str)));
}
