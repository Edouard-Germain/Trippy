import { createContext, useState } from "react"
import cities from '../city.json'

const CityContext = createContext({})

const CityContextProvider = (props) => {
    const [city, setCity] = useState(cities)


    const value = { 
        city,
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