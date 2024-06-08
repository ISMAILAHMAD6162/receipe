import { createGlobalTheme } from "@vanilla-extract/css";
import * as strings from '@/app/strings/strings'

export const myColors= {

    primaryColor:'#ff611d',
    secondaryColor:'#ECF3F9',
    accentColors:'#ffffff',
    textPrimaryColor:'#000000',
    textSecondaryColor:'#000000',
}

export const myTypography= {

  fontFamily: strings.font.family,
  textWeight: strings.font.standardWeight,
  fontSize: strings.font.size,
  lineHeight: strings.font.lineHeight,
  letterSpacing: strings.font.letterSpacing,
  fontStyle: strings.font.style,

}

export const mytheme={      
 
    colors:myColors,
    typography:myTypography,
    
}



export const theme=createGlobalTheme(':root',mytheme);

