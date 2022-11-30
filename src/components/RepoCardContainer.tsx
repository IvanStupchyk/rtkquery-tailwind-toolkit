import React from "react";
import {UserRepo} from "../models/models";
import {useActions} from "../hooks/action";
import {useAppSelector} from "../hooks/redux";
import {RepoCard} from "./RepoCard";

export const RepoCardContainer = React.memo(({repo}: { repo: UserRepo }) => {
  const {addFavourite, removeFavourite} = useActions()
  const {favourites} = useAppSelector(state => state.github)

  const [isFavourite, setIsFavourite] = React.useState(favourites.some(f => f.id === repo.id))

  const addToFavourite = React.useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    addFavourite({
      html_url: repo.html_url,
      full_name: repo.full_name,
      id: repo.id,
      user_avatar: repo.owner.avatar_url,
      user_login: repo.owner.login
    })
    setIsFavourite(true)
  }, [])

  const removeFromFavourite = React.useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    removeFavourite(repo.id)
    setIsFavourite(false)
  }, [])

  return (
    <RepoCard
      full_name={repo.full_name}
      html_url={repo.html_url}
      forks={repo.forks}
      watchers={repo.watchers}
      description={repo.description}
      isFavourite={isFavourite}
      addToFavourite={addToFavourite}
      removeFromFavourite={removeFromFavourite}
    />
  )
})