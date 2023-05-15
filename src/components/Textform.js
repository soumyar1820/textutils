import React, {useState} from 'react'


export default function Textform(props) {
  const handleUpClick = () => {
    console.log("Upper case was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLowClick = () => {
    console.log("Lower case was clicked" + text)
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleClearClick = () => {
    console.log("Clear Text" + text)
    let newText = ""
    setText(newText)
  }

  const handleOnChange = (event) => {
    console.log("On Change")
    setText(event.target.value)
  }

  const [text, setText] = useState("Enter text here");
  // text = "eh rg";      //wrong way to update text
  // setText("Enter the text here2");  //right way to update text
  
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value = {text} onChange = {handleOnChange} id="myBox" rows="9" ></textarea>
        
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
        <button className="btn btn-primary mx-2  " onClick={handleLowClick}>Convert to Lower Case</button>
        <button className="btn btn-primary mx-2  " onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my=3">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length}words and {text.length}characters</p>
      <p>{0.008 * text.split(" ").length}Minutes time </p>
      <h2>preview</h2>
      <p>{text}</p>

    </div>
    </>
  )
}
