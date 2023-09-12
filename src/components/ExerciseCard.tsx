import { useEffect, useState } from 'react'
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
const opts_md = {
    height: "230",
    width: "360",
    playerVars: {
        autoplay: 0, // Reproducir automáticamente el video
    },
};


const opts_sm = {
    height: "190",
    width: "260",
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

    useEffect(() => {
        setOpen(false)
        console.log('a');
        
    }, [data])


    const fetchExercises = async () => {
        setLoading(true)
        try {
            const fetch_data = await fetchVideo('How to do ' + data?.name + ' gym')
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
        <div className="min-w-[260px] cursor-pointer exercise-card mb-2 exercise-card w-full bg-zinc-800 hover:bg-zinc-600 p-2 rounded-lg transition-all ease duration-300">
            <div
                onClick={() => { setOpen(!open) }}
                className='flex justify-between my-2'>
                <div>
                    <h1 className="font-bold text-gray-300 ">
                        {data && data?.name}
                    </h1>
                    <h1 className="font-ligth text-gray-300 ">
                        {data && data?.muscle}
                    </h1>
                </div>
                <div className=' flex'>

                    <div className="flex flex-col  justify-end items-end ">
                        <h1 className='text-gray-300 font-semibold'> <span className='font-light'>Equipment:</span> {data ? data.equipment : 'other'}</h1>
                        {showComplex(data ? data?.difficulty : 'beginner')}
                    </div>
                    <div
                        className=' flex items-center justify-center ml-2 cursor-pointer'>
                        <BiSolidDownArrow color={'#808080'} />
                    </div>
                </div>
            </div>
            {
                open &&
                <div className='exercise-card-extra flex w-full justify-between pt-6 xl:flex-row flex-col'>
                    {loading &&
                        <div className='flex items-center justify-center bg-zinc-700 h-[190px] min-w-[230px] md:h-[230px] md:min-w-[360px] xl:h-[290px] xl:min-w-[460px]'>
                            <div className='loader_mini'></div>
                        </div>
                    }
                    <div className='flex items-center justify-center' style={{ display: loading ? 'none' : 'block' }}>
                        <YouTube className='xl:flex hidden items-center justify-center'  videoId={videoSearch?.items[0]?.id.videoId} opts={opts} onReady={() => { setLoading(false) }} />
                        <YouTube  className='md:flex xl:hidden hidden items-center justify-center' videoId={videoSearch?.items[0]?.id.videoId} opts={opts_md} onReady={() => { setLoading(false) }} />
                        <YouTube  className='xl:hidden md:hidden flex items-center justify-center' videoId={videoSearch?.items[0]?.id.videoId} opts={opts_sm} onReady={() => { setLoading(false) }} />
                    </div>
  
                    <h1 className='text-gray-300 pl-0 md:pl-5 text-justify text-sm xl:mt-0 mt-5 mr-1'>

                        {data && <ReadMoreText text={data.instructions} />}</h1>
                </div>
            }

        </div>
    )
}

function ReadMoreText({ text }: { text: string }) {
    const words = text.split(' ');
    const maxWords = 130;
    const [showMore, setShowMore] = useState(false);

    const truncatedText = words.slice(0, maxWords).join(' ');

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div>
            <p>
                {showMore ? text : truncatedText}
                {words.length > maxWords && (
                    <span>
                        {showMore ? (
                            <button className='ml-2 text-blue-400' onClick={toggleShowMore}>Read Less</button>
                        ) : (
                            <button className='ml-2 text-blue-400' onClick={toggleShowMore}>Read More</button>
                        )}
                    </span>
                )}
            </p>
        </div>
    );
}




export default ExerciseCard