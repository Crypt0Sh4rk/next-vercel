// import Head from 'next/head'
import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'
import { Page } from '../components/Page'
// import { Navbar } from '../components/Navbar'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function HomePage() {
  return (
    <MainLayout>
      <Page />

      <h1>Home Page</h1>

      {/* <h1 className={styles.title}> */}
      <h1 className="title">
        {/* Ir a <a href="/about">About!</a> */}
        Ir a <Link href="/about">About</Link>
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/index.jsx</code>
      </p>
    </MainLayout>
  )
}
