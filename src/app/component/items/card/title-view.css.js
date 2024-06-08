import { theme } from "@/app/theme/theme.css";
import { style } from "@vanilla-extract/css"
import { breakpoints } from "@/app/strings/strings";

export const cardViewTitleContainer=style({

    height:"20%",
    display:"flex",
    flexDirection:"row",
    width:"100%",
    borderRadius:"5%",
    alignItems:"center",
    alignContent:"center",
    justifyContent:"center",
    position:"relative",
    flexShrink:"0",
    '@media':{
          [breakpoints.xxs]:{
           
              
          }
      }

});