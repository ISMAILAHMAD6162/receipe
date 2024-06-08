import { theme } from "@/app/theme/theme.css";
import { style } from "@vanilla-extract/css"
import { breakpoints } from "@/app/strings/strings";

export const wave=style({
    position:"absolute" ,
    width:"100%",
    zIndex:"0",
    display:"flex",
    right:"0%",
    margin:"0",
    height:"50vh",
    '@media':{
        [breakpoints.xxs]:{
          
          height:"45vh",

        }
    }

});
