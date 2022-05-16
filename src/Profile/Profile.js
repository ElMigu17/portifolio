import profile_pic from "../assets/profile_pic.jpg";
import arrowDown from "../assets/small_arrow_down.svg";
import Title from '../Title/Title';
import "./Profile.scss";

function Profile() {
  const topic = [["Name:"], ["Nationality:"], ["Age:"], ["Programming interests:"], ["Programming experience:"], ["Academic formation:"]];
  const content = [["Miguel Rodrigues"], ["Brazilian"], ["21"], ["Web development and algorithm construction/manipulation"], ["Web development at Comp Jr. (2019-2022) and scientific initiation in optimization (2021)"], ["Informatic technitian at CEFET-Campus V (2016-2018) and undergraduate in Computer’s Science at UFLA (2019-present)"]];
  const moves = topic.map((step, move) => {
    return(
      <p className="content-item" key={move}>
        <b className="topic">{step}</b> {content[move]}.
      </p>
    );
  });

  var oldScroll = 0;
  var showing = true;

  function fadeButton(){
    let buttonName = "down_button";
    let downarrow = document.querySelector("#down-arrow");
    let buttonDow = document.querySelector("#down_button");

    let opacity = 1;

    var id = setInterval(frame, 30);

    function frame() {
      if (opacity <= 0) {
        clearInterval(id);
      } else {
        downarrow.style.background = "rgba(0, 0, 0, "+ opacity +")";
        buttonDow.style.opacity = opacity;
        opacity -= 0.1;
      }
    }
    setTimeout(() => document.getElementById(buttonName).style.display = "none", 1100);
  }
  
  window.onscroll = function(e){
    if(showing && oldScroll < this.scrollY){
      fadeButton();
      showing = false;
    }
    console.log(oldScroll < this.scrollY);
  }
  

  return (
    <div className="profile">
      <div className="profile-pic-pos item-profile">
        <img src={profile_pic} className="profile-pic" alt="Miguel - young man with brown hair and brown eyes"></img>
      </div>
      <div className="item-profile">
        <div className="info">
          <div className="pos_title">
            <Title text="Profile" line_width={window.innerWidth > 600 ? 85 : 75}/>
          </div>
          <div className="all_itens">
            {moves}
          </div>
        </div>
      </div>
      <div className="pos-button" id="down_button">
        <button  id="down-arrow" onClick={() => window.scrollTo(0,document.body.scrollHeight)} style={{opacity: 1}} >
          <img className="img-down-arrow" alt="down arrow" src={arrowDown} />
        </button>
      </div>
    </div>
  );
}




export default Profile;
