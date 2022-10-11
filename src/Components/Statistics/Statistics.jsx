import React from 'react';
import {
    Area, AreaChart, CartesianGrid,
    Tooltip, XAxis,
    YAxis
} from "recharts";
const Statistics = () => {
    const data =

        [
            {
                "id": 1,
                "name": "React",
                "logo": "https://live.staticflickr.com/65535/52413593240_e00326e727_o.png",
                "total": 8
            },
            {
                "id": 2,
                "name": "JavaScript",
                "logo": "https://live.staticflickr.com/65535/52412638962_12e932256a_o.png",
                "total": 9
            },
            {
                "id": 4,
                "name": "CSS",
                "logo": "https://live.staticflickr.com/65535/52413665713_5977a693cb_o.png",
                "total": 8
            },
            {
                "id": 5,
                "name": "Git",
                "logo": "https://live.staticflickr.com/65535/52412639027_5692c15b3f_o.png",
                "total": 11
            }
        ]

    return (
        <>
            <h1 className="text-2xl font-bold my-8 text-slate-700"> Our  statistics</h1>
            <div className="flex justify-center items-center">
                <AreaChart
                    width={500}
                    height={400}
                    data={data}

                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <XAxis dataKey="total" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </div>
        </>
    );
};

export default Statistics;