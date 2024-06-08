'use client'
import React from 'react'
import NavBarlogo from './nav-bar-logo'
import * as headerStyle from "@/app/component/header/headers.css"
import NavBarSearch from './nav-bar-search'

export default function  Header() {

  
  return (


    <div className={headerStyle.wraper}>

    <div className={headerStyle.headerContainer}>
        <NavBarlogo> </NavBarlogo> 
        <NavBarSearch></NavBarSearch>
            
      </div> 

      </div>
    
  )
}
