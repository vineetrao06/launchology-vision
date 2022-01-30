import React, { useState } from 'react';
import {
    XAxis,
    YAxis,
    AreaChart,
    Tooltip,
    Area,
    ResponsiveContainer,
} from "recharts"

const Home = (props) => {

    const [graphComponent, setGraphComponent] = useState()
    const tempArr = [{
        name: "1",
        price: 55,
    }, {
        name: "2",
        price: 80,
    }, {
        name: "3",
        price: 25,
    }, {
        name: "4",
        price: 100,
    }, {
        name: "5",
        price: 50,
    }, {
        name: "6",
        price: 75,
    }]

    return (
        <div className="bg-gray-100 h-screen w-full flex flex-col p-2">
            <div className="font-bold text-2xl text-green-700">Nice</div>
            <div className="h-52 w-100 flex flex-row items-center py-2 justify-center gap-x-2">
                <div className="w-1/4 h-full bg-white rounded-lg p-2 shadow-md flex flex-col items-center justify-evenly">
                    <div className="font-bold text-xl text-green-600">Days Happy</div>
                    <div style={{ fontSize: 100 }} className='text-green-600' >45</div>
                </div>
                <div className="w-1/4 h-full bg-white rounded-lg p-2 shadow-md flex flex-col items-center justify-evenly">
                    <div className="font-bold text-xl">Days Slighty Happy</div>
                    <div style={{ fontSize: 100 }}>22</div>
                </div>
                <div className="w-1/4 h-full bg-white rounded-lg p-2 shadow-md flex flex-col items-center justify-evenly">
                    <div className="font-bold text-xl text-blue-600">Days Neutral</div>
                    <div style={{ fontSize: 100 }} className='text-blue-600' >10</div>
                </div>
                <div className="w-1/4 h-full bg-white rounded-lg p-2 shadow-md flex flex-col items-center justify-evenly">
                    <div className="font-bold text-xl text-red-600">Days Sad</div>
                    <div style={{ fontSize: 100 }} className='text-red-600' >1e20</div>
                </div>
            </div>
            <div style={{ height: 450 }} className="w-full flex flex-row gap-x-2">
                <div className="h-full w-3/4 bg-white rounded-lg shadow-lg p-2 flex flex-col">
                    <div className='text-xl font-bold w-100 pb-2 text-center'>Today: Happy</div>
                    <div className ="h-full w-full">
                        <ResponsiveContainer className ='h-52'>
                            <AreaChart
                                width={205}
                                height={110}
                                className="w-100 h-100"
                                data={tempArr}
                                fill="#8884d8"
                            >
                                <defs>
                                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#22c55e" stopOpacity={0.9}/>
                                        <stop offset="100%" stopColor="#d4ffe4" stopOpacity={0.9}/>
                                    </linearGradient>
                                </defs>
                                <YAxis
                                    type="number"
                                    hide
                                />
                                <XAxis hide/>
                                <Tooltip labelFormatter={(index) => tempArr[index].name} />
                                <Area
                                    dataKey="price"
                                    stroke="#22c55e"
                                    fill ="url(#colorUv)"
                                    dot={false}
                                    nameKey="date"
                                    type="monotone"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="h-full w-1/4 bg-white rounded-lg shadow-lg p-2 flex flex-col">

                    <label for="customRange1" class="form-label">Rate your mental </label>
                    <input
                        type="range"
                        className=" form-range appearance-none w-full h-6 p-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none "
                        min="-2"
                        max="2"
                        id="customRange1"
                    />
                    <label for="customRange1" class="form-label">Example range 2</label>
                    <input
                        type="range"
                        className="form-range appearance-none w-full h-6 p-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none "
                        min="-10"
                        max="2"
                        id="customRange2"
                    />

                </div>
            </div>
        </div>
    );
}

export default Home;