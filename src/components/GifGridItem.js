import React from 'react';

//Retorna el Gif -> title and url
export const GifGridItem = ({ title, url }) => {
  
  // console.log( title, url );
  return ( 
    <div className="card animate__animated animate__fadeIn" >  
      <img src={ url } alt={ title } />
      <p> { title } </p>
    </div>
  )
}
