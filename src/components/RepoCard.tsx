import React from "react";
import {UserRepo} from "../models/models";
import {useActions} from "../hooks/action";
import {useAppSelector} from "../hooks/redux";

export const RepoCard = ({repo}: {repo: UserRepo}) => {
  const {addFavourite, removeFavourite} = useActions()
  const {favourites} = useAppSelector(state => state.github)

  const [isFavourite, setIsFavourite] = React.useState(favourites.includes(repo.html_url))
  const addToFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    addFavourite(repo.html_url)
    setIsFavourite(true)
  }

  const removeFromFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    removeFavourite(repo.html_url)
    setIsFavourite(false)
  }

  return (
    <div className="border px-5 py-3 rounded mb-5 hover:shadow-md hover:bg-gray-100 transition-all">
      <a target="_blank" href={repo.html_url}>
        <h2 className="text-lg font-bold">
          {repo.full_name}
        </h2>
        <p className="text-sm">
          Forks: <span className="font-bold mr-2">{repo.forks}</span>
          Watchers: <span className="font-bold">{repo.watchers}</span>
        </p>
        <p className="text-sm font-thin">{repo?.description}</p>

        {
          !isFavourite &&
          <button
            className="py-2 px-4 bg-yellow-400 rounded hover:shadow-md transition-all mr-3"
            onClick={addToFavourite}
          >
            Add
          </button>
        }

        {
          isFavourite &&
          <button
            className="py-2 px-4 bg-red-400 rounded hover:shadow-md transition-all"
            onClick={removeFromFavourite}
          >
            Remove
          </button>
        }
      </a>
    </div>
  )
}