import React from 'react';
import classes from './ProfileConfirmation.module.scss';

const ProfileConfirmation = ({photo, title, text}) => {
    if(!photo) return (
        <div className={classes.confirmationContainerShadow}>
            <h3 className={classes.confirmationTitle}>{title}</h3>
            <p className={classes.confirmationDescription}>
                {text}
            </p>
        </div>
    )
    return (
        <div className={classes.confirmationContainer}>
            <img
                src={photo}
                alt="Profile Confirmation"
                className={classes.confirmationImage}
            />
            <h3 className={classes.confirmationTitle}>{title}</h3>
            <p className={classes.confirmationDescription}>
                {text}
            </p>
        </div>
    );
};

export default ProfileConfirmation;
