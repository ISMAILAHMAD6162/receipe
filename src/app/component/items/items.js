'use client'
import React from 'react'
import * as itemStyle from "@/app/component/items/items.css"
import CardView from './card/card-view'
import { useState } from 'react'

export default function Items(props) {



  return (
    
    <div className={itemStyle.wraper}>
        <div className={itemStyle.itemsContainer}>
        {props.cardItems.map((obj) => (

          <CardView key={obj.id} obj={obj} cardItems={props.cardItems} setCardItems={props.setCardItems} /> 

        ))}

        </div>
      
    </div>
  )
}
