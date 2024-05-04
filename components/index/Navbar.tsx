import { PageProps } from "@/interfaces/PageProps";

export default function Navbar(props: PageProps) {
  const { lang, theme } = props;

  return <div>{lang['done']}</div>;
}
