import PropTypes from 'prop-types';

function Button(props) {
  const buttonStyle = {
    'color': props.color,
    'fontSize': props.fontSize + 'px'
  };

  return (
    <button onClick={props.clickMe} className={props.btnClass} style={buttonStyle}>
      {props.text}
    </button>
  );
}

Button.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.number,
  clickMe: PropTypes.func.isRequired,
  btnClass: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

Button.defaultProps = {
  color: 'black',
  fontSize: 14
};

export default Button;