import profile_pic from "../assets/profile_pic.jpg";
import "./Profile.scss";


function Profile() {
  const topic = [["Name:"], ["Nationality:"], ["Age:"], ["Programming interests:"], ["Programming experience:"], ["Academic formation:"]];
  const content = [["Miguel Rodrigues"], ["Brazilian"], ["21"], ["Web development and algorithm construction/manipulation"], ["Web development at Comp Jr. (2019-2022) and scientific initiation in optimization (2021)"], ["Informatic technitian at CEFET-Campus V (2016-2018) and undergraduate in Computer’s Science at UFLA (2019-present)"]];
  const moves = topic.map((step, move) => {
    return(
      <p className="content-item">
        <strong className="topic">{step}</strong> {content[move]}.
      </p>
    );
  });
  return (
    <div className="profile">
      <div className="profile-pic-pos item-profile">
        <img src={profile_pic} className="profile-pic" alt="Miguel - young man with brown hair and brown eyes"></img>
      </div>
      <div className="item-profile">
        <div className="info">
          <div className="pos_title">
            <h3 className="profile_title">Profile
              <div className="pos_underline">
                <hr className="underline_title"/>
              </div>
            </h3>
          </div>
          <div className="all_itens">
            {moves}
          </div>
        </div>
      </div>
    </div>
  );
}



export default Profile;
