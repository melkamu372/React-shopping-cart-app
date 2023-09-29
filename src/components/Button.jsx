function Button(){
    const buttonStyle={
        'color':props.color,
        'fontSize': props.fontSize + 'px'
        }
    return <button onClick={props.clickMe} className={props.btnClass}> {props.text} </button>
     }

export default Button;