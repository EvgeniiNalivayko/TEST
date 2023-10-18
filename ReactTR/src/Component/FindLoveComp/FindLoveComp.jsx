import React from 'react';
import style from './FindLoveComp.module.scss';
import ProfileConfirmation from "./ProfileConfirmation/ProfileConfirmation";
const FindLoveComp = () => {
    return(
            <div className={style.flexColumnCenter}>
                <h2>Find love with ease</h2>
                <div className={style.findLove}>
                    <ProfileConfirmation photo={'/FindLoveComp/Welcome.svg'} title={"Create profile"}
                                         text={"Create your profile within few seconds with our easy sign-up steps. Don't forget to add a photo! "}/>
                    <ProfileConfirmation photo={'/FindLoveComp/Hello.svg'} title={"Confirm your profile"}
                                         text={"Check your mail and follow the link from a letter. Confirmed members get additional bonuses!"}/>
                    <ProfileConfirmation photo={'/FindLoveComp/Social Distancing.svg'} title={"Start communicating"}
                                         text={"Explore our Gallery of Ladies and find a woman who matches your criteria using filters. Write her a letter or invite to video chat, and start your love story!"}/>
                    <ProfileConfirmation photo={'/FindLoveComp/Couple3.svg'} title={"Find love"}
                                         text={"Communicate with your match and discover as much as possible about each other. Meet with your beloved and build serious relationship in real. "}/>
                </div>
                <button className={`btn-primary`}>find love now</button>
            </div>
    )
};

export default FindLoveComp;
