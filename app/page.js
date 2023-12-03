import { connectToDB } from '@/utils/connectDB'
import Home from '@/components/Home'

const getData = async (perPage, page, search) => {
  
  try {
    const client = await connectToDB()
    const db = client.db('persons')

    const collection = db.collection('persons')
    const skip = (page - 1) * perPage
    const limit = perPage

    const pipleline = [{ $skip: skip }, { $limit: limit }]

    if (search) {
      pipleline.pop()
      pipleline.unshift({
        $search: {
          index: 'default',
          text: {
            query: search,
            fuzzy: {
              maxEdits: 1,
              prefixLength: 3,
              maxExpansions: 50,
            },
            path: 'name'
          }
        }
      }, 
      {
        $limit: 20
      })
    }

    const persons = await collection.aggregate(pipleline).toArray()
    const itemsCount = await collection.countDocuments()

    const res = { persons, itemsCount }
    return res
  }
  catch (err) {
    throw new Error('Failed to fetch data')
  }
}

const HomePage = async ({ searchParams }) =>  {

  let page = parseInt(searchParams.page, 10)
  page = !page || page < 1 ? 1 : page

  const perPage = 10

  const search = typeof searchParams.search === 'string' ? searchParams.search : undefined

  const data = await getData(perPage, page, search)

  const totalPages = Math.ceil(data.itemsCount / perPage)

  const prevPage = page - 1 > 0 ? page - 1 : 1
  const nextPage = page + 1 

  return (
    <Home persons={data} nextPage={nextPage} prevPage={prevPage} totalPages={totalPages} page={page} search={search} />
  )
}

export default HomePage