import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import './App.css'
import FeaturedMovie from './components/FeaturedMovie';
export default () => {

  const [movieList, setMovielist] = useState([])
  const [featuredData, setFeaturedData] = useState(null)

 useEffect(() => {
   const loadAll = async () => {
    //pegando lista total
    let list = await Tmdb.getHomeList()
    setMovielist(list); 

    //pegando o filme em destaque
    let originals = list.filter(i=>i.slug === 'originals')
    let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
    let chosen = originals[0].items.results[randomChosen];
    let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')  
    setFeaturedData(chosenInfo)
   }

   loadAll()

 }, []) 

return(
  <div className="page">
    { featuredData &&
    <FeaturedMovie item={featuredData}/>
    }
<section className="lists">
  {movieList.map((item, key)=>(
  <MovieRow key={key} title={item.title} items={item.items}/>
  ))}
</section>
  </div>
)
}