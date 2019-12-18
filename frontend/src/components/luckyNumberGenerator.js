import React from 'react';
import axios from 'axios';


const LuckyNumberGenerator = () => {
    const [pastWinningNumbers, setPastWinningNumbers] = React.useState([]);
    const [luckyNumbers, setLuckyNumbers] = React.useState([]);
    //create separate generator for super lotto and for mega millions

    const generateNumbers = () => {
        console.log("checkpoint");
    }

    //pull past winning numbers
    //pull in date info
    //pull in time info



    //randomly generate number





    //output five numbers and a mega
    //array of 5 numbers + 1 mega number

    //conditions no duplicate numbers for the first 5
    //6th number can be duplicate

    //helper function to generate number


    //helper function to generate mega

    return(
        <React.Fragment>
            <h2>Lucky Number Generator</h2>
            <button onClick={()=> generateNumbers()}>Winner Winner Chicken Dinner</button>
            <button onClick={()=> generateNumbers()}>You've Struck Gold!</button>
            <button onClick={()=> generateNumbers()}>Big Money Big Money Big Money</button>
        </React.Fragment>
    )


}

LuckyNumberGenerator.propTypes = {
    pastWinningNumbers: React.Proptypes.array,
    luckyNumbers: React.Proptypes.array
}

export default LuckyNumberGenerator;