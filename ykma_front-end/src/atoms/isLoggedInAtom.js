import { atom } from 'recoil';

export const isLoggedInAtom = atom<boolean>({
  key: 'isLoggedInAtom',
  default: false,
});