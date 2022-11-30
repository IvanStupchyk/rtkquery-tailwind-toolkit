import React from "react";
import '../styles/favouriteCard.scss'

interface RepoCardType {
  full_name: string
  html_url: string
  user_avatar: string
  user_login: string
  isFavourite: boolean
  removeFromFavourite: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const FavouriteCard = React.memo((props: RepoCardType) => {
  const {
    full_name,
    html_url,
    user_avatar,
    user_login,
    isFavourite,
    removeFromFavourite,
  } = props

  return (
    <div className="border px-5 py-3 rounded mb-5 hover:shadow-md hover:bg-gray-100 transition-all">
      <a target="_blank" href={html_url}>
        <div className="mb-10">
          <div className="user_avatar__container">
            <img
              src={user_avatar}
              alt="avatar"
            />
          </div>

          <p className="text-sm">
            <span className="">{user_login}</span>
          </p>
        </div>

        <h2 className="text-lg ">
          repo: <span className="font-bold">{full_name}</span>
        </h2>
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
})