// import Head from 'next/head'
import Link from 'next/link'
import { DarkLayout } from '../components/layouts/DarkLayout'
import { MainLayout } from '../components/layouts/MainLayout'
// import { Page } from '../components/Page'
// import { Navbar } from '../components/Navbar'
// import styles from '../styles/Home.module.css'
import { ReactElement } from 'react';

export default function AboutPage() {
  return (
    <>
    {/*  <MainLayout>
       <DarkLayout> */}
          <h1>About Page</h1>

          <h1 className="title">
            Ir a <Link href="/">Home!</Link>
          </h1>

          <p className={'description'}>
            Get started by editing{' '}
            <code className={'code'}>pages/about.tsx</code>
          </p>
        {/* </DarkLayout>
      </MainLayout> */}
    </>
  )
}

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <DarkLayout>
        Hola Mundo!
        { page }
      </DarkLayout>
    </MainLayout>
  )
}