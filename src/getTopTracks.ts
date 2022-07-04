import ApiLastFM from './service'
import { Mocktoptracks } from './mocks'
const api = new ApiLastFM()

export async function getTopTracks (userId) {
  if (process.env.NODE_ENV === 'mock') {
    return Mocktoptracks.forEach(track => {
      console.log(track.name, '\n')
    })
  } else {
    const response = await api.getTopTracks(userId)
    console.log(response.data.toptracks)

    const toptracks = response.data.toptracks.track

    toptracks.forEach(track => {
      console.log(track.artist.name)
      console.log(track.name, '\n')
    })
  }
}

getTopTracks('pedroperegrinaa')
