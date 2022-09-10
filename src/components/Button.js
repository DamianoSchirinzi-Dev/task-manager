const Button = (props) => {

  function handleClick(e) {
    console.log("Clicked!");
  }

  return (
    <button 
        onClick={handleClick}>
        {props.text}
    </button>
  )
}

Button.defaultProps = {
  text: "Click me!!",
}

export default Button