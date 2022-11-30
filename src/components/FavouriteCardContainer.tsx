import React from "react";
import {FavouriteCardType, UserRepo} from "../models/models";
import {useActions} from "../hooks/action";
import {useAppSelector} from "../hooks/redux";
import {RepoCard} from "./RepoCard";
import {FavouriteCard} from "./FavouriteCard";
import {transformCamelCaseWithSpace} from "../utils/common";

export const FavouriteCardContainer = React.memo(({repoData}: { repoData: FavouriteCardType }) => {
  const {removeFavourite} = useActions()
  const {favourites} = useAppSelector(state => state.github)

  const [isFavourite, setIsFavourite] = React.useState(favourites.some(f => f.id === repoData.id))

  const userLogin = transformCamelCaseWithSpace(repoData.user_login)

  const removeFromFavourite = React.useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    removeFavourite(repoData.id)
    setIsFavourite(false)
  }, [])

  return (
    <FavouriteCard
      html_url={repoData.html_url}
      full_name={repoData.full_name}
      user_avatar={repoData.user_avatar}
      user_login={userLogin}
      isFavourite={isFavourite}
      removeFromFavourite={removeFromFavourite}
    />
  )
})