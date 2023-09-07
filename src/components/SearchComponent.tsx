import { useEffect, useState } from "react"
import { fetchMuscle } from "../Api"
import { Api_fetchMuscle } from "../typos"

import { muscle } from "../SearchSpecs"
import { AiOutlineSearch } from "react-icons/ai"
import { GiMuscleUp } from "react-icons/gi"
import { TbTopologyComplex } from "react-icons/tb"
import { VscSend } from "react-icons/vsc"
import { RootObject } from "../typos"

interface SearchComponentProps {
    setData: React.Dispatch<React.SetStateAction<RootObject[] | null>>;
    setError: React.Dispatch<React.SetStateAction<boolean>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setErrorMessage: React.Dispatch<React.SetStateAction<string| null | undefined>>;
}


const SearchComponent = ({ setData, setError, setLoading, setErrorMessage }: SearchComponentProps) => {
    const [generalSearch, setGeneralSearch] = useState('')
    const [found, setFound] = useState(muscle)
    const [muscleSearch, setMuscleSearch] = useState('')
    const [searchParams, setSearchParams] = useState<Api_fetchMuscle>({})
    const [complexSearch, setComplexSearch] = useState<null | string>()


    useEffect(() => {
        setError(false)
        if (muscleSearch.length > 0) { setFound(filterMusclesBySimilarity(muscleSearch)) }
        else { setFound(muscle) }
    }, [muscleSearch])

    useEffect(() => {
        fetchExercises()
    }, [])

    const filterMusclesBySimilarity = (searchTerm: string) => {
        const filteredMuscles: { [key: string]: string } = {};
        for (const key in found) {
            const muscleName = found[key];
            if (muscleName.includes(searchTerm)) { filteredMuscles[key] = muscleName; }
        } return filteredMuscles;
    }

    const handleGeneralSearch = (e: string) => {
        setGeneralSearch(e)
        setComplexSearch(null)
        setMuscleSearch('')
        setSearchParams({
            name: e
        })
    }
    const handleComplexChange = (item: string | null) => {
        setComplexSearch(item)
        setGeneralSearch('')
        if (item && muscleSearch.length > 0) { setSearchParams({ muscle: muscleSearch, difficulty: item }) }
        else if (item) { setSearchParams({ difficulty: item }) }
        else if (muscleSearch.length > 0) {
            setSearchParams({ muscle: muscleSearch })
        }
    }

    const fetchExercises = async () => {
        setLoading(true)
        setError(false)
        if (!(muscleSearch in muscle)) { setMuscleSearch('') }
        try {
            const data = await fetchMuscle(searchParams)
            if (data === null || data.length === 0) { setError(true) , setErrorMessage("No matches found")}
            setData(data)
            setLoading(false)
        } catch (err) {
            setLoading(false)
            setError(true)
            setErrorMessage("The API is unreachable, please try again later")
        }
    }


    return (
        <div className="w-[100%]">
            <div className="flex justify-between sm:flex-row flex-col">
                <div className="search-bar mb-2 md:md-0 flex items-center relative rounded-sm sm:w-[45%] w-[full] sm:pr-1 pr-0
               bg-zinc-800 ">
                    <input
                        value={generalSearch}
                        onChange={(e) => { handleGeneralSearch(e.target.value) }}
                        className="text-white focus:outline-none pl-6  w-[100%] bg-transparent py-1"
                        type="text" placeholder="Search" />
                    <AiOutlineSearch className='absolute left-1' color="white"/>
                </div>
                <div className="sm:w-[50%] w-[full] sm:pl-1 pl-0">
                    <div className="bg-zinc-800 mb-2 md:md-0 muscle_search flex items-center relative rounded-sm sm:w-[80%] w-full">
                        <input
                            onChange={(e) => {
                                setGeneralSearch('')
                                if (e.target.value.length <= 0) {
                                    if (complexSearch) { setSearchParams({ difficulty: complexSearch }) }
                                    else { setSearchParams({}) }
                                }
                                if (e.target.value in muscle) {
                                    if (complexSearch) { setSearchParams({ muscle: e.target.value, difficulty: complexSearch }) }
                                    else { setSearchParams({ muscle: e.target.value }) }
                                }
                                setMuscleSearch(e.target.value)
                            }}
                            value={muscleSearch}
                            className=" selector pl-6 w-[100%] bg-transparent py-1 text-white"
                            type="text" placeholder="Muscle" />
                        <div className="search_cont bg-white absolute top-8 w-[100%] min-w-[100px] max-h-[250px] overflow-auto rounded-b-sm  z-10">
                            {
                                Object.keys(found).map((key, i) => (
                                    <div key={i}
                                        onClick={() => {
                                            setGeneralSearch('')
                                            if (complexSearch) { setSearchParams({ muscle: key, difficulty: complexSearch }) }
                                            else { setSearchParams({ muscle: key }) }
                                            setMuscleSearch(key)
                                        }}
                                        className="bg-zinc-800 text-white p-2 hover:bg-zinc-600 cursor-pointer">{key}</div>
                                ))
                            }
                        </div>
                        <GiMuscleUp className='absolute left-1' color="white" />
                    </div>
                    <div className="bg-zinc-800 mb-2 md:md-0 muscle_search flex items-center relative rounded-sm sm:w-[80%] w-full cursor-pointer 
                    py-1">
                        <div className="selector pl-6 w-[100%] ">
                            {!complexSearch ?
                                <h1 className="text-gray-400 pl-1">Set Complexity</h1>
                                :
                                <h1 className="text-white pl-1">{complexSearch}</h1>
                            }
                        </div>
                        <div className="search_cont absolute top-8 w-[100%] rounded-b-sm overflow-hidden z-10 
                    bg-zinc-800 text-white">
                            <div
                                onClick={() => { handleComplexChange(null) }}
                                className="p-2 hover:bg-zinc-600 cursor-pointer flex items-center ">
                                <div className="h-[10px] w-[10px] bg-gray-400 rounded-full"></div>
                                <h1 className="ml-2">None</h1>
                            </div>
                            <div
                                onClick={() => { handleComplexChange('Beginner') }}
                                className="p-2 hover:bg-zinc-600 cursor-pointer flex items-center ">
                                <div className="h-[10px] w-[10px] bg-green-400 rounded-full"></div>
                                <h1 className="ml-2">Simple</h1>
                            </div>
                            <div
                                onClick={() => { handleComplexChange('Intermediate') }}
                                className="p-2 hover:bg-zinc-600 cursor-pointer flex items-center ">
                                <div className="h-[10px] w-[10px] bg-yellow-400 rounded-full"></div>
                                <h1 className="ml-2">Medium</h1>
                            </div>
                            <div
                                onClick={() => { handleComplexChange('Expert') }}
                                className="p-2 hover:bg-zinc-600 cursor-pointer flex items-center ">
                                <div className="h-[10px] w-[10px] bg-red-400 rounded-full"></div>
                                <h1 className="ml-2">Complex</h1>
                            </div>
                        </div>
                        <TbTopologyComplex className='absolute left-1' color="white"/>
                    </div>
                </div>
                <button
                    onClick={() => fetchExercises()}
                    className="bg-blue-400 text-white px-2 py-1 rounded-md  flex items-center justify-center min-w-[70px] h-[40px] sm:h-[70px]">
                    <h1 className="block sm:hidden font-semibold mr-2">Search</h1>
                    <VscSend className="hidden sm:block" size={25}/>
                </button>
            </div>
        </div>
    )
}

export default SearchComponent