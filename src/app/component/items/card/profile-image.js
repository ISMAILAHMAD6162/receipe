'use Client'
import React from 'react'
import Image from 'next/image'
import * as profileImageStyle from "@/app/component/items/card/profile-image.css"
import profileImage from "/Users/ahmadismail/Desktop/Ahmad /Job/MyWeb/recipe/public/assests/abc.png"

export default function ProfileImage() {
  return (
    <div className={profileImageStyle.wraper}>
      <Image src={profileImage} alt='missing'/>
    </div>
  )
}
