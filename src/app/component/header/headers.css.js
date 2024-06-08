import { theme } from "@/app/theme/theme.css";
import { style } from "@vanilla-extract/css"
import { breakpoints } from "@/app/strings/strings";


export const wraper=style({

   backgroundColor:"transparent",
   display:"flex",
   height:"30vh",
   position:"relative",
   '@media':{
    [breakpoints.xxs]:{
   

    },
   }
   
   });

export const headerContainer=style({
backgroundColor:"transparent",
display:"flex",
height:"60%",
width:"100%",
position:"relative",
zIndex:"1",
justifyContent:"center",
alignItems:"center",
alignContent:"center",
flexDirection:"row",
'@media':{
 [breakpoints.xxs]:{
    flexDirection:"column",

    

 },
}

});



