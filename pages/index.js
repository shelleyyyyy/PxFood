import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import StoreComp from '../components/index/comp'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>
        PX Food
      </h1>

      <div className={styles.carasel}></div>


      <StoreComp></StoreComp>
    </div>
  )
}
