import Head from 'next/head'
// import { FC } from 'react'
import { Navbar } from '../Navbar'
import styles from './MainLayout.module.css'

export const MainLayout = ({ children }:{children: React.ReactNode}) => {
    return (
        <>
            <div className={styles.container}>
                <Head>
                    <title>Contact - Mora</title>
                    <meta name="description" content="About Page" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <Navbar />

                <main className={styles.main}>
                    { children }
                </main>

            </div>
        </>
    )
}
