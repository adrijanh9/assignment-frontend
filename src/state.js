import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const customerDataState = atom({
  key: "customerDataState",
  default: [{}],
  effects_UNSTABLE: [persistAtom],
});

export const colorModeState = atom({
  key: "colorModeState",
  default: "light",
  effects_UNSTABLE: [persistAtom],
});
