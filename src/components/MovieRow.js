import React from "react"
import './MovieRow.css'

export default ({title, items, key}) => {

  
  return (
    
<div className="movieRow">
<h2>{title}</h2>
  <div className="movieRow--listarea">
    <div className="movieRow--list">
       {items.results.length > 0 && items.results.map((item, key)=>(
         <div key={key} className="movieRow--item">
          <img  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
         </div>
         ))}
   </div>
  </div>
</div>       
  )

}
/* 
  tinha um comentário meu que foi apagado de ontem pra hoje onde eu expliquei sobre a falha no carregamento de imagens que acontece por volta do minuto 50.
enfim, vou escrever novamente. 
existem muitos devs que fizeram esse repositório no github.
eu encontrei e agradeço a esta dev Marilia -devMarilia - muito obrigado! 
https://github.com/devMarilia/netflixclone/tree/master/src    

no meu caso eu superei esta falha repetindo todo o arquivo Tmdb.js 
e coletando uma sequencia de códigos que estão após o h2 de movieRow.js 

esse códigos repetidos da forma correta - (principalmente com conta das funçoes async)
farão as imagens serem carregadas.

e tem tb meu github  o qual estou tb mantendo operativo:
https://github.com/CoreyTattooArt/netflixclone

me chamem pelo zap pra conversar sobre esse projeto se precisarem, de estudante pra estudante ajudarei no que puder). 27 996131240
*/