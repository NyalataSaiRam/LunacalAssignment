import { useRef, useState } from 'react';
import './Information.css'
import WidgetContainer from '../widget/WidgetContainer.component';
import NavBar from '../navbar/NavBar.component';
const Information = () => {



    return (
        <WidgetContainer showRightBar={true}>
            <NavBar />
            <div className='widget1_text'>

                Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
                <br />
                <br />
                I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
            </div>

        </WidgetContainer>

    )

}

export default Information;


