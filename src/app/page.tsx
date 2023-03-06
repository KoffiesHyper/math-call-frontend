import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Playback from './Playback'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {

  return (
    <div>
      <Link href='/login'><button>Login</button></Link>
    </div>
  )
}
