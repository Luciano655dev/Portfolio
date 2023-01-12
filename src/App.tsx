import { useEffect, useRef, useState } from 'react'
import axios from 'axios'

// App Css
import './App.css'

// Components
import MainOne from './components/mainSection/mainOne'
import MainTwo from './components/projectsSection/mainTwo'
import MainThree from './components/socialSection/mainThree'
import Footer from './components/footer/footer'

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
      <h1>{errorMsg}</h1>
      <MainOne userInfo={userInfo} Tilt={Tilt}></MainOne>
      <MainTwo repos={repos}></MainTwo>
      <MainThree Tilt={Tilt}></MainThree>
      <Footer></Footer>
    </div>
  )
}
