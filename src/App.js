import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';


export default () => {

  const [movieList, setMovielist] = useState([])


 useEffect(() => {
   const loadAll = async () => {
    //pegando lista total
    let list = await Tmdb.getHomeList()
    setMovielist(list); 
   }

   loadAll()

 }, []) 

return(
  <div className="page">
<section className="lists">
  {movieList.map((item, key)=>(
  <MovieRow key={key} title={item.title} items={item.items}/>


 ))}
</section>
  </div>
)
}