import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick =()=>{
    console.log("Uppercase was Clicked" + text);
    let newText=text.toUpperCase();
    setText(newText)
    props.showalert("Convert to Upper Case","success")
    //setText("You have clicked on handleclick") 1 example.
  }

  const handleLoClick =()=>{
    console.log("Uppercase was Clicked" + text);
    let newText=text.toLowerCase();
    setText(newText)
    props.showalert("Convert to Lower Case","success")
    //setText("You have clicked on handleclick") 1 example.
  }

  
  const handleClear =()=>{
    let newTextclear=""
    setText(newTextclear)
    props.showalert("Clear the Text","success")
    //setText("You have clicked on handleclick") 2 Clear all the text.
  }

  const handleCapitalcase =()=>{
    let newcapital=text.slice();
    setText(newcapital)
  }

  const handlecopy =()=>{
    console.log("Copy the text")
    let copytext=document.getElementById("mybox");
    copytext.select();
    // copytext.setSelectionRange(0,9999);/
    navigator.clipboard.writeText(text.value);
    props.showalert("Copy all the Text ","success")
  }

  const handlextraspaces = ()=>{
    let newspace = text.split(/[ ]+/);
    setText(newspace.join(" "))
    props.showalert("Remove the Extra Spaces","success")
  }


  const handleOnChange=(event)=>{
    console.log("On Change")
    setText(event.target.value)
  }

  const [text, setText] = useState('enter the text');

  // text = "new text"; // wrong way to change the state.
  // setText("new text"); // correct way to change the state.
  return (
    <>

   <div className="container" style={{color: props.mode==='dark'?'white':'black'}}  >
    
    <h1>{props.heading} </h1>
<div className="mb-3">
  {/* <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label> */}
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'light',color:props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
 </div>

<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>

<button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>

<button className="btn btn-primary mx-1" onClick={handleClear}>Clear Text</button>

<button className="btn btn-primary mx-1" onClick={handlecopy}>Copy Text</button>

<button className="btn btn-primary mx-1" onClick={handlextraspaces}>extra spaces </button>



<button className="btn btn-primary mx-1" onClick={handleCapitalcase}>Capitalise Case</button>

   </div>
   <div className="container my-4" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h2>Your Text Summary</h2>
    <p> {text.split(" ").length} words and {text.length} character</p>
    <p> {0.008 * text.split(" ").length } Minutes Read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter Something to preview it Here"}</p>
   </div>


   </>

  )
}

// style={{color: props.mode==='dark'?'white':'black'}}