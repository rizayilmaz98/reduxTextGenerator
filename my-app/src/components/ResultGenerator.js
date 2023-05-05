import React from 'react'
import {useSelector} from "react-redux";
function ResultGenerator() {
    const resultText = useSelector(state => state.text.data);
    const resultType = useSelector(state => state.text.isHtml);
  return (
    <div className="resultText">
        <div>
          {resultText && resultText.map((item,index)=>{return resultType===true ?<p key={index}>{`<p>${item}</p>`}</p>: <p key={index}>{item}</p> })}
        </div>
    </div>

  )
}

export default ResultGenerator