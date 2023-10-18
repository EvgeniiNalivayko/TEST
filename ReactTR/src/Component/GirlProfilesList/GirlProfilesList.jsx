import React, {useEffect} from "react";
import GirlCard from "./GirlCard/GirlCard";
import classes from "./GirlProfilesList.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {sortList} from './GirlCard/Redux/girlsSlice';

const GirlProfilesList = () => {
    let girl = useSelector(state => state.girls.sortArray)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(sortList('all'))
    }, []);


    const sortProfile = (by) => {
        dispatch(sortList(by));
    }

    return (
        <div className={classes.wrapperProfileList}>
            <h2><span>1000+</span> real Ukrainian Women profiles </h2>
            <div className={classes.filter}>
                <a onClick={() => sortProfile('all')}>All</a>
                <a onClick={() => sortProfile('favorite')}>Favorites</a>
                <a onClick={() => sortProfile('sweet')}>Sweet</a>
            </div>
            <div className={classes.wrapperCard}>
                {girl.map((girl, index) => (
                    <GirlCard girl={girl} index={index} key={girl.id}/>
                ))}
            </div>
            <div className={classes.btnGroup}>
                <button className={'btn-primary'}>see more ladies</button>
                <button className={classes.btnFilter + ' btn-primary'}>more filters</button>
            </div>
        </div>
    )
}

export default GirlProfilesList;