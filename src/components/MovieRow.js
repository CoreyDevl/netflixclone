import React, {useState} from "react"
import './MovieRow.css'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default ({title, items, key}) => {

  const [scrollX, setScrollX] = useState(-400)

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2 )
    if(x > 0){   //esse if é responsável por parar o scroll no fim
      x = 0
    }
    setScrollX(x)
  }

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2 )
    let listW = items.results.length * 150
    if((window.innerWidth - listW) > x) {
      x = (window.innerWidth - listW) -60
    }
    setScrollX(x)
  }

  return (
    
<div className="movieRow">
<h2>{title}</h2>
<div className="movieRow--left" onClick={handleLeftArrow}>
 <NavigateBeforeIcon style={{fontSize: 50}} />
</div>
<div className="movieRow--right" onClick={handleRightArrow}>
  <NavigateNextIcon style={{fontSize: 50}} />
</div>
  <div className="movieRow--listarea">
    <div className="movieRow--list" style={{
      marginLeft: scrollX,
      widht: items.results.length * 150
      }}>
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