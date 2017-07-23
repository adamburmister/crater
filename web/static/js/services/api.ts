const API_ENDPOINT = '/api/v1'

class CraterApiService {
  public async getAllSnippets() {
    const url = `${API_ENDPOINT}/snippets`
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    })
    if (!response.ok) {
      throw new Error(`CraterApiService getAllSnippets failed, HTTP status ${response.status}`)
    }
    const data = await response.json()
    return data
  }
}

export default new CraterApiService()
