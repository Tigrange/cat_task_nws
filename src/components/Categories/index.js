import { memo, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { getCatCards } from "redux/features/catCardSlice"
import styles from "./style.module.scss"
const Categories = ()=>{
    const categories = useSelector(state=>state.catCard.categories);
    const loading =  useSelector(state=>state.catCard.loadingCategories);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCatCards(1))
    },[]);
    
    if(loading){
        return <h3>Loading ...</h3>
    }
    
    return(
        <ul className={styles.list}>
            {categories?.map((item,index)=>(
                <li key={item.id} onClick={()=>dispatch(getCatCards(item.id))}>{item.name} -></li>
            ))}

        </ul>
    )
}
export default memo(Categories)