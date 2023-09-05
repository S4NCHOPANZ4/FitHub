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
    setData: React.Dispatch<React.SetStateAction<RootObject[] | null >>;
    setError: React.Dispatch<React.SetStateAction<boolean>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}


const SearchComponent = ({ setData, setError, setLoading }: SearchComponentProps) => {
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

    const filterMusclesBySimilarity = (searchTerm: string) => {
        const filteredMuscles: { [key: string]: string } = {};
        for (const key in found) {
            const muscleName = found[key];
            if (muscleName.includes(searchTerm)) { filteredMuscles[key] = muscleName; }
        } return filteredMuscles;
    }

    const handleGeneralSearch = (e: string) =>{
        setGeneralSearch(e)
        setComplexSearch(null)
        setMuscleSearch('')
        setSearchParams({
            name: e
        })
    }
    const handleComplexChange = (item: string | null) =>{
        setComplexSearch(item)
        setGeneralSearch('')
        if(item && muscleSearch.length > 0){setSearchParams({muscle: muscleSearch, difficulty: item})}
        else if(item){setSearchParams({ difficulty: item})}
        else if (muscleSearch.length > 0){
            setSearchParams({ muscle: muscleSearch})
        }
    }

    const fetchExercises = async () => {
        setLoading(true)
        if(!(muscleSearch in muscle)){setMuscleSearch('')}
          try {
            const data = await fetchMuscle(searchParams)
            if(data === null){setError(true)}
            setData(data)
            setLoading(false)
          }catch(err){
            setLoading(false)
            setError(true)}
      }


    return (
        <div className="w-[100%]">
            <div className="flex justify-between">
                <div className="flex items-center relative rounded-sm w-[220px]">
                    <input
                        value={generalSearch}
                        onChange={(e) => {handleGeneralSearch(e.target.value)}}
                        className="pl-6  w-[100%] bg-transparent py-1"
                        type="text" placeholder="Search" />
                    <AiOutlineSearch className='absolute left-1' />
                </div>
                <div className=" muscle_search flex items-center relative rounded-sm w-[220px]">
                    <input
                        onChange={(e) => {
                            setGeneralSearch('')
                            if(e.target.value.length <= 0){
                                if(complexSearch){setSearchParams({difficulty: complexSearch})}
                                else{setSearchParams({})}
                            }
                            if(e.target.value in muscle){
                                if(complexSearch){setSearchParams({muscle: e.target.value,difficulty: complexSearch})}
                                else{setSearchParams({muscle: e.target.value})}
                            }
                            setMuscleSearch(e.target.value)
                        }}
                        value={muscleSearch}
                        className=" selector pl-6 w-[100%] bg-transparent py-1"
                        type="text" placeholder="Muscle" />
                    <div className="search_cont bg-white absolute top-8 w-[100%] min-w-[100px] max-h-[250px] overflow-auto rounded-b-sm  z-10">
                        {
                            Object.keys(found).map((key, i) => (
                                <div key={i}
                                    onClick={() => {
                                        setGeneralSearch('')
                                        if(complexSearch){setSearchParams({muscle: key,difficulty: complexSearch})}
                                        else{setSearchParams({muscle: key})}
                                        setMuscleSearch(key)
                                    }}
                                    className="p-2 hover:bg-[#cdcdcd] cursor-pointer">{key}</div>
                            ))
                        }
                    </div>
                    <GiMuscleUp className='absolute left-1' />
                </div>
                <div className="muscle_search flex items-center relative rounded-sm w-[220px] cursor-pointer 
                 ">
                    <div className="selector pl-6 w-[100%] ">
                        {!complexSearch ?
                            <h1 className="text-gray-400 pl-1">Set Complexity</h1>
                            :
                            <h1 className="text-gray-700 pl-1">{complexSearch}</h1>
                        }
                    </div>
                    <div className="search_cont absolute top-8 w-[100%] rounded-b-sm overflow-hidden z-10 
                    bg-white">
                        <div
                            onClick={() => { handleComplexChange(null)}}
                            className="p-2 hover:bg-[#cdcdcd] cursor-pointer flex items-center ">
                            <div className="h-[10px] w-[10px] bg-gray-400 rounded-full"></div>
                            <h1 className="ml-2">None</h1>
                        </div>
                        <div
                            onClick={() => { handleComplexChange('Beginner')}}
                            className="p-2 hover:bg-[#cdcdcd] cursor-pointer flex items-center ">
                            <div className="h-[10px] w-[10px] bg-green-400 rounded-full"></div>
                            <h1 className="ml-2">Simple</h1>
                        </div>
                        <div
                            onClick={() => { handleComplexChange('Intermediate')}}
                            className="p-2 hover:bg-[#cdcdcd] cursor-pointer flex items-center ">
                            <div className="h-[10px] w-[10px] bg-yellow-400 rounded-full"></div>
                            <h1 className="ml-2">Medium</h1>
                        </div>
                        <div
                            onClick={() => { handleComplexChange('Expert')}}
                            className="p-2 hover:bg-[#cdcdcd] cursor-pointer flex items-center ">
                            <div className="h-[10px] w-[10px] bg-red-400 rounded-full"></div>
                            <h1 className="ml-2">Complex</h1>
                        </div>
                    </div>
                    <TbTopologyComplex className='absolute left-1' />
                </div>
                <button 
                onClick={() => fetchExercises()}
                className="bg-blue-400 text-white px-2 py-1 rounded-md flex items-center">
                    Search
                    <VscSend className="ml-2" />
                </button>
            </div>
        </div>
    )
}

export default SearchComponent