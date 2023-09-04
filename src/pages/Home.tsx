import { useEffect, useState } from "react"
import { fetchMuscle } from "../Api"

import { muscle } from "../SearchSpecs"
import { AiOutlineSearch } from "react-icons/ai"
import { GiMuscleUp } from "react-icons/gi"




const Home = () => {

    const [found, setFound] = useState(muscle)
    const [muscleSearch, setMuscleSearch] = useState('')

    const filterMusclesBySimilarity = (searchTerm: string) => {
        const filteredMuscles: { [key: string]: string } = {};

        for (const key in found) {
            const muscleName = found[key];

            if (muscleName.includes(searchTerm)) {
                filteredMuscles[key] = muscleName;
            }
        }

        return filteredMuscles;
    }



    useEffect(() => {

        if (muscleSearch.length > 0) {
            setFound(filterMusclesBySimilarity(muscleSearch))
        }
        else {
            setFound(muscle)
        }

    }, [muscleSearch])

    return (
        <div className="w-[80%]">
            <div>
                <div className="flex items-center relative rounded-sm w-[220px]">
                    <input
                        className="pl-6  w-[100%] bg-transparent py-1"
                        type="text" placeholder="Search" />
                    <AiOutlineSearch className='absolute left-1' />
                </div>
                <div className="muscle_search flex items-center relative rounded-sm w-[220px]">
                    <input
                        onChange={(e) => setMuscleSearch(e.target.value)}
                  
                        value={muscleSearch}
                        className="selector pl-6 w-[100%] bg-transparent py-1"
                        type="text" placeholder="Muscle" />
                    <div className="search_cont absolute top-8 w-[100%] rounded-b-sm overflow-hidden">
                        {
                            Object.keys(found).map((key, i) => (
                                <div key={i} 
                                onClick={() => setMuscleSearch(key)}
                                className="p-2 hover:bg-[#cdcdcd] cursor-pointer">{key}</div>
                            ))
                        }
                    </div>
                    <GiMuscleUp className='absolute left-1' />
                </div>
            </div>
        </div>
    )
}

export default Home