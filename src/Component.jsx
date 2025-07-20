
import { useState } from 'react'
export default function component() {

// eslint-disable-next-line react-hooks/rules-of-hooks
const [text, setText] = useState()
// eslint-disable-next-line react-hooks/rules-of-hooks
const [updated, setUpdated] = useState()


const textOnchange = (event) => {
  setText(event.target.value);
  
}


const buttonOnclick = () => {
setUpdated(text)

}
  return (
    <div>
<input type="text" value={text} onChange={textOnchange} />
<button onClick={buttonOnclick}> actualizar<i class="fa-regular fa-envelope"></i></button>
<p> {text}</p>
<p> {updated}</p>
    </div>
    
  )
}

