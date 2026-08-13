export function getCurrentLanguage() {
  return window.location.pathname.startsWith("/sv") ? "sv" : "en";
}
