import countries from '../index'

describe('countries', () => {
  it('expects getAllCountries() should fetched all countries', async () => {
    const response = await countries.getAllCountries()
    expect(response.length).toEqual(250)
    expect(response).toBeInstanceOf(Array)
    expect(response.status).toEqual(200)
    expect(response).toBeDefined()
  })
  it('expects getCountryByRegion() should fetched countries by region', async () => {
    const response = await countries.getCountriesByRegion()
    expect(response).toBeInstanceOf(Array)
    expect(response.length).toEqual(53)
    expect(response).toBeDefined()
    expect(response.status).toEqual(200)
  })
  it('expects getCountryByName() should fetched countries by name', async () => {
    const response = await countries.getCountriesByName()
    expect(response).toBeInstanceOf(Array)
    expect(response.length).toEqual(1)
    expect(response).toBeDefined()
    expect(response.status).toEqual(200)
  })
})
