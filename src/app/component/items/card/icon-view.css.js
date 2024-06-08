import { theme } from "@/app/theme/theme.css";
import { style } from "@vanilla-extract/css"
import { breakpoints } from "@/app/strings/strings";

export const wraper=style({
    height:"90%",
    width:"85%",
    position:"relative",
    backgroundColor:"white",
    display:"flex",
    zIndex:"1",
    flexDirection:"column",
    alignItems:"center",
   
});

export const cardViewIconContainer=style({
    
    display:"flex",
    flexDirection:"row",
    height:"80%",
    opacity:"0.4",
    position:"absolute",
    width:"80%",
    backgroundColor:"white",
    zIndex:"0",
    flexShrink:"0",
    '@media':{
          [breakpoints.xxs]:{
           
          }
      }

});