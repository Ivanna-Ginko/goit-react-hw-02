
import css from "./Options.module.css"

const Options = (props) => {
   
    const funClickGood =()=>{ props.funClick('good')}
    const funClickNeutral =()=>{ props.funClick('neutral')}
    const funClickBad =()=>{ props.funClick('bad')}
    const funClickReset = () => {props.funClick('reset') }

    return (
        <>
        <button className={css.btn} onClick={funClickGood}> good </button>
        <button className={css.btn} onClick={funClickNeutral}> neutral </button>
        <button className={css.btn} onClick={funClickBad}> bad </button>
        {props.totalFeedback > 0 && (<button className={css.btn} onClick={funClickReset}> reset </button>)}
        </>
    )
}

export default Options;