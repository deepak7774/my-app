import React, { useState } from 'react'
import ShapCaret from './ShapCaret';
import ColorClarityCut from './ColorClarityCut';
import MoreFilters2 from './MoreFilters2';

export const ChooseDiamonds = () => {
    const [myActiveSecond, setMyActiveSecond] = useState("ShapCaret");
  return (
    <div>
        <div className='lab-diamond-btn'>
            <button onClick={()=> setMyActiveSecond("ShapCaret")}>ShapCaret</button>
            <button onClick={()=> setMyActiveSecond("ColorClarityCut")}>ColorClarityCut</button>
            <button onClick={()=> setMyActiveSecond("MoreFilters2")}>MoreFilters2</button>
        </div>

        <div>
         {myActiveSecond === "ShapCaret" && <ShapCaret/>} 
         {myActiveSecond === "ColorClarityCut" && <ColorClarityCut/>}   
         {myActiveSecond === "MoreFilters2" && <MoreFilters2/>} 
        </div>
    </div>
  )
}
