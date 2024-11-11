import { useEffect, useMemo, useState } from "react";
import { json } from "stream/consumers";
import css from './css/YoinkedGA.css'
import { faceDownCard } from "./FaceDownCard";
import { faceUpCard } from "./FaceUpCard";
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
    console.log(JSON.stringify(fetchedCards[0]))
  }
  useEffect(()=>{
    getCards();
  },[])

  return <div style={{width:'100%', height:'100%', border:'solid'}}>

    <div id={'Board'} style={{width:'100%', height:'80%', background:'grey'}}>
      <div id={'TheirZones'} style={{alignItems:'center',width:'100%',height:'45%',justifyContent:'center',background:'purple'}}></div>
      <div id={'padding'} style={{width:'100%',height:'10%'}}></div>
      <div id={'MyZones'} style={{display:'flex',flexDirection:'row',alignItems:'center',width:'100%',height:'45%',justifyContent:'center', background:'teal'}}>
        <div id={'myMemory'} style={{width:'20%',height:'100%'}}>Memory</div>
        <div id= {'myField'} style={{alignItems:'center',width:'60%',height:'100%',justifyContent:'center', background:'teal'}}>
          <div id={'AllyZone'} style={{alignItems:'center',width:'100%',height:'50%',justifyContent:'center',border:'solid'}}> Ally Zone</div>
          <div id={'ChampZone'} style={{alignItems:'center',width:'100%',height:'50%',justifyContent:'center',border:'solid'}}> Champ Zone</div>
        </div>
        <div id={'deadStuff'} style={{width:'20%',height:'100%'}}>
          <div id='banish' style={{height:'50%',width:'100%',border:'solid'}}>Banish</div>
          <div id= 'grave' style={{height:'50%',width:'100%',border:'solid'}}>Grave</div>
        </div>
      </div>
    </div>
    <div id={'playerStuff'} style={{display:'flex',flexDirection:'row',alignItems:'center',width:'100%',height:'20%',justifyContent:'center', background:'brown'}}>
    <div id={'extraDeck'} style={{width:'20%', height:'100%', background:'orange'}}>Extra Deck </div>
    <div id = {'Hand'} style={{display:'flex',flexDirection:'row',alignItems:'center',width:'60%',height:'100%',justifyContent:'center', background:'blue'}}>
    
     Hand
      {cards.map((card)=>faceUpCard(card))}
        </div>
        <div id={'Deck'} style={{width:'20%', height:'100%', background:'green'}}>
        <img src={'/images/icons/ygo.jpg'} style={{width:60}}/>
           </div>
        </div>
  </div>;
}
