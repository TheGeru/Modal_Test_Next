import styles from '@/styles/styles.module.css';
import Footer from '@/components/Footer';
import Counter from '@/components/Counter';
import Login from '@/components/Login';
import IndexPage from '@/components/IndexPage';

export default function Home() {
  return (
    <div className={styles.content}>
    <div>
    <IndexPage />
    </div>
      <Footer />
    </div>
  )
}

