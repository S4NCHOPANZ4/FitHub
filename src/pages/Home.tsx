import { useEffect, useState } from "react"

import { RootObject } from "../typos"
import SearchComponent from "../components/SearchComponent"
import { AiOutlineSearch } from "react-icons/ai"
import ExerciseCard from "../components/ExerciseCard"


const Home = () => {

    const [data, setData] = useState<RootObject[] | null>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)


    useEffect(() => {
        console.log(data)
    }, [data])



    return (
        <div className="w-[80%] mt-5">
            <SearchComponent setData={setData} setError={setError} setLoading={setLoading} />
            <div className="exercises-super w-[100%] mt-5 p-2 rounded-md">
                <div className="flex w-full justify-end">
                    <div className="flex items-center relative rounded-sm w-[220px] bg-white">
                        <input
                            className="pl-6  w-[100%] bg-transparent py-1"
                            type="text" placeholder="Search" />
                        <AiOutlineSearch className='absolute left-1' />
                    </div>
                </div>
                <h1 className="font-bold text-2xl text-blue-400">Exercises</h1>
                <div className="w-full  mt-3">
                    {data && data.map((item, i) => (
                        <ExerciseCard data={item} key={i}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home