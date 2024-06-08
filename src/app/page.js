"use client";  //  as a client component
import Image from "next/image";
import Header from "./component/header/header";
import Items from "./component/items/items";
import Recipe from "./component/recipe/recipe";
import Wave from "./component/header/wave";
import React, { useState } from "react";
import { itemsList } from '@/app/models/Item'

export default function Home() {

  const [cardItems,setCardItems]=useState(itemsList);

  return (
   
    <React.Fragment>
    <Wave> </Wave>   
   <Header></Header>
   <Items cardItems={cardItems} setCardItems={setCardItems}>  </Items>
   <Recipe></Recipe>
   <Wave> </Wave>  
   <Header></Header>
 
  

   </React.Fragment>
  
    
  );
}
