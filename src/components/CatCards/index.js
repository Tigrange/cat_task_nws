import styles from "./style.module.scss"
import React,{memo, Suspense, lazy} from "react"
import { useSelector , useDispatch} from 'react-redux'
import { getCatCards } from "redux/features/catCardSlice"
const Card = lazy(() => import("./Card"));
const CatCards = memo(()=>{
    const loading =  useSelector(state=>state.catCard.loadingImages);
    const images = useSelector(state=>state.catCard.images);
    const dispatch = useDispatch();

    if(loading){
        return <h3>Loading ...</h3>
    }

    return(
        <div>
            <div className={styles.container}>
                {images.map((item)=>(
                    <Suspense fallback={<div>Loading...</div>}  key={item.id}>
                        <Card img={item.url}/>
                    </Suspense>
                ))}
            </div>
            <button 
            className={styles.load_more}
            onClick={()=>dispatch(getCatCards())}
             >Load more ...</button>
        </div>
    )
})
export default CatCards 