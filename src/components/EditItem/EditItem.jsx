import { useState } from "react";

const EditItem = ({item, setKey, data, setData}) => {
    const [text, setText] = useState(item.text);
    return (
        <div>
            <input type="text" value={text}
            onChange={(event)=>{
                setText(event.target.value)
            }}
            autoFocus={true}
            />
            <button onClick={()=>{
                if(text.trim().length > 0){
                    setData(data.map(element =>{
                       if(element.id === item.id) return {...element, text, correct: false}
                       return element
                    }))
                }
            }}>save</button>

            <button
            onClick={()=>{
                setKey(item.id, 'correct')
            }}
            >cancel</button>
        </div>
    );
}

export default EditItem;
