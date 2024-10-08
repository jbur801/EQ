import { useEffect, useMemo, useState } from "react";
import { json } from "stream/consumers";

const proxyPrefix = 'https://infinite-bayou-83293-7e3a584bfa26.herokuapp.com/'
const artLocationSrcPrefix = 'https://ga-index-public.s3.us-west-2.amazonaws.com/cards/'
const extension = '.jpg'
const imgWidth = '500'
const imgHeight = '700'
//Possibly not required, will skip for now
export default function CreateLobby() {
  const [cards,setCards] = useState<any[]>([])
  const getCards = async ()=>{
    const fetchedCards = await fetch(proxyPrefix+'https://api.gatcg.com/cards/random?amount=3').then(response => response.json())
    setCards(fetchedCards);
  }
  useEffect(()=>{
    getCards();
  },[])

  return <div style={{width:'100%', height:'100%', border:'solid'}}>

    <div id={'Board'}></div>
    <div id = {'Hand'}>
     
      {cards.map((card)=>{
        console.log(card,card.slug)
        return<div id= {card.id}>
          <img src = {artLocationSrcPrefix+card.editions[0].slug+extension}  style={{width:90}}/>
          </div>
      })}
        </div>
  </div>;
}
