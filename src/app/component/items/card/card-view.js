'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import wave from "/Users/ahmadismail/Desktop/Ahmad /Job/MyWeb/recipe/public/assests/wave.png"
import * as cardViewStyle from "@/app/component/items/card/card-view.css"
import IconView from './icon-view'
import TitleView from './title-view'
import ProfileImage from './profile-image'
import classNames from 'classnames'
import { itemsList } from '@/app/models/Item'
import Wave from '../../header/wave'

export default function CardView(props) {

  const [select,setSelected]=useState(props.obj);


  const defaultClass = classNames(cardViewStyle.notSelectionWraper,cardViewStyle.cardViewContainer);
  const statusClass = classNames(cardViewStyle.selectionWraper,cardViewStyle.cardViewContainer);

  const handlCardClick=(item)=>{
  
    console.log(item);
   
    let r=props.cardItems.map((a)=>{
     
       
      if(a.status==1)
        {
          a.status=0;
          return a;
        }
        else
        {
          
         return a;

      
        }
     
           
       
      });
      let rr=props.cardItems.map((a)=>{
     
       
        if(item.id==a.id)
          {
            a.status=1;
            return a;
          }
          else
          {
            
           return a;
  
        
          }
       
             
         
        });
      
      props.setCardItems(r);
      props.setCardItems(rr);
  }


  return (

<div className={props.obj.status==1?statusClass:defaultClass} onClick={()=>handlCardClick(props.obj)} >
           
          <IconView></IconView>   
          <ProfileImage></ProfileImage>
          <TitleView> </TitleView>
      
    
    </div>


  )
}
