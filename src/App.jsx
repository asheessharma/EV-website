import { useEffect, useState } from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";



export default function App() {
  let heroData = [
    {text1:"Dive into" , text2: "what you love"},
    {text1:"Indulge" , text2: "Your passion"},
    {text1:"Give in to" , text2: "Your passion"},
  ];
  const [herocount, setherocount] = useState(2);
  const [playstatus, setplaystatus] = useState(false);
  useEffect(()=>{
    setInterval(()=>{
      setherocount((count)=>{return count==2?0:count+1})
    },3500);
  },[])


  return (
    <div>
      <Background herocount={herocount} playstatus={playstatus}/>
      <Navbar/>
      <Hero 
        setplaystatus={setplaystatus} 
        heroData = {heroData[herocount]}
        herocount = {herocount}
        setherocount = {setherocount}
        playstatus = {playstatus}
      />
    </div>
  )
}
