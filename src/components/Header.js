import Button from './Button'

const Header = (props) => {  

    return(
        <div className="container">
            <h1>{props.text}</h1>
            <Button text = "Press me!!" />
        </div>
                  
    )
}

export default Header
