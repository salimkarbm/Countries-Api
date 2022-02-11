import axios from 'axios'

async function getAllCountries() {
  try {
    const result = await axios.get('https://restcountries.com/v3.1/all')
    return result.data
  } catch (error) {
    console.error(error)
  }
}

async function getCountriesByName() {
  try {
    const result = await axios.get('https://restcountries.com/v3.1/name/peru')
    return result.data
  } catch (error) {
    console.error(error)
  }
}

async function getCountriesByRegion() {
  try {
    const result = await axios.get(
      'https://restcountries.com/v3.1/region/europe'
    )
    return result.data
  } catch (error) {
    console.error(error)
  }
}

export default {
  getAllCountries,
  getCountriesByRegion,
  getCountriesByName,
}
