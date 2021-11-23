import { createContext, useState } from "react"
import citiesTemplate from '../city.json'

const CityContext = createContext({})

const CityContextProvider = (props) => {
    const [cities, setCity] = useState(citiesTemplate)


    const value = { 
        cities,
        setCity
      }
    
      return (
        <CityContext.Provider value={value}>
          {props.children}
        </CityContext.Provider>
      )
}

export {
    CityContext,
    CityContextProvider
  }