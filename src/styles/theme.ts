import { BASE_SPACING, BREAKPOINT_MOBILE } from 'const';
import 'styled-components';

const theme = {
  colors: {
    apricot: '#FDC3D1',
    background: '#000000',
    black: '#000000',
    blue100: '#072046',
    blue200: '#004481',
    dark10: '#010101',
    dark100: '#121212',
    dark200: '#666666',
    dark300: '#717171',
    dark50: '#050505',
    error: '#f4c3ca',
    green: '#48ae64',
    green100: '#a6cebd',
    light100: '#bdbdbd',
    light200: '#d3d3d3',
    light300: '#f4f4f4',
    lightGray100: '#7d7d7d',
    lightGray50: '#a7a7a7',
    primary: '#31572C',
    red: '#ed6b6a',
    secondary: '#5C8457',
    success: '#d9efe0',
    warning: '#ffefcf',
    white: '#ffffff'
  },
  device: {
    mobile: `(max-width: ${BREAKPOINT_MOBILE})`,
    desktop: `(min-width: ${BREAKPOINT_MOBILE})`
  },
  fonts: {
    bold: 700,
    light: 300,
    medium: 500,
    slim: 400
  },
  fontSize: {
    xs: '0.625rem',
    small: '0.75rem',
    medium: '1.25rem',
    xl: '2rem'
  },
  radius: {
    xs: '4px',
    sm: '8px',
    md: '10px',
    lg: '16px',
    xlg: '20px'
  },
  spacing: {
    s01: `calc(0.25 * ${BASE_SPACING})`,
    s02: `calc(0.5 * ${BASE_SPACING})`,
    s03: `calc(0.75 * ${BASE_SPACING})`,
    s04: BASE_SPACING,
    s05: `calc(1.25 * ${BASE_SPACING})`,
    s06: `calc(1.5 * ${BASE_SPACING})`,
    s07: `calc(1.75 * ${BASE_SPACING})`,
    s08: `calc(2 * ${BASE_SPACING})`
  },
  zIndex: {
    modal: 4,
    top: 3,
    middle: 2,
    zero: 0
  },
  opacity: {
    faint: 0.7,
    middle: 0.4,
    loud: 0.1
  }
} as const;

export type Theme = typeof theme;
export default theme as Theme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
