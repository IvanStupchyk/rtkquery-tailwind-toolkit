import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IUser, ServerResponse, UserRepo} from "../../models/models";

export const githubApi = createApi({
  reducerPath: 'github/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/'
  }),
  refetchOnFocus: true,
  endpoints: build => ({
    searchUsers: build.query<IUser[], string>({
      query: (search: string) => ({
        url: 'search/users',
        params: {
          q: search,
          per_page: 10
        }
      }),
      transformResponse: (response: ServerResponse<IUser>) => response.items
    }),
    getUserRepos: build.query<UserRepo[], string>({
      query: (userName: string) => ({
        url: `users/${userName}/repos`
      })
    })
  })
})

//lazy - it means that we can make a request when we want (for example if we wanna get user
// but only when click to user from the user's list)
export const {useSearchUsersQuery, useLazyGetUserReposQuery} = githubApi