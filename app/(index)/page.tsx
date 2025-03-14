import { LandingNav } from '@/components/landing-nav';
import FinancialCalculator from '@/components/financial-calculator';
import styles from './main.module.css';

export default function Home() {
  return (
    <div className="h-full flex items-center justify-center flex-col gap-12">
      <LandingNav />
      <div className=" text-white text-3xl ">
        Landing Page (Unauthenticated)
      </div>

      <FinancialCalculator />
    </div>
  );
}
