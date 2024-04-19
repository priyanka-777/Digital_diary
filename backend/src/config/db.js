import mongoose from 'mongoose'

//const MONGO_URI = 'mongodb://127.0.0.1:27017/test'
//const MONGO_URI = "mongodb+srv://Teju:test1234@cluster0.dkkurey.mongodb.net/?retryWrites=true&w=majority"
const MONGO_URI = "mongodb+srv://Teju:Teju123@cluster0.dkkurey.mongodb.net/?retryWrites=true&w=majority"
if (!MONGO_URI)
  throw new Error(
    'Please define the MONGO_URI environment variable inside .env'
  )

async function db() {
  try {
    const conn = await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log(`MongoDB connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(`Error: ${error}`)

    process.exit(1)
  }
}

export default db
