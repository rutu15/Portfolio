import Image from 'next/image'
import { HomePage } from '@/components'
import {TransitionEffect} from '@/components'

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
       <TransitionEffect />
     I am about
    </main>
  )
}
