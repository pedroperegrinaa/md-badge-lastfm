import express from 'express'
import { getTopTracks } from './getTopTracks'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/topTracks', async (req, res) => {
  console.log(req.query)

  res.status(200).json(await getTopTracks(req.query.userId))
}
)

app.listen(3000, () => {
  console.log('Server is running on port 3000')
}
)
