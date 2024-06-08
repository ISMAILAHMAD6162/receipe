'use client'
import React from 'react'
import Image from 'next/image'
import * as iconeViewStyle from "@/app/component/items/card/icon-view.css"
import backShape from "/Users/ahmadismail/Desktop/Ahmad /Job/MyWeb/recipe/public/assests/abcd.png"
export default function IconView() {
  return (
    <div className={iconeViewStyle.wraper}>  

  <Image className={iconeViewStyle.cardViewIconContainer} src={backShape} alt='missing' />
  
    </div>
  )
}
