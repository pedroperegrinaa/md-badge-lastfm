import axios from 'axios'

export default class ApiLastFM {
  api: any

  constructor () {
    this.api = axios.create({
      baseURL: 'http://ws.audioscrobbler.com/2.0/',
      params: {
        api_key: process.env.API_KEY,
        format: 'json'
      }
    })
  }

  public async getTopTracks (userId) {
    return await this.api.get(`?method=user.gettoptracks&user=${userId}`)
  }
}
