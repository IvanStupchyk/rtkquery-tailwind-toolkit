import React from "react";
import {useSearchUsersQuery} from "../../store/github/github.api"
import {useDebounce} from "../../hooks/debounce";

export const HomePage = () => {
  const [search, setSearch] = React.useState<string>('')
  const debounced = useDebounce(search)

  const {isError, isLoading, data} = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3
  })


  React.useEffect(() => {

  }, [debounced])

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      {isError && <p className="text-center text-red-600">Something went wrong...</p>}

      <div className="relative w-[560px]">
        <input
          className="border py-2 px-4 w-full h-[42px] mb-2"
          type="text"
          placeholder="Search for Github username"
          value={search}
          onChange={e => {setSearch(e.target.value)}}
        />

        <div className="absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white">

        </div>
      </div>
    </div>
  )
}


