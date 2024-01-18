import React,{useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {

    const handleUpClick= () =>{
        console.log("Uppercase was clicked" + text )
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to uppercase!','success');
    }

    const handleDownClick = () =>{
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert('Converted to lowercase!','success');
    }
    
    const handleClear = () =>{
      let newText = '';
      setText(newText)
    }
    
    //to copy
    const handleCopy = () =>{
      let text = document.getElementById('myBox');
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert('Copied to clipboard!!','success');
    }
    
    //to remove extra spaces 
    const handleExtraSpaces = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(' '))
    }
    
    const handleOnChange = (event) =>
    {
        setText(event.target.value)
    }

    const [text,setText] = useState('')
  return (
    <>
        <div className='container my-3' style={{color: props.mode === 'dark'?'white' :'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode === 'dark'?'grey' :'white', 
        color: props.mode === 'dark'?'white' :'black'}}></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleDownClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClear}>Clear</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'?'white' :'black'}}>
          <h2>Word Analysis</h2>
          <p>Number of characters: {text.length} <br/>
             Number of words: {text.split(' ').length}
          </p>
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
        
        
    </>
  )
}


TextForm.propTypes = {
  heading: PropTypes.string,
  mode: PropTypes.string
}