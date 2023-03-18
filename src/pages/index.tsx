import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import SeoComponent from '@/components/seo'
import { useContext } from 'react'
import { LoginContext } from '@/contexts/loginContext'
import { getToken } from '@/services/loginService'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const loginContext = useContext(LoginContext);

  const handleLoginButtonClick = async ()=>{
    const token = await getToken();
    loginContext.actions.login(token);
  }

  return (
    <>
      <SeoComponent />
      <div className="">
        <div>First page</div>
        <div className="">{loginContext.data.token}</div>
        <button className='bg-[#d3d3d3]' onClick={!loginContext.data.isLoggedIn ? handleLoginButtonClick : ()=>{}}>{!loginContext.data.isLoggedIn ? "Click to login" : "Logged"}</button>
      </div>
    </>
  )
}
