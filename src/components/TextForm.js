import React, { useState } from 'react'

export default function TextForm(props) {
    const  [text , setText] = useState("");
    const [originalText , setOriginalText] = useState(text)

    const handleUpClick = ()=>{
        // console.log('click')
        setText(text.toUpperCase());
        props.showAlert("Converted to uppercase!", "success");

    }

    const handleOnChange = (event)=>{
        // console.log('On change')
        // setText(event.target.value); also set this type
         const newText = event.target.value ;
        setText(newText);

        if(originalText === text){
            setOriginalText(newText)
        }

        
    }

    const handleLowerClick = () => {
        // console.log('click')
        setText(text.toLowerCase());
        props.showAlert("Converted to lowercase!", "success");

    }

    const handleClearClick = () => {
        setText("")
        props.showAlert("Text cleared!", "success");
    }

    const handleOriginalClick = () =>{
      setText(originalText);
      props.showAlert("Converted to original Text!", "success");
    }

    const handleCopy = () => {
        var text1 = document.getElementById("myBox");
        text1.select();
        navigator.clipboard.writeText(text1.value);
        props.showAlert("Copied to Clipboard!", "success");

    }

    const handleExtraSpace = () =>{
        let newText1 = text.split(/[ ]+/);
        setText(newText1.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

  return (
    <>
    <div className='container mt-5'>
    <h1 style={{color:props.mode==='dark'?'white':'black'}} >{props.heading}</h1>
    <div className="mb-3 " >
    <textarea className="form-control" style ={{backgroundColor:props.mode ==='dark'?'#4f4d4d':'white', color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>

    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to LowerCase</button>
    <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
    <button className="btn btn-primary mx-2" onClick={handleOriginalClick}>Original Text</button>
    <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>
    </div>

    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> Characters </p>
        <p><b>{0.008 * text.split(" ").length}</b> Minutes to read</p>
        <h2>Preview :</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>

    </div>
  </>
  )
}

