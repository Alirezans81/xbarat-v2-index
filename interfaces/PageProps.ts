import { ThemeState } from "@/lib/store";

export type PageProps = {
  lang: any;
  theme: ThemeState["theme"];
  font: string;
};
