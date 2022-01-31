import React, { useState, useEffect } from 'react';
import {
    XAxis,
    YAxis,
    AreaChart,
    Tooltip,
    Area,
    ResponsiveContainer,
} from "recharts"
import axios from 'axios';
import { getDefaultNormalizer } from '@testing-library/react';
//backend url
const rootUrl = "http://localhost:5000/"


const Home = (props) => {

    const [x, setName] = useState("");
    const [y, setName2] = useState("");
    const [graphComponent, setGraphComponent] = useState()





    var values = [{
        day: "1",
        feeling: 3,
    }, {
        day: "2",
        feeling: 8,
    }, {
        day: "3",
        feeling: 6,
    }, {
        day: "4",
        feeling: 7,
    }, {
        day: "5",
        feeling: 4,
    }, {
        day: "6",
        feeling: 2,
    }, {
        day: "7",
        feeling: 5,
    }, {
        day: "6",
        feeling: 10,
    }]




    return (
        <div className="bg-white h-screen w-full flex flex-col p-2">
            <div className="font-bold text-2xl text-green-700">Nice</div>
            <div className="h-52 w-100 flex flex-row items-center py-2 justify-center gap-x-2">
                <div className="w-1/4 h-full bg-white rounded-lg p-2 shadow-md flex flex-col items-center justify-evenly">
                    <div className="font-bold text-xl text-green-600">Days Happy</div>
                    <div id="daysHappy" style={{ fontSize: 100 }} className='text-green-600' ></div>
                </div>
                <div className="w-1/4 h-full bg-white rounded-lg p-2 shadow-md flex flex-col items-center justify-evenly">
                    <div className="font-bold text-xl text-black">Days Slighty Happy</div>
                    <div id="daysSlightlyHappy" style={{ fontSize: 100 }}></div>
                </div>
                <div className="w-1/4 h-full bg-white rounded-lg p-2 shadow-md flex flex-col items-center justify-evenly">
                    <div className="font-bold text-xl text-blue-600">Days Neutral</div>
                    <div id="daysNeutral" style={{ fontSize: 100 }} className='text-blue-600' ></div>
                </div>
                <div className="w-1/4 h-full bg-white p-2 shadow-md flex flex-col items-center justify-evenly">
                    <div className="font-bold text-xl text-red-600">Days Sad</div>
                    <div id="daysSad" style={{ fontSize: 100 }} className='text-red-600' ></div>
                </div>
            </div>
            <div style={{ height: 450 }} className="w-full flex flex-row gap-x-2">
                <div className="h-full w-3/4 bg-white rounded-lg shadow-lg p-2 flex flex-col">
                    <div id="todayFeeling" className='text-xl font-bold w-100 pb-2 text-center'>Today: Happy</div>
                    <div className="h-full w-full">
                        {graphComponent}
                        <ResponsiveContainer className='h-52'>
                            <AreaChart
                                width={205}
                                height={110}
                                className="w-100 h-100"
                                data={values}
                                fill="#8884d8"
                            >
                                <defs>
                                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#22c55e" stopOpacity={0.9} />
                                        <stop offset="100%" stopColor="#d4ffe4" stopOpacity={0.9} />
                                    </linearGradient>
                                </defs>
                                <YAxis
                                    type="feeling"

                                />
                                <XAxis />
                                {/* <Tooltip labelFormatter={(index) => values[index].name} /> */}
                                <Area
                                    dataKey="day"
                                    stroke="#22c55e"
                                    fill="#8884d8"
                                    dot={true}
                                    nameKey="Feeling"
                                    type="monotone"
                                />
                            </AreaChart>

                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="h-full w-1/4 bg-white rounded-lg shadow-lg p-2 flex flex-col">

                    <label for="customRange1" class="form-label">Enter the day number</label>

                    {/* <input
                        type="range"
                        className=" form-range appearance-none w-full h-6 p-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none "
                        min="-2"
                        max="2"
                        id="customRange1"
                    />
                    
                    <input
                        type="range"
                        className="form-range appearance-none w-full h-6 p-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none "
                        min="-10"
                        max="2"
                        id="customRange2"
                    /> */}

                    <br></br>
                    <input

                        type="text"
                        placeholder='Enter here'
                        value={x}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <br></br>
                    <label for="customRange1" class="form-label">Enter your happiness on a scale of 1 to 10</label>
                    <br></br>
                    <input

                        id="happinessField"
                        type="text"
                        placeholder='Enter here'
                        value={y}
                        onChange={(e) => setName2(e.target.value)}
                    />
                    <br></br>

                    <button
                        className='w-50 h-10 rounded-full bg-[#647a9e]'
                        type="submit"
                        value="Add Todo"
                        onClick={async () => {
                            if (y < 4) {
                                var newText = "Today: Sad"
                            }
                            else if (y < 6) {
                                var newText = "Today: Neutral"
                            }
                            else if (y < 8) {
                                var newText = "Today: Slightly Happy"
                            }
                            else if (y < 4) {
                                var newText = "Today: Happy"
                            }
                            document.getElementById("todayFeeling").innerHTML = newText;
                            const todo = { "x": x, "y": y };
                            const response = await fetch(rootUrl + "main", {
                                method: "POST",

                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(todo)
                            })
                            if (response.ok) {
                                // console.log("it worked")
                                response.json().then(data => {
                                    document.getElementById("data1").innerHTML = data["message1"]
                                    document.getElementById("data2").innerHTML = data["message2"]
                                    document.getElementById("data3").innerHTML = data["message3"]
                                    document.getElementById("daysHappy").innerHTML = data["happyDays"]
                                    document.getElementById("daysSlightlyHappy").innerHTML = data["slightlyHappyDays"]
                                    document.getElementById("daysNeutral").innerHTML = data["neutralDays"]
                                    document.getElementById("daysSad").innerHTML = data["sadDays"]



                                });

                            }
                        }}> Submit
                    </button>

                    <div className="font-bold text-xl text-blue-600"></div>

                    <br></br>

                    <div id="data1" style={{ fontSize: 15 }} className="font-bold text-xl"></div>

                    <div id="data2" style={{ fontSize: 12.5 }} className="font-bold text-xl"></div>
                    <div id="data3" style={{ fontSize: 12.5 }} className="font-bold text-xl"></div>
                    {/* <div style={{ fontSize: 100 }}>22</div> */}

                </div>
            </div>
        </div >
    );
}

export default Home;