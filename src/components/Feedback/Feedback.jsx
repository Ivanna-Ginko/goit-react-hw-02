import css from "./Feedback.module.css"

const Feedback = (props) => {

    if(props.totalFeedback ===0) {return <p className={css.feedlist}>No feedback yet </p>} 
    let goodPC = Math.round((props.data.good / props.totalFeedback) * 100)
    return (
        <>
            <ul>
            <li className={css.feedlist}> Good: {props.data.good} </li>
            <li className={css.feedlist}> Neutral: {props.data.neutral} </li>
            <li className={css.feedlist}> Bad: {props.data.bad} </li>
            <li className={css.feedlist}>Total: {props.totalFeedback} </li>
            <li className={css.feedlist}>Positiv: {goodPC}% </li>
            </ul> 
        </>
    )
    }


export default Feedback;