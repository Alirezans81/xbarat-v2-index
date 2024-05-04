import { create } from "zustand";
import { persist } from "zustand/middleware";

//----------- Theme -----------
export type ThemeState = {
  theme: "dark" | "light";
};
export type ThemeActions = {
  toggleTheme: () => void;
};
export const useThemeStore = create<ThemeState & ThemeActions>((set) => ({
  theme: "dark",
  toggleTheme: () => {
    set((state) => ({
      theme: state.theme === "dark" ? "light" : "dark",
    }));
  },
}));
//-----------------------------

//----------- Locales -----------
export type LocaleType = {
  url: string;
  icon_url: string;
  title: string;
  symbol: string;
  icon: string;
  file: string;
  font_1: string;
  font_2: string;
  slug: string;
  LTR_direction: boolean;
  show_order: number;
  is_active: boolean;
};
export type LocalesState = {
  locales: LocaleType[];
};
export type LocalesActions = {
  updateLocales: (newLocales: LocaleType[]) => void;
};
export const useLocalesStore = create<LocalesState & LocalesActions>((set) => ({
  locales: [],
  updateLocales: (newLocales: LocaleType[]) =>
    set(() => ({
      locales: newLocales,
    })),
}));
//-----------------------------

//----------- Locale File -----------
export type LocaleFileState = {
  localeFile: any;
};
export type LocaleFileActions = {
  updateLocaleFile: (newLocaleFile: {}) => void;
};
export const useLocaleFileStore = create<LocaleFileState & LocaleFileActions>()(
  persist(
    (set) => ({
      localeFile: {},
      updateLocaleFile: (newLocaleFile: any) =>
        set((state) => ({
          localeFile: newLocaleFile,
        })),
    }),
    { name: "lang" }
  )
);
//-----------------------------

//----------- Loading -----------
export type LoadingState = {
  isLoading: boolean;
};
export type LoadingActions = {
  setLoading: (newState: boolean) => void;
};
export const useLoadingStore = create<LoadingState & LoadingActions>((set) => ({
  isLoading: false,
  setLoading: (newState: boolean) =>
    set((state) => ({
      isLoading: newState,
    })),
}));
//-----------------------------
