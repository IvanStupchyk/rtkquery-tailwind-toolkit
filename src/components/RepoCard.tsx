import React from "react";
import {UserRepo} from "../models/models";

export const RepoCard = ({repo}: {repo: UserRepo}) => {
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
      </a>
    </div>
  )
}