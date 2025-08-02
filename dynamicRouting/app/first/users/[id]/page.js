'use client'
import React from 'react'
import {useParams , useRouter} from 'next/navigation'

function page() {
  const router = useRouter()
  const {id} = useParams()

  return (
    
    <div>
      <h2>the user account id is </h2>
      <p>{id}</p>
      <button onClick={() => router.push("/first")}>go back</button>
    </div>
  )
}

export default page