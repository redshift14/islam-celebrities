import Link from 'next/link'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa6'
import Search from './Search'
import styles from '../styles/Home.module.css'

const Home = ({ persons, prevPage, nextPage, totalPages, page, search }) => {

  return (
    <section className={styles.main}>
      <Search />
      <div className={styles.list_container}>
        {
          persons.persons.map(item => {
            const { id, name, biography} = item
            return (
              <Link key={id} href={`/${id}`} className={styles.list_item}>
                <h2>{name}</h2>
                <p>{biography}</p>
              </Link>
            )
          })
        }
      </div>
      {
        !search && (
          <div className={styles.pagination_wrapper}>
            <div className={styles.pagination}>
              {
                page === 1 ? <label className={styles.disabled_r}><FaChevronRight/></label> : 
                <Link className={styles.btn_r} href={`?page=${prevPage}`}><FaChevronRight/></Link>
              }
              <label className={styles.page_number}>{page}</label>
              {
                page === totalPages ? <label className={styles.disabled_l}><FaChevronLeft/></label> : 
                <Link className={styles.btn_l} href={`?page=${nextPage}`}><FaChevronLeft/></Link>
              }
            </div>
          </div>
        )
      }
    </section>
  )
}

export default Home