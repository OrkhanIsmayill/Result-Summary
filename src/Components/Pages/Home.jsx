import React, { useEffect, useState } from 'react'

import "@fontsource/hanken-grotesk";
import icon1 from '..//assets/icon-reaction.svg'
import icon2 from "..//assets/icon-memory.svg"
import icon3 from "..//assets/icon-verbal.svg"
import icon4 from "..//assets/icon-visual.svg"


import axios from 'axios';

const Home = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const res = await axios.get("/data.json");
            setData(res.data)

        } catch (error) {
            console.log("Error");

        }


    }

    const section1data = data.filter(item => item.id === 1);
    const section2data = data.filter(item => item.id === 2);
    const section3data = data.filter(item => item.id === 3);
    const section4data = data.filter(item => item.id === 4);



    return (
        <div className='container' >
            <div className='resultField'>
                <div className='yourResult'>
                    <div className='resultContent'>
                        <div className='yourResultText'><p>Your Result</p></div>

                        <div className='resultPoint'>
                            <h1>76</h1>
                            <p>of 100</p>



                        </div>

                        <div className='greatText'>
                            <h1>Great</h1>
                            <p>You scored higher than 65% of the people who have taken these tests</p>

                        </div>

                    </div>


                </div>

                <div className='summary'>

                    <div className='summaryText'>
                        <h1>Summary</h1>
                    </div>


                    <div className='statisticis'>
                        {section1data.map((item) => (
                            <div className='statSection1'>
                                <div className='sectionText1'>
                                    <img src={icon1} alt="" />
                                    <p>{item.category}</p>

                                </div>
                                <div className='statPoint1'>
                                    <h1>{item.score}</h1>
                                    <p>/100</p>


                                </div>

                            </div>
                        ))}

                        {section2data.map((item) => (
                            <div className='statSection2'>
                                <div className='sectionText2'>
                                    <img src={icon2} alt="" />
                                    <p>{item.category}</p>

                                </div>
                                <div className='statPoint2'>
                                    <h1>{item.score}</h1>
                                    <p>/100</p>


                                </div>

                            </div>
                        ))}

                        {section3data.map((item) => (
                            <div className='statSection3'>
                                <div className='sectionText3'>
                                    <img src={icon3} alt="" />
                                    <p>{item.category}</p>

                                </div>
                                <div className='statPoint3'>
                                    <h1>{item.score}</h1>
                                    <p>/100</p>


                                </div>

                            </div>
                        ))}

                        {section4data.map((item) => (
                            <div className='statSection4'>
                                <div className='sectionText4'>
                                    <img src={icon4} alt="" />
                                    <p>{item.category}</p>

                                </div>
                                <div className='statPoint4'>
                                    <h1>{item.score}</h1>
                                    <p>/100</p>


                                </div>

                            </div>
                        ))}




                    </div>

                    <div className='continue'>
                        <button className='continueButton'>Continue</button>

                    </div>





                </div>


            </div>


        </div>
    )
}

export default Home