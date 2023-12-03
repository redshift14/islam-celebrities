import { MongoClient } from 'mongodb'

let client = null

export const connectToDB = async () => {
  if (client) return client

  try {
    client = await MongoClient.connect(process.env.MONGO_DB_URI)
    console.log('Connected to db')
    return client
  }
  catch (err) {
    console.error('Error connecting to db', err)
  }
}