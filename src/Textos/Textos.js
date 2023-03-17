import "./Textos.scss";
import textosJson from "../textos.json"

function Textos() {
  const moves = textosJson.map((step, move) => {    
    
    let pos_last =  step['poems'].length - 1
    var texto = step['poems'][pos_last]['text'].split('\n').map(str => <p>{str}</p>)

    return(
      <div className="text" key={move}>
        { texto }
        
      </div>
    );
  });

  console.log(moves)

  return (
    <div>
      <div className="all_texts">
        { moves }
      </div>
    </div>
  );
}

export default Textos;