'use Client'
import React, { useState } from 'react'
import * as NavBarSearchStyle from "@/app/component/header/nav-bar-search.css"

export default function NavBarSearch() {


  const [item,setItem]=useState("");

  const handleItem=(input)=>{
    
   setItem(input.target.value);
      
     
  }

  return ( 
    
     <div className={NavBarSearchStyle.navBarSearchContainer}> 
      <div className={NavBarSearchStyle.navBarSearch}>
      <form className={NavBarSearchStyle.navBarSearchForm}> 
      <input className={NavBarSearchStyle.navBarSearchInput} onChange={handleItem} type="text" placeholder="Search..."  />
      </form>
      </div>
          <div className={NavBarSearchStyle.navBarSearchBtn}>
       <button onClick={handleItem}>search</button>
      </div>
    
    
     </div>
    
  )
}
