import { Film } from '../type/film'
const API_URL = 'https://swapi.dev/api/films/'

export async function getFilms(searchText: string): Promise<any> {
  const res = await fetch(`${API_URL}/?search=${searchText}`)
  const { results = [] } = await res.json()
  return results;
}

export async function getFilmById(id: string): Promise<Film> {
  const res = await fetch(`${API_URL}/${id}`)
  return res.json();
}