import { atom } from "recoil";

export const navUnderLine = atom({
  key: "navUnderLine",
  default: "",
});

export const showNavDrawer = atom({
  key: "showNavDrawer",
  default: "100%",
});

export const showNavDrawerDisplay = atom({
  key: "showNavDrawerDisplay",
  default: "0",
});
