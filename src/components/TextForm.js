import React from 'react';
import { useState } from 'react';

export default function TextForm(props){
 //const Te   
    const [text,setText] = useState('');

    const handleLowerCase = () =>{
        let text1 = text.toLowerCase();
        setText(text1);
        props.allAlerts("Text Changed to lowercase","Success");
    }

    const handleUpperCase = () => {
        let text1 = text.toUpperCase();
        setText(text1);
        props.allAlerts("Text Changed to UpperCase","Success");
    }

    const handleCountWord = () => {
        let text1 = WordCount(text);
        return text1;
    }

   
    const handleCountChar = () => {
        let text1 = charCount(text);
        return text1;
    }
    const handleClear = () => {
        let text1 = " ";
        setText(text1);
    }
    const speak = () => {

        let text1 = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(text1);
    }
    const stop = () => {
         window.speechSynthesis.cancel();
    }
      
    const copyText = () => {
        var text1 = document.getElementById("myBox");
        text1.select();
        navigator.clipboard.writeText(text1.value);
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    return(
        <div>
            <h1 style={{color: props.mode === 'dark'?'white' : 'black'}}>{props.heading} </h1> 
            <div className="mb-3"> 
            <textarea className="form-control" value={text} style={{backgroundColor:props.mode === 'dark' ? 'grey' : 'white', color:props.mode==='dark'?'white' : 'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpperCase}>To change UpperCase</button>&nbsp;&nbsp;
            <button className="btn btn-primary" onClick={handleLowerCase}>To change LowerCase</button>&nbsp;&nbsp;
            <button className="btn btn-primary" onClick={handleClear}>Clear Text</button>&nbsp;&nbsp;
            <button className="btn btn-primary" onClick={copyText}>Copy Text</button>&nbsp;&nbsp;
            <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2" id="">Speak</button>
            <button type="submit" onClick={stop} className="btn btn-warning mx-2 my-2" id="">Stop</button>
            <div className="container my-4">
                <h1 style={{color: props.mode === 'dark'?'white' : 'black'}}>Your Summary is here,</h1> 
                <p style={{color: props.mode === 'dark'?'white' : 'black'}}>Words are: {handleCountWord()} and character are : {handleCountChar()}</p>
                <p style={{color: props.mode === 'dark'?'white' : 'black'}}>Estimate Read-time: {0.08 * handleCountWord()}</p>
                <h1 style={{color: props.mode === 'dark'?'white' : 'black'}}>Preview</h1>
                <h2 style={{color: props.mode === 'dark'?'white' : 'black'}} className="preview" >{text}</h2>

            </div>
          
        </div>
        
    );
};

function WordCount(str) { 
    return str.trim().split(" ").length;
  }

  function charCount(str){
    return str.length;
  }


 


