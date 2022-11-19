import { useEffect, useRef, useState } from 'react'
import axios from 'axios'

import './App.css'
import MainOne from './modules/mainOne'
import MainTwo from './modules/mainTwo'
import MainThree from './modules/mainThree'
import Footer from './modules/footer'

import VanillaTilt from 'vanilla-tilt'

function Tilt(props: any){
  const { options, ...rest} = props
  const tilt = useRef(null)

  useEffect(()=>{
      VanillaTilt.init(tilt.current, options)
  }, [options])

  return <div ref={tilt} {...rest}/>
}

function App() {
  const [userName, setUserName] = useState('')
  const [userImg, setUserImg] = useState('')
  const [userBio, setUserBio] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const [repos, setRepos] = useState([])

  useEffect(()=>{
    getApiGit()
    getApiRepos()
  })

  function getApiGit(){
    axios.get('https://api.github.com/users/luciano655dev')
    .then(r=>{
      setUserName(r.data.login)
      setUserBio(r.data.bio)
      setUserImg(r.data.avatar_url)
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
      <MainOne userName={userName} userBio={userBio} userImg={userImg} Tilt={Tilt}></MainOne>
      <MainTwo repos={repos}></MainTwo>
      <MainThree Tilt={Tilt}></MainThree>
      <Footer></Footer>
    </div>
  )
}

export default App
