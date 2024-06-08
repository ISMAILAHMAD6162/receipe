import { theme } from "@/app/theme/theme.css";
import { style } from "@vanilla-extract/css"
import { breakpoints } from "@/app/strings/strings";

export const navBarlogoContainer=style({
   
    display:"flex",
    width:"20%",
    marginLeft:"2%",
    justifyContent:"center",
    alignItems:"center",
 alignContent:"center",
    height:"100%",
    '@media':{
     [breakpoints.xxs]:{

        display:"none",

     },
 
    
    }
 
 
     })
 
 
     export const navBarlogo=style({
         display:"block",
         width:"65%",
         marginTop:"10%",
         backgroundColor:"white",
         borderRadius:"50%",
         border:"solid #ff611d 0.6rem",
         height:"100%",
         '@media':{
          [breakpoints.xxs]:{

        
            
          },
         }
      
      
          })