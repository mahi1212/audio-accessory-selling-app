import { colors } from "../../theme/colors";
import { typography } from "../../theme/typography";

const BASE = {
    fontFamily: typography.primary,
    color: colors.black,
  };
  
  const BOLD = {
    fontFamily: typography.bold,
    color: colors.black,
  };

  export const presets = {
    default: BASE,
    bold: BOLD,
    h1: {
      ...BOLD,
      fontSize: 36,
    },
    h2: {
      ...BOLD,
      fontSize: 30,
    },
    h3: {
      ...BOLD,
      fontSize: 24,
    },
    h4: {
      ...BOLD,
      fontSize: 20,
    },
    h5: {
      ...BOLD,
      fontSize: 18,
    },
    h6: {
      ...BOLD,
      fontSize: 16,
    },
    
    title:{
      fontFamily: typography.regular,
      fontSize:20
    },
    subtitle: {
      ...BASE,
      fontSize: 16,
      color: colors.gray
    },
    overline: {
      fontFamily: typography.medium,
      color: colors.darkGray,
      fontSize: 14,
    },
  };