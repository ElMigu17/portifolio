import React from 'react';
import { useDispatch } from 'react-redux'
import  {changeLanguage}  from './LanguageSlice.js'
import "./Language.scss";


function Language() {

  const dispatch = useDispatch()

  function runChange(e){
    let selectedLanguage = e.target.id;

    console.log("ggg");
    
    dispatch(changeLanguage( e.target.id));
    let languageButtons = document.getElementsByClassName("languageButton");

    for(let i = 0; i < languageButtons.length; i++){
      console.log(i + ": " + languageButtons[i].id + " === " + selectedLanguage + "->" + languageButtons[i].id === selectedLanguage)
      if(languageButtons[i].id === selectedLanguage){
        languageButtons[i].style.backgroundColor = "black";
        languageButtons[i].style.color = "white";
      }
      else{
        languageButtons[i].style.backgroundColor = "white";
        languageButtons[i].style.color = "black";
      }
    }
  }

  const disponible_languages = ["EN", "PT"];
  const buttons = disponible_languages.map((step, move) => {
    return(
      <button key={move} id={step} className="languageButton" onClick={runChange}>{step}</button>
    );
  });

  return (
      <div className="language">
        {buttons}
      </div>
  );
}



export default Language;
