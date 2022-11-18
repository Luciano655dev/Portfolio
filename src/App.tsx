import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import axios from 'axios'

import './App.css'
import MainOne from './modules/mainOne'

function App() {
  const [count, setCount] = useState(0)

  const [userName, setUserName] = useState('')
  const [userImg, setUserImg] = useState('')
  const [userBio, setUserBio] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(()=>{
    getApiGit()
  })

  function getApiGit(){
    axios.get('https://api.github.com/users/luciano655dev')
    .then(r=>{
      console.log(r)
      setUserName(r.data.login)
      setUserBio(r.data.bio)
      setUserImg(r.data.avatar_url)
    })
    .catch(err=>{ setErrorMsg(err); console.log(err) })
  }
  

  return (
    <div className="body">
      <MainOne userName={userName} userBio={userBio} userImg={userImg}></MainOne>
      <h1>{errorMsg}</h1>
    </div>
  )
}

export default App
