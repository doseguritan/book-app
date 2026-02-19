import { useEffect } from "react";

const FavoriteHome = () => {
  const fetchFavorites = async () => {
    const request = await fetch('/api/books/searches')
    const response = await request.json()
    console.log(response)
  }
  useEffect(() => {
    fetchFavorites()
  }, [])
  return <>
  </>
}
export default FavoriteHome;