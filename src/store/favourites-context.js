import { createContext, useState } from "react";
import FavouritesPage from "../pages/Favourites";

const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavourite: (favouriteMeetup) => {}, //writing these out just for the autocompletion
  removeFavourite: (meetupId) => {},
  itemIsFavourite: (meetupId) => {},
});

export function FavouritesContextProvider(props) {
  const [userFavourites, setUserFavourites] = useState([]);

  function addFavouriteHandler(favouriteMeetup) {
    setUserFavourites((prevUserFavourites) => {
      return prevUserFavourites.concat(favouriteMeetup);
    });
  }

  function removeFavouriteHandler(meetupId) {
    setUserFavourites((prevUserFavourites) => {
      return prevUserFavourites.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemIsFavouriteHandler(meetupId) {
    return userFavourites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
    addFavourite: addFavouriteHandler,
    removeFavourite: removeFavouriteHandler,
    itemIsFavourite: itemIsFavouriteHandler,
  };

  return (
    <FavouritesContext.Provider value={context}>
      {props.children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesContext;
