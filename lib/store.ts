import { create } from "zustand";
import { persist } from "zustand/middleware";

//----------- Theme -----------
export type ThemeState = {
  theme: "dark" | "light";
};
export function isThemeState(value: string): value is ThemeState {
  return true;
}
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
export const useLocalesStore = create<LocalesState & LocalesActions>()(
  persist(
    (set) => ({
      locales: [],
      updateLocales: (newLocales: LocaleType[]) =>
        set(() => ({
          locales: newLocales,
        })),
    }),
    { name: "locales" }
  )
);
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

//----------- Font -----------
export type FontState = {
  font: string;
};
export type FontActions = {
  setFont: (newState: string) => void;
};
export const useFontStore = create<FontState & FontActions>()(
  persist(
    (set) => ({
      font: "",
      setFont: (newState: string) =>
        set((state) => ({
          font: newState,
        })),
    }),
    { name: "font" }
  )
);
//-----------------------------

//----------- Route -----------
export type RouteState = {
  routes: any[];
  activeRoute: string;
};
export type RouteActions = {
  setActiveRoute: (newState: string) => void;
};
export const useRouteStore = create<RouteState & RouteActions>((set) => ({
  routes: [
    {
      id: "",
      title: "Home",
      route: "/",
    },
    {
      id: "",
      title: "About",
      route: "/about",
    },
  ],
  activeRoute: "/",
  setActiveRoute: (newState: string) =>
    set((state) => ({
      activeRoute: newState,
    })),
}));
//-----------------------------
