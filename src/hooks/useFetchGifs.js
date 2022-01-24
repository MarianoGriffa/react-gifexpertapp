import { useState, useEffect } from 'react';  
import { getGifs } from '../helpers/getGifs'; // recibo mi Api

 export const useFetchGifs = ( category ) => {
    
  const [ current, setCurrent ] = useState({
     data: [],
     loading: true 
    })  

  //Solo se dispara cuando cambia la categoria
    useEffect( () => { 
          getGifs( category )
          .then( imgs => { 
            
           setCurrent({
                 data: imgs, 
                 loading: false  
              })
          
            })

    }, [ category ])
  
   return current; 
 }
 

