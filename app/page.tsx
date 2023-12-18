import { HomePage } from '@/components';
import { TransitionEffect } from '@/components';

export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col items-center justify-between p-5 md:p-24 ">
      <TransitionEffect />
      <HomePage />
    </main>
  );
}
