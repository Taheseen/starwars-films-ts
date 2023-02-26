import { atom, selector, selectorFamily } from "recoil";
import { getFilms, getFilmById } from '../services/filmsApi'
import { Film } from '../type/film';

export const searchTextState = atom({
    key: 'searchText',
    default: ''
})

export const filmFilterState = atom({
    key: 'filmFilter',
    default: ''
})

export const searchResultsState = selector<Film[]>({
    key: 'searchResults',
    get: async ({ get }) => {
        const searchText = get(searchTextState)
    
        if (searchText) {
          const results = await getFilms(searchText);
          return results
        }
    
        return []
    }

})

export const filmDetailsState = selectorFamily({
    key: 'filmDetails',
    get: (id: string) => async (): Promise<Film | null> => {
      if (id) {
        const film = await getFilmById(id)
        return film
      }
  
      return null
    },
  })