'use Client'
import React from 'react'
import Image from 'next/image'
import wave from "/Users/ahmadismail/Desktop/Ahmad /Job/MyWeb/recipe/public/assests/wave.png"
import * as waveStyle from "@/app/component/header/wave.css"

export default function Wave() {
  return (
    <div className={waveStyle.wave} >
      <Image className={waveStyle.wave} src={wave} priority={true} alt="Logo"/>
    </div>
  )
}
