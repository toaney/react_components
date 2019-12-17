import React from 'react';
import axios from 'axios';


const LuckyNumberGenerator = () => {
    const [pastWinningNumbers, setPastWinningNumbers] = React.useState([]);
    const [luckyNumbers, setLuckyNumbers] = React.useState([]);
    //create separate generator for super lotto and for mega millions


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
        <h2>Lucky Number Generator</h2>
    )


}

LuckyNumberGenerator.propTypes = {
    pastWinningNumbers: React.Proptypes.array,
    luckyNumbers: React.Proptypes.array
}

export default LuckyNumberGenerator;