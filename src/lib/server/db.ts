import { MongoClient, type MongoClientOptions, ServerApiVersion } from 'mongodb'
import { dev } from '$app/environment'
import { MONGODB_URI } from '$env/static/private'

// Ensure the MONGODB_URI is provided
if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env')
}

const options: MongoClientOptions = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
}

// Function to create a MongoClient promise
const createClientPromise = async (): Promise<MongoClient> => {
  const client: MongoClient = new MongoClient(MONGODB_URI, options)
  await client.connect() // Ensure connection is established
  return client
}

// Initialize the database connection
const dbPromise: Promise<MongoClient> = (async (): Promise<any> => {
  if (dev) {
    // In development, use a global variable if not already set
    if (!global.mongoClient) {
      global.mongoClientPromise = createClientPromise()
    }
    return global.mongoClientPromise
  } else {
    // In production, directly create a new connection
    return createClientPromise()
  }
})()

export default dbPromise
