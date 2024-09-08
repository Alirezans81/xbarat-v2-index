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
  setRoutes: (newState: any[]) => void;
  setActiveRoute: (newState: string) => void;
};
export const useRouteStore = create<RouteState & RouteActions>((set) => ({
  routes: [],
  activeRoute: "",
  setRoutes: (newState: any[]) => {
    set((state) => ({
      routes: newState,
    }));
  },
  setActiveRoute: (newState: string) =>
    set((state) => ({
      activeRoute: newState,
    })),
}));
//-----------------------------

//----------- Route -----------
export type Currency = {
  title: string;
  get_sym_pic_light_url: string;
  get_sym_pic_dark_url: string;
  get_sym_pic_gray_url: string;
};
export type WalletTankType = {
  title: string;
};
export type SupportLocation = {
  country: string;
  country_title: string;
  country_icon: string;
  currencies: Currency[];
  wallet_tank_type: WalletTankType[];
  title: string;
  longitude: number;
  latitude: number;
  description: string;
  show_order: number;
  coming_soon: boolean;
  is_active: boolean;
};
export type CurrencyPair = {
  url: string;
  currency_source: string;
  currency_destination: string;
  default_numerator: string;
  currency_pair_reverse: string;
  currency_pair_reverse_slug: string;
  currency_source_abb: string;
  currency_source_slug: string;
  currency_source_sym_pic_gray: string;
  currency_source_sym_pic_light: string;
  currency_source_sym_pic_dark: string;
  currency_destination_abb: string;
  currency_destination_slug: string;
  currency_destination_floating_number: number;
  currency_destination_sym_pic_gray: string;
  currency_destination_sym_pic_light: string;
  currency_destination_sym_pic_dark: string;
  default_rate_type_title: string;
  slug: string;
  title: string;
  fee_percentage: string;
  rate: number;
  rate_lot_bot: number;
  max_limit_rate_lot_bot: number;
  min_limit_rate_lot_bot: number;
  rate_lot_user: number;
  max_limit_rate_lot_user: number;
  min_limit_rate_lot_user: number;
  min_limit_amount_lot: number;
  max_limit_amount_lot: number;
  floating_number: number;
  has_reverse_rate: boolean;
  show_order: number;
  rate_multiplier: string;
  is_active: boolean;
  is_deleted: boolean;
};
//-----------------------------1
