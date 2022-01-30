import React from 'react';

const Home = (props) => {
    return (
        <div className="bg-gray-100 h-screen w-full flex flex-col p-2">
            <div className="font-bold text-2xl text-green-800">Nice</div>
            <div className="h-52 w-100 flex flex-row items-center py-2 justify-center gap-x-2">
                <div className="w-1/4 h-full bg-white rounded-lg p-2 shadow-md">
                    <div className="font-bold text-xl">Days Happy</div>
                </div>
                <div className="w-1/4 h-full bg-white rounded-lg p-2 shadow-md">
                    <div className="font-bold text-xl">Gonna</div>
                </div>
                <div className="w-1/4 h-full bg-white rounded-lg p-2 shadow-md">
                    <div className="font-bold text-xl">Give</div>
                </div>
                <div className="w-1/4 h-full bg-white rounded-lg p-2 shadow-md">
                    <div className="font-bold text-xl">You up</div>
                </div>
            </div>
            <div className="h-full w-full flex flex-row gap-x-2">
                <div className="h-full w-3/4 bg-white rounded-lg shadow-lg">
                    <p> i think graph will be here </p>
                    <p> average mood this day: Happy/content/sad/depressed</p>

                </div>
                <div className="h-full w-1/4 bg-white rounded-lg shadow-lg p-2 flex flex-col">

                    <label for="customRange1" class="form-label">Rate your mental </label>
                    <input
                        type="range"
                        class=" form-range w-full h-6 p-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none "
                        min="-2"
                        max="2"
                        id="customRange1"
                    />
                    <label for="customRange1" class="form-label">Example range 2</label>
                    <input
                        type="range"
                        class=" form-range w-full h-6 p-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none "
                        min="2"
                        max="-10"
                        id="customRange2"
                    />

                </div>
            </div>
        </div>
    );
}

export default Home;