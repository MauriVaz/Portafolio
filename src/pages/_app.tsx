import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Menu from '@/components/Menu'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (<>
    <div className='bg-black'>
      <nav>
        <Menu />
      </nav>
      <div className='mt-8'>
        <Component {...pageProps} />
      </div>
    </div>
  </>)
}

export default MyApp;