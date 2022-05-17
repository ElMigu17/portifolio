import "./Language.scss";


function Language() {

  function changeLanguage(e){
    let languageButtons = document.getElementsByClassName("languageButton");
    for(let i = 0; i < languageButtons.length; i++){
      console.log(i + ": " + languageButtons[i].id + " === " + e.target.id + "->" + languageButtons[i].id === e.target.id)
      if(languageButtons[i].id === e.target.id){
        languageButtons[i].style.backgroundColor = "black";
        languageButtons[i].style.color = "white";
      }
      else{
        languageButtons[i].style.backgroundColor = "white";
        languageButtons[i].style.color = "black";
      }
    }
  }

  const disponible_languages = ["EN", "PT", "hihihi"];
  const buttons = disponible_languages.map((step, move) => {
    return(
      <button key={move} id={step} className="languageButton" onClick={changeLanguage}>{step}</button>
    );
  });

  return (
      <div className="language">
        {buttons}
      </div>
  );
}



export default Language;
