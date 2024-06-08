'use Client'
import { theme } from "@/app/theme/theme.css";
import { style } from "@vanilla-extract/css"
import { breakpoints } from "@/app/strings/strings";

export const wraper=style({

    display:"flex",
    height:"45vh",
    alignContent:"center",
    alignItems:"center",
    justifyContent:"center",
    width:"100%",
    '@media':{
        [breakpoints.xxs]:{

            marginTop:"1%",
            height:"25vh",
        }
    }

});

export const itemsContainer=style({
    width:"98%",
    display:"flex",
    height:"100%",
    alignItems:"center",
    alignContent:"center",
    overflowX:"scroll",
    scrollbarWidth:"none",
    overflowY:"hidden",
    '@media':{
        [breakpoints.xxs]:{

            
        }
    }

});