import { alpha } from '@mui/material/styles';

function createGradient(to, color1, color2) {
  if (to === 'vertical') return `linear-gradient(to bottom, ${color1}, ${color2})`;
  if (to === 'horizontal') return `linear-gradient(to right, ${color1}, ${color2})`;
}

const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#D4DDE4',
  300: '#A9B1C9',
  400: '#807FAD',
  500: '#223D5E',
  600: '#2E3348',
  700: '#202231',
  800: '#161522',
  900: '#0d0415',
  500_8: alpha('#223D5E', 0.08),
  500_12: alpha('#223D5E', 0.12),
  500_16: alpha('#223D5E', 0.16),
  500_24: alpha('#223D5E', 0.24),
  500_32: alpha('#223D5E', 0.32),
  500_48: alpha('#223D5E', 0.48),
  500_56: alpha('#223D5E', 0.56),
  500_80: alpha('#223D5E', 0.8),
};

const PRIMARY = {
  lighter: '#FED7E5',
  light: '#FB87C7',
  main: '#F338C3',
  dark: '#AE1CA5',
  darker: '#660A74',
  contrastText: '#fff',
};
const SECONDARY = {
  lighter: '#CDF6FE',
  light: '#69D1F9',
  main: '#0993EC',
  dark: '#0455A9',
  darker: '#012B71',
  contrastText: '#fff',
};
const INFO = {
  lighter: '#D0F2FF',
  light: '#74CAFF',
  main: '#1890FF',
  dark: '#0C53B7',
  darker: '#04297A',
  contrastText: '#fff',
};
const SUCCESS = {
  lighter: '#E9FCD4',
  light: '#AAF27F',
  main: '#54D62C',
  dark: '#229A16',
  darker: '#08660D',
  contrastText: GREY[800],
};
const WARNING = {
  lighter: '#FFF7CD',
  light: '#FFE16A',
  main: '#FFC107',
  dark: '#B78103',
  darker: '#7A4F01',
  contrastText: GREY[800],
};
const ERROR = {
  lighter: '#FFE7D9',
  light: '#FFA48D',
  main: '#FF4842',
  dark: '#B72136',
  darker: '#7A0C2E',
  contrastText: '#fff',
};

const primaryAndSecondaryGradient = {
  horizontal: {
    light: createGradient('horizontal', PRIMARY.light, SECONDARY.light),
    main: createGradient('horizontal', PRIMARY.main, SECONDARY.main),
    dark: createGradient('horizontal', PRIMARY.dark, SECONDARY.dark),
  },
  vertical: {
    light: createGradient('vertical', PRIMARY.light, SECONDARY.light),
    main: createGradient('vertical', PRIMARY.main, SECONDARY.main),
    dark: createGradient('vertical', PRIMARY.dark, SECONDARY.dark),
  },
};

const GRADIENTS = {
  primary: createGradient('vertical', PRIMARY.light, PRIMARY.main),
  primaryAndSecondary: primaryAndSecondaryGradient,
  info: createGradient('vertical', INFO.light, INFO.main),
  success: createGradient('vertical', SUCCESS.light, SUCCESS.main),
  warning: createGradient('vertical', WARNING.light, WARNING.main),
  error: createGradient('vertical', ERROR.light, ERROR.main),
};

const CHART_COLORS = {
  violet: ['#826AF9', '#9E86FF', '#D0AEFF', '#F7D2FF'],
  blue: ['#2D99FF', '#83CFFF', '#A5F3FF', '#CCFAFF'],
  green: ['#2CD9C5', '#60F1C8', '#A4F7CC', '#C0F2DC'],
  yellow: ['#FFE700', '#FFEF5A', '#FFF7AE', '#FFF3D6'],
  red: ['#FF6C40', '#FF8F6D', '#FFBD98', '#FFF2D4'],
};

const COMMON = {
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  info: { ...INFO },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR },
  grey: GREY,
  gradients: GRADIENTS,
  divider: GREY[500_24],
  chart: CHART_COLORS,
  action: {
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

const palette = {
  light: {
    ...COMMON,
    text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
    background: { paper: '#fff', default: '#fff', neutral: GREY[200] },
    action: { active: GREY[600], ...COMMON.action },
  },
  dark: {
    ...COMMON,
    text: { primary: '#fff', secondary: GREY[400], disabled: GREY[500] },
    background: { paper: GREY[800], default: GREY[900], neutral: GREY[500_16] },
    action: { active: GREY[500], ...COMMON.action },
  },
};

export default palette;
