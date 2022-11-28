import React from "react";
import {useSearchUsersQuery, useLazyGetUserReposQuery} from "../../store/github/github.api"
import {useDebounce} from "../../hooks/debounce";
import {RepoCard} from "../../components/RepoCard";

export const HomePage = () => {
  const [search, setSearch] = React.useState<string>('')
  const [dropdown, setDropdown] = React.useState<boolean>(false)

  const debounced = useDebounce(search)

  const {
    isError: isErrorUsersList,
    isLoading: isLoadingUsersList,
    data: users
  } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3,
    refetchOnFocus: true
  })

  const [fetchRepos, {isLoading: areReposLoading, data: userRepos}] = useLazyGetUserReposQuery()
  const switchToUserPage = (userName: string) => {
    return () => {
      fetchRepos(userName)
      setDropdown(false)
    }
  }


  React.useEffect(() => {
    setDropdown(debounced.length > 2 && users?.length! > 0)
  }, [debounced, users])

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      {isErrorUsersList && <p className="text-center text-red-600">Something went wrong...</p>}

      <div className="relative w-[560px]">
        <input
          className="border py-2 px-4 w-full h-[42px] mb-2"
          type="text"
          placeholder="Search for Github username"
          value={search}
          onChange={e => {
            setSearch(e.target.value)
          }}
        />
        {
          dropdown &&
          <ul className="list-none absolute top-[42px] left-0 right-0 max-h-[200px] overflow-y-scroll shadow-md bg-white">
            {isLoadingUsersList && <p className="text-center">Loading...</p>}
            {users?.map(user => (
              <li
                key={user.id}
                className="py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer"
                onClick={switchToUserPage(user.login)}
              >
                {user.login}
              </li>
            ))}
          </ul>
        }

        <div className="container">
          {areReposLoading && <p className="text-center">Repos are loading...</p>}
          {
            userRepos?.map(repos => (
              <RepoCard
                repo={repos}
                key={repos.id}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}


