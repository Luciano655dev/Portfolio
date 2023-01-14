import { useEffect, useRef, useState } from 'react'
import axios from 'axios'

// Components
import MainSec from './components/mainSection/main'
import MadeWithSec from './components/madewith/main'
import ProjetcSec from './components/projectsSection/main'
import SocialSec from './components/socialSection/main'
import Footer from './components/footer/main'

import './components/bubble/bubble.css'
import VanillaTilt from 'vanilla-tilt'

function Tilt(props: any){
  const { options, ...rest} = props
  const tilt: any = useRef(null)

  useEffect(()=>{
      VanillaTilt.init(tilt.current, options)
  }, [options])

  return <div ref={tilt} {...rest}/>
}

export function App() {
  const [userInfo, setUserInfo] = useState({})

  const [errorMsg, setErrorMsg] = useState('')

  const [repos, setRepos] = useState([])

  useEffect(()=>{
    getApiGit()
    getApiRepos()
  })

  function getApiGit(){
    axios.get('https://api.github.com/users/luciano655dev')
    .then(r=>{
      setUserInfo({
        name: r.data.name,
        bio: r.data.bio,
        img: r.data.avatar_url
      })
    })
    .catch(err=>{ setErrorMsg(err); console.log(err) })
  }

  function getApiRepos(){
    axios.get('https://api.github.com/users/Luciano655dev/repos')
    .then(r=>{
      setRepos(r.data)
    })
  }


  return (
    <div className="body">
      {html.map((div: any)=>div)}
      <h1>{errorMsg}</h1>
      <MainSec userInfo={userInfo} Tilt={Tilt}></MainSec>
      <MadeWithSec></MadeWithSec>
      <ProjetcSec repos={repos}></ProjetcSec>
      <SocialSec Tilt={Tilt}></SocialSec>
      <Footer></Footer>
    </div>
  )
}

// Bubbles
const { innerWidth: width } = window
let html: any = []
let times: any = [{min: 5, max: 95}, {min: 105, max: 195}, {min: 205, max: 295}, {min: 305, max: 395}]

for(let t in times){
  let cords: any = []
  const qnt = width<=500?10:20
  
  for(let i=0; i<=qnt; i++) cords.push({ x: Math.round(Math.random() * (90 - 5) + 5), y: Math.round(Math.random() * (times[t].max - times[t].min) + times[t].min), animDuration: Math.round(Math.random() * (5 - 3) + 3)})
  for(let i=1; i<=qnt; i++) html.push(<div className="bubble" style={{ left: `${cords[i].x}%`, top: `${cords[i].y}%`, backgroundColor: '#161623', animationDuration: `${cords[i].animDuration}s` }}></div>)
}