import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import styles from '../styles/Person.module.css'

const Person = ({ data }) => {
  return (
    <section className={styles.main}>
      <div>
        <h1>{data?.name}</h1>
        <Link href={'/'} className={styles.btn}>
          الرجوع
          <FaArrowLeft />
        </Link>
      </div>
      <p>{data?.biography}</p>
    </section>
  )
}

export default Person