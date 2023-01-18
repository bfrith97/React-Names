import classes from './Button.module.css'

const Button = props => {
    return <button className={classes.button} type='submit'>{props.content}</button>
}

export default Button;