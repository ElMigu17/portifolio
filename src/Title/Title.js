import "./Title.scss";


function Title(props) {
  return (
      <h3 className="title">{props.text}
        <div className="pos_underline">
          <hr className="underline" style={{width: props.line_width + "px"}}/>
        </div>
      </h3>
  );
}



export default Title;
