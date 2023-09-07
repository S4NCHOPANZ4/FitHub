import {  useState } from "react"

import { RootObject } from "../typos"
import SearchComponent from "../components/SearchComponent"
import ExerciseCard from "../components/ExerciseCard"
import Error from "../components/Error"

const Home = () => {

    const [data, setData] = useState<RootObject[] | null>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string | null | undefined>()


    return (
        <div className="w-full md:w-[80%] mt-5"> 
            <SearchComponent setData={setData} setError={setError} setLoading={setLoading} setErrorMessage={setErrorMessage} />
            <div className="exercises-super w-[100%] mt-5 p-2 rounded-md">

                <h1 className="font-bold text-2xl text-blue-400">Exercises</h1>
                {loading && 
                <div className="w-full mt-3 flex items-center justify-center">
                    <div className='loader_mini'></div>
                </div>
                }
                <div className="w-full  mt-3">
                    {data && data.map((item, i) => (
                        <ExerciseCard data={item} key={i}/>
                    ))}
                    {(error && !loading) && 
                    <Error errorMessage={errorMessage}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Home