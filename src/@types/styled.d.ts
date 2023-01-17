import "styled-componets";
import { defaultTheme } from "../Styles/themes/default";

type TemeType = typeof defaultTheme;

declare module "styled-componets" {
    export interface defaultTheme extends ThemeType {}
}
