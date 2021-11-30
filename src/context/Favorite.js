import { createContext, useState } from "react"



const FavoriteContext = createContext({})

const FavoriteContextProvider = (props) => {
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favorites")) || [])
    
    const onClickFavorite = (id) => {
        if (!localStorage.getItem("favorites")) {
            let newArray = []
            newArray.push(id)
            localStorage.setItem("favorites", JSON.stringify(newArray))
            setFavorites(JSON.stringify(newArray))
        } else {
            let favorites = JSON.parse(localStorage.getItem("favorites"))
            favorites.push(id)
            localStorage.setItem("favorites", JSON.stringify(favorites))
            setFavorites(JSON.stringify(favorites))
        }
        
    }

    const isFavorite = (id) => {
        const array = JSON.parse(localStorage.getItem("favorites"))
        if (!array) {
            return null
        } else {
            return array.includes(id)
        }
    }

    const removeFavorite = (id) => {
        const newArray = JSON.parse(localStorage.getItem("favorites"))
        console.log("newArray",newArray);
        let findIndex = newArray.findIndex(e => e === id)
        console.log("findIndex",findIndex);
        newArray.splice(findIndex, 1)
        setFavorites(newArray)
        localStorage.setItem("favorites", JSON.stringify(newArray))

        // recupérer tableau de string 
        // transforme en tableau
        // supprime éléments que je souhaite 
        // re stock en localstorage 
    }

    

    const value = { 
        favorites,
        setFavorites, 
        onClickFavorite,
        isFavorite,
        removeFavorite
      }
    
      return (
        <FavoriteContext.Provider value={value}>
          {props.children}
          
        </FavoriteContext.Provider>
        
        
      )
}

export {
    FavoriteContext,
    FavoriteContextProvider
  }