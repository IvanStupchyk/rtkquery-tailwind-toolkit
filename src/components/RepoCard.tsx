import React from "react";

interface RepoCardType {
  full_name: string
  html_url: string
  forks: number
  watchers: number
  description: string
  isFavourite: boolean
  addToFavourite: (event: React.MouseEvent<HTMLButtonElement>) => void
  removeFromFavourite: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const RepoCard = React.memo((props: RepoCardType) => {
  const {
    full_name,
    html_url,
    forks,
    watchers,
    description,
    isFavourite,
    addToFavourite,
    removeFromFavourite,
  } = props

  return (
    <div className="border px-5 py-3 rounded mb-5 hover:shadow-md hover:bg-gray-100 transition-all">
      <a target="_blank" href={html_url}>
        <h2 className="text-lg font-bold">
          {full_name}
        </h2>
        <p className="text-sm">
          Forks: <span className="font-bold mr-2">{forks}</span>
          Watchers: <span className="font-bold">{watchers}</span>
        </p>
        <p className="text-sm font-thin">{description ?? ''}</p>

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
})