import { theme } from "@/app/theme/theme.css";
import { style } from "@vanilla-extract/css"
import { breakpoints } from "@/app/strings/strings";
import { wraper } from "./icon-view.css";


export const cardViewContainer=style({

      height:"70%",
      display:"flex",
      position:"relative",
      flexDirection:"column",
      width:"18%",
      marginLeft:"2%",
      alignItems:"center",
      borderRadius:"5%",
      backgroundColor:"white",
      '@media':{
            [breakpoints.xxs]:{
                     
            }
        }
});


export const selectionWraper = style({
      
      border: "solid #ff611d 3px",
      transition: "all 0.4s ease", // Applying transition to all properties
      boxShadow: "5px 5px 20px rgba(0, 0, 0, 0.3)",
      flexShrink: "0",
      marginBottom:"4%",
    });
      
export const notSelectionWraper=style({
      marginTop:"0%",
      boxShadow:"10px 0px 10px rgba(0, 0, 0, 0.2)",
      flexShrink:"0",
    
  
            
});

