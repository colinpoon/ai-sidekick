import { LandingNav } from '@/components/landing-nav';
import styles from './main.module.css';

export default function Home() {
  return (
    <div className="h-full flex items-center justify-center">
      <LandingNav />
      <div className=" text-white text-3xl ">
        Landing Page (unprotected)
      </div>
    </div>
  );
}
