import React from 'react';
import "./assets/index.css";
import MainPage from "./Component/MainPage/MainPage";
import GirlProfilesList from "./Component/GirlProfilesList/GirlProfilesList";
import FindLoveComp from "./Component/FindLoveComp/FindLoveComp";
import FeedbackSection from "./Component/FeedbackSection/FeedbackSection";
import VideoChat from "./Component/VideoChat/VideoChat";
import JoinSection from "./Component/JoinSection/JoinSection";
import FooterSection from "./Component/FooterSection/FooterSection";
import StatisticsSlider from "./Component/SimpleSlider/StatisticsSlider";


function App() {

    return (
        <div>
            <MainPage/>
            <div className={'container'}>
                <StatisticsSlider/>
                <GirlProfilesList/>
            </div>
            <FindLoveComp/>
            <FeedbackSection/>
            <VideoChat/>
            <JoinSection/>
            <FooterSection/>
        </div>
    );
}

export default App;
