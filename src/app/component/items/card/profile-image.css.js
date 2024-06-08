import { theme } from "@/app/theme/theme.css";
import { style } from "@vanilla-extract/css"
import { breakpoints } from "@/app/strings/strings";

export const wraper=style({
    height:"80%",
    width:"80%",
    backgroundColor:"transparent",
    position:"absolute",
    display:"flex",
    borderRadius:"50%",
    alignContent:"center",
    alignItems:"center",
    justifyContent:"center",
    zIndex:"1",
    flexDirection:"column",
    alignItems:"center",
   
});

