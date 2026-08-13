import en from "./en";
import sv from "./sv";
import { getCurrentLanguage } from "../utils/language";

const contentByLanguage = {
  en,
  sv,
};

export function getContent() {
  return contentByLanguage[getCurrentLanguage()];
}
