import { theme } from "@/app/theme/theme.css";
import { style } from "@vanilla-extract/css"
import { breakpoints } from "@/app/strings/strings";


export const navBarSearchContainer=style({
    display:"flex",
    width:"80%",
    height:"40%",
    marginTop:"3%",
    marginRight:"10%",
    justifyContent:"center",
alignItems:"center",
alignContent:"center",
    '@media':{
        [breakpoints.xxs]:{
           
            height:"40%",
            marginRight:"0%",
        },
       
       }
   
     })



export const navBarSearch=style({
    display:"flex",
    width:"70%",
    boxShadow:"12px 10px 20px rgba(0, 0, 0, 0.5)",
    backgroundColor:"white",
    borderRadius:"10rem 0rem 0rem 10rem",
    height:"80%",
    '@media':{
        [breakpoints.xxs]:{
          

        },
       
       }
   
     })

     export const navBarSearchForm=style({
        display:"flex",
        width:"100%",
        height:"100%",
        '@media':{
            [breakpoints.xxs]:{
              
    
            },
           
           }
       
         })

     export const navBarSearchInput=style({
        display:"flex",
        width:"100%",
        outline:"none",
        paddingLeft:"4%",
        backgroundColor:"white",
        borderRadius:"10rem 0rem 0rem 10rem",
        height:"100%",
        '@media':{
            [breakpoints.xxs]:{
             
            },
           
           }
       
         })


     export const navBarSearchBtn=style({
        display:"flex",
        width:"10%",
        backgroundColor:"#ff611d",
        height:"80%",
        border:"solid white 3px",
        boxShadow:"12px 10px 20px rgba(0, 0, 0, 0.5)",
        alignContent:"center",
        justifyContent:"center",
        alignItems:"center",
        '@media':{
            [breakpoints.xxs]:{
              width:"22%",
    
            },
           
           }
       
         })