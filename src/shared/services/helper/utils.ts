import { appStorage } from "../storage";
import { ACCESS_TOKEN } from "@/shared/constant";

const buildRequestHeader = () => {
  return {
      "Authorization": `Bearer ${appStorage.get(ACCESS_TOKEN) || ""}`,
      "Accept": "application/json"
  }
};

const setPageTitle = (title = "Ant Design Vue") => document.title = title;

export { buildRequestHeader, setPageTitle }