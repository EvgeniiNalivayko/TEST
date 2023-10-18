import React from 'react';
import style from './FeedbackSection.module.scss';
import ProfileConfirmation from "../FindLoveComp/ProfileConfirmation/ProfileConfirmation";
import FeedbackAuthorDetails from "./FeedbackAuthorDetails/FeedbackAuthorDetails";

const FeedbackSection = () => {
    return (
        <div className={style.wrapperSection}>
            <h2>What people say about UaBrand</h2>
            <div className={style.wrapperCard}>
                <div className={style.card}>
                    <ProfileConfirmation title={"Very useful system"}
                                         text={"UaBrand has created very useful system where it’s possible to learn many details and character traits of any woman of interest. This helps in the search process so you have a sense of what kind of lady she is before contact. UaBrand seem to have an endless supply of beautiful women making it easier to take your time to find the right one for your personality.h"}/>
                    <FeedbackAuthorDetails src={"/feedBack/Picture.svg"} name={"Cory from United States"} date={"7 April 2023"}/>
                </div>
                <div className={style.card}>
                    <ProfileConfirmation title={"Support and services"}
                    text={"I would like to thank you for all your support and services in 2022, you have been very patient and understanding with translating my letters and video chats.\n" +
                        "You have many beautiful ladies here on your website but I am so happy to have met my lady who has really melted my heart, I just hope that she likes me as much as I like her."}/>
                    <FeedbackAuthorDetails src={"/feedBack/Picture1.svg"}  name={"Matt from United Kingdom"} date={"4 January 2023"}/>
                </div>
                <div className={style.card}>
                    <ProfileConfirmation title={"Recommend UaBrand"}
                                         text={"Hi guys! I am writing this, to let you know with the help of UaBrand I got to meet amazing my lady. Me and my lady are very excited for our future.\n" +
                                             "I highly recommend UaBrand, their service is perfect, the price structure is good, you know exactly what it costs.\n" +
                                             "All the best guys in your search"}/>
                    <FeedbackAuthorDetails src={"/feedBack/Picture2.svg"}   name={"Des from Australia"} date={"3 January 2023"}/>
                </div>
                <div className={style.card}>
                    <ProfileConfirmation title={"She is my lifelong"}
                                         text={"I am very satisfied with the service! I helped us both a lot to facilitate the first contact and to exchange without barriers.\n" +
                                             "I can wholeheartedly recommend UaBrand service. As for My Lady herself, I can only say that she is my lifelong dream and I hope that we will grow together step by step into a good and stable relationship.\n" +
                                             "Thank you the whole team."}/>
                    <FeedbackAuthorDetails src={"/feedBack/Picture3.svg"}  name={"Roland from Austria"} date={"21 February 2023"}/>
                </div>


            </div>
            <button className={`btn-primary`}>find love now</button>
        </div>
    )
};

export default FeedbackSection;
