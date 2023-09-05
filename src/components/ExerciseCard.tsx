import React, { useState } from 'react'
import { AiFillStar } from "react-icons/ai"
import { BiSolidDownArrow } from "react-icons/bi"
import { RootObject } from '../typos';
import YouTube from "react-youtube";


interface SearchComponentProps {
    data: RootObject | null;

}
const opts = {
    height: "290",
    width: "460",
    playerVars: {
        autoplay: 0, // Reproducir automáticamente el video
    },
};

const ExerciseCard = ({ data }: SearchComponentProps) => {

    const [open, setOpen] = useState(false)

    const showComplex = (item: string) => {

        let stars: number;
        let colorText: string;
        let color: string;

        switch (item) {
            case "beginner":
                stars = 1;
                colorText = "text-green-400"
                color = "#65A948"
                break;
            case "intermediate":
                stars = 2;
                colorText = "text-yellow-400"
                color = "#FFBC49"

                break;
            case "expert":
                stars = 3;
                colorText = "text-red-400"
                color = "#FA4444"

                break;
            default:
                stars = 0;
                colorText = "text-yellow-400"
                color = "#FFBC49"
                break;
        }
        const divs = Array.from({ length: stars }, (_, index) => (
            <AiFillStar key={index} color={color} />
        ));

        return (
            <div className='flex items-center justify-center'>
                <h1 className={"mr-1 font-medium " + colorText}>{item}</h1>
                {divs}
            </div>
        )

    }

    return (
        <div className="cursor-pointer exercise-card mb-2 exercise-card w-full bg-white hover:bg-gray-300 p-2 rounded-lg transition-all ease duration-300">
            <div className='flex justify-between'>
                <div>
                    <h1 className="font-bold text-gray-500 ">
                        {data && data?.name}
                    </h1>
                    <h1 className="font-ligth text-gray-500 ">
                        {data && data?.muscle}
                    </h1>
                </div>
                <div className=' flex'>

                    <div className="flex flex-col  justify-end items-end">
                        <h1 className='text-gray-500 font-semibold'> <span className='font-light'>Equipment:</span> {data ? data.equipment : 'other'}</h1>
                        {showComplex(data ? data?.difficulty : 'beginner')}
                    </div>
                    <div
                        onClick={() => { }}
                        className='flex items-center justify-center ml-2 cursor-pointer'>
                        <BiSolidDownArrow color={'#808080'} />
                    </div>
                </div>
            </div>
            <div className='flex w-full justify-between pt-6'>
                <h1 className='text-gray-500 pr-5 text-justify'>{data && data.instructions}</h1>
                <div className="video-player">
                    <YouTube videoId={'M9aAQmRF9BY'} opts={opts} onReady={()=>{}}/>
                </div>
            </div>
        </div>
    )
}

export default ExerciseCard