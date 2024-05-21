import React, { useEffect, useState } from "react"
import Fetch from "./Fetch"
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import Loading from "./loading/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      <Loading/>
    },3000)
  },[])

  return (
    <>
      <Fetch/>
    </>
  )
}

export default App
