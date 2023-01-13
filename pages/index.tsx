import type { NextPage } from 'next'
import LoginBox from '../components/LoginBox'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <>
      <Navbar current='Home' />
      <div className='flex flex-col lg:flex-row justify-center mt-20'>
        <h1 className='font-bold lg:text-6xl text-4xl px-12 lg:px-0 text-center lg:text-right mx-auto mb-8 lg:my-auto lg:ml-40'>
          Zentrack - Track Bugs<br/>and Fix them</h1>
        <div className='flex place-content-center mx-auto lg:ml-0'>
          <LoginBox />
        </div>
      </div>
    </>
  )
}

export default Home