import React, {Component} from 'react';
import classes from './FeedbackAuthorDetails.module.scss'

const FeedbackAuthorDetails = ({src, name, date}) => {

    return (
        <div className={classes.wrapperAuthorDetails}>
            <img src={src} alt="name"/>
            <span>{name}</span>
            <span>{date}</span>
        </div>
    );

}

export default FeedbackAuthorDetails;