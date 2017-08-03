const API_ENDPOINT = '/api'

interface ApiResponse {
  data: any
}

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
    const data = await response.json() as ApiResponse
    return data
  }

  public async getSnippetById(id) {
    const url = `${API_ENDPOINT}/snippets/${id}`
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    })
    if (!response.ok) {
      throw new Error(`CraterApiService getAllSnippets failed, HTTP status ${response.status}`)
    }
    const data = await response.json() as ApiResponse
    return data
  }
}

export default new CraterApiService()
