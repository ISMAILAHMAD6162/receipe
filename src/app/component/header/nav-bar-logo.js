'use Client'
import React from 'react'
import Image from 'next/image'
import * as logoStyle from "@/app/component/header/nava-bar-logo.css"
import logo from "/Users/ahmadismail/Desktop/Ahmad /Job/MyWeb/recipe/public/assests/abc.png"

export default function NavBarlogo(){
  return (
   
   <div className={logoStyle.navBarlogoContainer}>
    
       <Image className={logoStyle.navBarlogo} src={logo} alt="Logo"/> 
    
    
    </div>
  )
}
