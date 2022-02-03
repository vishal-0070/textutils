import React, {useState} from 'react'

export default function TextForm(props) {
     const handleUpClick =()=>{
        //  console.log("Uppercase was clicked" + text);
         let newText=text.toUpperCase();
         setText(newText)
     }
         
     
     const handlelowClick =()=>{
        //  console.log("lowercase was clicked" + text);
         let newText=text.toLowerCase();
         setText(newText)
     }
  
     const handleclearClick =()=>{
        //  console.log("lowercase was clicked" + text);
         let newText='';
         setText(newText)
     }
 
     const handlecapitalClick =()=>{
        //  console.log("capitalize was clicked" + text);
         let newText=text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
         setText(newText)
     }


     const handleOnChange =(event)=>{
         console.log("Uppercase was clicked");
         setText(event.target.value)
     }

     const handleExtraSpaces =()=>{
         let newText= text.split(/[ ]+/);
         setText(newText.join(" "))
     }



    const[text,setText]= useState('');
    // text="new text"; //wrong way to change the state
    // setText=("new text"); //correct way to change the state
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
           <h1>{props.heading} </h1>
           <div className="mb-3">
           <textarea className="form-control" value={text}  onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white'}} id="myBox" rows="8" placeholder="enter your text here"></textarea>
           </div>
           <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
           <button className="btn btn-primary mx-2" onClick={handlelowClick}>Convert to lowercase</button>
           <button className="btn btn-primary mx-2" onClick={handlecapitalClick}>Convert to Capitalizecase</button>
           <button className="btn btn-primary mx-2" onClick={handleclearClick}>Clear Text</button>
           <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>remove extra space</button>
        </div>
        <div className="container my-2" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split (" ").length} words and {text.length} character</p>
            <p>{0.008 *text.split (" ").length} min read</p>
            <h3>preview</h3>
            <p>{text.length>0?text:"enter something in the text box to preview it here"}</p>
        </div>
        </>
    )
}
