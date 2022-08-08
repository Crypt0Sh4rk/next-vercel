// import Head from 'next/head'
import Link from 'next/link';
import { MainLayout } from '../../components/layouts/MainLayout'
import { FC, ReactComponentElement, ReactElement } from 'react';

export default function PricingPage() {
  return (
    <>
    {/*  <MainLayout>
       <DarkLayout> */}
          <h1>Pricing Page</h1>

          <h1 className="title">
            Ir a <Link href="/">Home!</Link>
          </h1>

          <p className={'description'}>
            Get started by editing{' '}
            <code className={'code'}>pages/pricing/index.tsx</code>
          </p>
        {/* </DarkLayout>
      </MainLayout> */}
    </>
  )
}

PricingPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
        { page }
    </MainLayout>
  )
}