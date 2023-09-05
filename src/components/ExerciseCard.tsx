import React, { useEffect, useState } from 'react'
import { AiFillStar } from "react-icons/ai"
import { BiSolidDownArrow } from "react-icons/bi"
import { RootObject, RootObjectVideo } from '../typos';
import YouTube from "react-youtube";
import { fetchVideo } from '../Api';


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
    const [videoSearch, setVideoSearch] = useState<RootObjectVideo | null>()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (open) {
            fetchExercises()
        }
    }, [open])


    const fetchExercises = async () => {
        setLoading(true) 
        try {
            const fetch_data = await fetchVideo('How to do ' + data?.name)
            setVideoSearch(fetch_data)
        } catch (err) {
            setLoading(false) 
            console.log(err)
        }
    }

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
            <div 
             onClick={() => { setOpen(!open) }}
            className='flex justify-between my-2'>
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
                       
                        className='flex items-center justify-center ml-2 cursor-pointer'>
                        <BiSolidDownArrow
                            color={'#808080'} />
                    </div>
                </div>
            </div>
            {
                open &&
                <div className='exercise-card-extra flex w-full justify-between pt-6 '>
                    <h1 className='text-gray-500 pr-5 text-justify'>{data && data.instructions}</h1>
                    {loading &&
                        <div className='flex items-center justify-center bg-gray-300 h-[290px] min-w-[460px]'> 
                            <div className='loader'></div>
                        </div>
                    }
                    <div className="video-player"  style={{ display: loading ? 'none' : 'block' }}>
                        <YouTube videoId={videoSearch?.items[0]?.id.videoId} opts={opts} onReady={() => {setLoading(false)}} />
                    </div>
                </div>
            }

        </div>
    )
}

export default ExerciseCard