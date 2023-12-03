import { connectToDB } from '@/utils/connectDB'
import Person from '@/components/Person'

const getData = async (id) => {

  const client = await connectToDB()

  const db = client.db('persons')

  const collection = db.collection('persons')

  const data = await collection.findOne({ id: parseInt(id) })

  return data
}

const CelebrityPage = async ({params}) => {

  const { id } = params

  const person = await getData(id)

  return (
    <Person data={person} />
  )
}

export default CelebrityPage