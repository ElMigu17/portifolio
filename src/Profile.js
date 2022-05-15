import profile_pic from './profile_pic.jpg';
import './Profile.css';


function Profile() {
  const topic = [["Name:"], ["Nationality:"], ["Age:"], ["Programming interests:"], ["Programming experience:"], ["Academic formation:"], ["General interests:"]];
  const content = [["Miguel Rodrigues"], ["Brazilian"], ["21"], ["Web development and algorithm construction/manipulation"], ["Web development at Comp Jr. (2019-2022) and scientific initiation in optimization (2021)"], ["Informatic technitian at CEFET-Campus V (2016-2018) and undergraduate in Computer’s Science at UFLA (2019-present)"], ["Sustainability, comunication and culture"]];
  const moves = topic.map((step, move) => {
    return(
      <p className='content-item'>
        <strong className='topic'>{step}</strong> {content[move]}.
      </p>
    );
  });
  return (
    <div className="Profile">
      <div className='Profile-pic-pos item-profile'>
        <img src={profile_pic} className="Profile-pic" alt="Miguel - young man with brown hair and brown eyes"></img>
      </div>
      <div className='item-profile'>
        <div className='Info'>
          <h3 className='ProfileTitle'>Profile<hr className='underlineTitle'/></h3>
          <div className='allItens'>
            {moves}
          </div>
        </div>
      </div>
    </div>
  );
}



export default Profile;
