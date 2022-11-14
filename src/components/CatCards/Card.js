import styles from "./style.module.scss"
import { memo } from "react"


const Card = ({img})=>{
    return(
        <div className={styles.card}>
            <img src={img}/>
        </div>
    )
}
export default memo(Card)