import css from "./Feedback.module.css"

const Feedback = (props) => {

    
    return (
        <>
            <ul>
            <li className={css.feedlist}> Good: {props.data.good} </li>
            <li className={css.feedlist}> Neutral: {props.data.neutral} </li>
            <li className={css.feedlist}> Bad: {props.data.bad} </li>
            <li className={css.feedlist}>Total: {props.totalFeedback} </li>
            <li className={css.feedlist}>Positiv: {props.goodPC}% </li>
            </ul> 
        </>
    )
    }


export default Feedback;