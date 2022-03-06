import React,{ useEffect } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router';

const NotFound = () => {
    const routes = useRouter();
    useEffect(()=>{
        const redirectToHome = setTimeout(() => {
            routes.push("/")
        }, 1000);
        return ()=>{
            clearTimeout(redirectToHome);
        }
    },[])
  return (
    <div className='not-found'>
        <h1>Oooops .... </h1>
        <h2>Page Doesnt exists</h2>
        <p>Go back to the Home 
            <Link href="/">👉🏼 HOME</Link>
        </p>
    </div>
  )
}

export default NotFound