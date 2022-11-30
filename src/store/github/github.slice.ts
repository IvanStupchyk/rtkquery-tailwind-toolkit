import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {FavouriteCardType} from "../../models/models";

const LS_FAV_KEY = 'rfk'

interface GithubSlice {
  favourites: FavouriteCardType[]
}

const initialState: GithubSlice = {
  favourites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]')
}

export const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    addFavourite(state, action: PayloadAction<FavouriteCardType>) {
      state.favourites.push(action.payload)
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))
    },
    removeFavourite(state, action: PayloadAction<number>) {
      state.favourites = state.favourites.filter(f => f.id !== action.payload)
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))
    }
  }
})

export const githubActions = githubSlice.actions
export const githubReducer = githubSlice.reducer