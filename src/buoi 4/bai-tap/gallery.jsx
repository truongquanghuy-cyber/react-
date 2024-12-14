import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
 let [index, setIndex] = useState(0);
 let [isShowMore, setIsShowMore] = useState(true);   
  function handleClick() {
    if(index === sculptureList.length - 1) {
        return;
    }
    setIndex(index + 1);
  }

  


  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
      <br />
       {isShowMore ? (
         <>  <p>{sculpture.description}</p>
           <button onClick={() => {
            setIsShowMore(false);
           }}>Less</button>

           </> ) :
           (<button 
           onClick={() => {
            setIsShowMore(true);
           }}
           >Showmore</button>)
       } 
      
    </>
  );
}