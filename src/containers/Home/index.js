import styles from "./style.module.scss";
import React,{memo, useEffect} from "react";
import Categories from "components/Categories";
import CatCards from "components/CatCards";
import {getCatCategories} from "redux/features/catCardSlice";
import { useDispatch } from 'react-redux'

const Home = memo(()=>{
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getCatCategories())
    },[])
    return(
        <div className={styles.container}>
            <Categories/>
            <CatCards/>
        </div>
    )
})
export default Home 