import styles from "./page.module.css";
<<<<<<< HEAD

=======
import RoomCard from "@/components/ProfileRoomCard";
>>>>>>> 32f2970331180a5748973688d303745b0ae989bf
export default function Home() {
  const handleLogin = async (email, password) => {
   
  };

  return (
    <main className={styles.main}>
      <div className={styles.grid}>
<<<<<<< HEAD
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        {}

=======
        <RoomCard></RoomCard>
>>>>>>> 32f2970331180a5748973688d303745b0ae989bf
      </div>

      {}
      
    </main>
  );
}
