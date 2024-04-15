import VerticalChart from "@/components/VerticalChart";
import styles from "@/styles/Home.module.css";
import HorizontalChart from "@/components/HorizontalChart";
import PieChart from "@/components/PieChart";

export default function Home() {
  return (
    <>
      
      <main className={`${styles.main} `}>
       <VerticalChart/>
       <HorizontalChart/>
       <PieChart/>
      </main>
    </>
  );
}
