import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { getTextAsync,changeHtml} from "../redux/text/textSlice";
function ChangeGenerator() {
    const [valueInput, setValueInput] = useState({paragraph:4,format:"html"})
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getTextAsync(valueInput.paragraph,valueInput.format))
        dispatch(changeHtml(valueInput.format))
      }
  return (
    <div className="changeValue">
        <form onSubmit={handleSubmit}>
          <input type="number" name="" value={valueInput.paragraph} onChange={(e)=>setValueInput({...valueInput,paragraph:e.target.value})}/>
          <select onChange={(e)=>setValueInput({...valueInput,format:e.target.value})}>
            <option value="html">HTML</option>
            <option value="text">TEXT</option>
          </select>
          <button type="submit">Generate</button>
        </form>
      </div>
  )
}

export default ChangeGenerator