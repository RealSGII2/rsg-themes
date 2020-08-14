import { MongoClient } from 'mongodb'
const URI = "mongodb+srv://thomas:6561WillW@cluster0.zmnx1.gcp.mongodb.net/data?retryWrites=true&w=majority"

const Database = new MongoClient(URI, { useNewUrlParser: true })

export default (req, res) => {
  try {
    Database.connect((error, client) => {
      if (error) throw error
      const themes = client.db("data").collection("themes")
      themes.find({}).toArray(async (e, result) => {
        if (e) throw e
        res.statusCode = 200
        await res.json({
          data: result
        })
        await client.close()
      })
    })
  } catch {
    res.statusCode = 500
    res.send()
  }
}
