import Title from '../Title/Title';
import acm from '../assets/adams_creation_minimalist.png'
import "./Contact.scss";


function Contact() {
  
  return (
    <div className="contact">   
      <div className='pos-title'>
        <Title text="Let’s get in touch!" line_width={window.innerWidth > 600 ? 196 : 178}/>
      </div>
      <div className='content'>
        
        <form className='contact-form'>
          <h4 className='contact-question'> What do you want to say? </h4>  
          <textarea className='message' ></textarea>
          <h4 className='contact-question'> Could I contact you back? How? </h4>
          <input className='contact-addres'></input>
          <input className='submit-button' type="submit" value="Send"></input>
        </form>

        <div className='pos-img'>
          <div className='image-border'>
            <img className='image' src={acm} alt="The Adam's creation with stick figure "/>
          </div>
        </div>

      </div>

    </div>
  );
}



export default Contact;
