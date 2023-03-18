import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import SeoComponent from '@/components/seo'

import { useDispatch } from 'react-redux';
import { getToken } from '@/services/loginService'
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { loginSelector } from '@/redux/login/selector'
import { loginAsync } from '@/redux/login'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const dispatch = useAppDispatch();
    const {
      token, isLoggedIn
    } = useAppSelector(loginSelector);
    
    const handleLoginButtonClick = async ()=>{
        dispatch(loginAsync());
    }

    return (
        <>
            <SeoComponent />
            <div className="">
                <p className="">Home page</p>
                <div className="">{token}</div>
                <button className='bg-[#d3d3d3]' onClick={!isLoggedIn ? handleLoginButtonClick : ()=>{}}>{!isLoggedIn ? "Click to login" : "Logged"}</button>
            </div>
        </>
  )
}
