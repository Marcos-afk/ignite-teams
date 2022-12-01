/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';
import { THEME } from '@theme/index';

declare module 'styled-components' {
  type ThemeType = typeof THEME;

  export interface DefaultTheme extends ThemeType {}
}
