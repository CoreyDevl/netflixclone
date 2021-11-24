import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import './App.css'
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';


export default () => {

  const [movieList, setMovielist] = useState([])
  const [featuredData, setFeaturedData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)


 useEffect(() => {
  setTimeout(() => {
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
  }, 3000)
 }, []) 

 useEffect(()=>{
   const scrollListener = () => {
    if(window.scrollY > 10){
      setBlackHeader(true)
    }else{
      setBlackHeader(false)
    }

   }
   window.addEventListener('scroll', scrollListener)

   return () => {
     window.removeEventListener('scroll', scrollListener)
   }
 },[])

return(
  <div className="page">

  <Header black={blackHeader}/>

    { featuredData &&
    <FeaturedMovie item={featuredData}/>
    }
<section className="lists">
  {movieList.map((item, key)=>(
  <MovieRow key={key} title={item.title} items={item.items}/>
  ))}
</section>
    <footer>
      Feito por Corey Pages! sem fins lucrativos <br />
      Repositório deste projeto: <br />
      <a href="https://github.com/CoreyTattooArt/netflixclone">GitHub CoreyTattooArt</a> <br />
      Objetivo final deste projeto: estudo em React <br />
      Direitos de imagem para NETFLIX <br />
      Fonte de dados: Themoviedb.org
    </footer>

    {movieList.length <=0 &&
    <div className="loading">
      <img src="https://onlinegiftools.com/images/examples-onlinegiftools/netflix-stream.gif" alt="carregando"/>
    </div>
    }
  </div>
)
}