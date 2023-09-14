import { useState } from "react"

import Navbar from "../components/Navbar"
import { BsGenderMale, BsGenderFemale, BsHeartPulseFill } from 'react-icons/bs'
import { AiOutlineSend } from 'react-icons/ai'
import { BiSolidBabyCarriage } from 'react-icons/bi'
import { FaTransgender } from 'react-icons/fa'
import { GiBodyHeight, GiWeight } from 'react-icons/gi'
import { BiBody } from 'react-icons/bi'
import { BodyFatData } from "../typos"
import { BodyFatFetch } from "../Api"
import BMI_graphic from "../components/BMI_graphic"
import Error from "../components/Error"

const BodyFatPage = () => {

    //--------Form
    const [age, setAge] = useState<number | string | null>()
    const [ageErr, setAgeErr] = useState(false)
    const [gender, setGender] = useState<string | null>()
    const [genderErr, setGenderErr] = useState(false)
    const [height, setHeight] = useState<number | string | null | undefined>()
    const [heightErr, setHeightErr] = useState(false)
    const [weight, setWeight] = useState<number | string | null | undefined>()
    const [weightErr, setWeightErr] = useState(false)
    const [neck, setNeck] = useState<number | string | null | undefined>()
    const [neckErr, setNeckErr] = useState(false)
    const [waist, setWaist] = useState<number | string | null | undefined>()
    const [waistErr, setWaistErr] = useState(false)
    const [hip, setHip] = useState<number | string | null | undefined>()
    const [hipErr, setHipErr] = useState(false)


    //--------
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<BodyFatData | undefined | null>()



    const submitForm = () => {
        if (age && gender && height && weight && neck && waist && hip) {
            fetchFromApi()
        } else {
            switch (null || undefined) {
                case age:
                    setAgeErr(true)
                    break;
                case gender:
                    setGenderErr(true)
                    break
                case height:
                    setHeightErr(true)
                    break
                case weight:
                    setWeightErr(true)
                    break
                case weight:
                    setNeckErr(true)
                    break
                case weight:
                    setWaistErr(true)
                    break
                case weight:
                    setHipErr(true)
                    break
                default:

            }

        }
    }

    const fetchFromApi = async () => {
        setLoading(true)


        try {
            const data = await BodyFatFetch({
                age: fixValues(80, 0, Number(age))?.toString(),
                gender: gender,
                height: fixValues(230, 130, Number(height)).toString(),
                weight: fixValues(160, 40, Number(weight)).toString(),
                neck: fixValues(60, 20, Number(neck)).toString(),
                waist: fixValues(130, 40, Number(waist)).toString(),
                hip: fixValues(130, 40, Number(hip)).toString(),
            })
            if (data === null || data.length === 0) { setError(true) }
            if (data) {
                setLoading(false)
            }
            console.log(data);
            setData(data.data)

        } catch (err) {
            setError(true)
            setLoading(false)
        }
    }

    const fixValues = (max: number, min: number, value: number) => {
        if (value <= max && value >= min) {
            return value
        }
        else {
            if (value < min) {
                return min
            }
            else if (value > max) {
                return max
            }
            else {
                return value
            }
        }
    }



    return (
        <>
            <div>
                <Navbar id={'fatPer'} />
            </div>
            <div className="w-full md:w-[80%]  flex  justify-center mt-5">
                <div className="flex w-full flex-col">
                    <div className="flex items-center justify-evenly mb-5 flex-col md:flex-row">
                        {/* col1 */}
                        <div className="flex justify-center items-center md:items-end flex-col md:flex-col md:mr-2">
                            {/* age  */}
                            <div className="flex lg:items-center lg:justify-center lg:flex-row flex-col md:mb-2 md:mr-0 mr-4 sm:w-auto w-[70vw] ">
                                <h1 className='text-gray-300 font-semibold mr-2 '>Age:</h1>
                                <div className={`${ageErr ? 'border-red-500 ' : 'border-transparent '} border border-1 search-bar  md:md-0 flex items-center relative rounded-sm sm:w-[140px] w-[full] sm:pr-1 pr-0
               bg-zinc-800`}>
                                    <input
                                        min="1" max="120"
                                        value={age ? age : ''}
                                        onChange={(e) => {
                                            setAgeErr(false)
                                            setAge(e.target.value)
                                        }}
                                        className="text-white focus:outline-none pl-6  w-[100%] bg-transparent py-1 "
                                        type="number" placeholder="Age" />
                                    <BiSolidBabyCarriage className='absolute left-1' color="white" />
                                </div>
                            </div>
                            {/* weight */}
                            <div className="flex lg:items-center lg:justify-center lg:flex-row flex-col mb-2 md:mr-0 mr-4 sm:w-auto w-[70vw]">
                                <h1 className='text-gray-300 font-semibold mr-2'>Weight: </h1>
                                <div className={`${weightErr ? 'border-red-500 ' : 'border-transparent'} border border-1 search-bar  md:md-0 flex items-center relative rounded-sm sm:w-[140px] w-[full] sm:pr-1 pr-0
               bg-zinc-800`}>
                                    <input
                                        value={weight ? weight : ''}
                                        onChange={(e) => {
                                            setWeightErr(false)
                                            setWeight(e.target.value)
                                        }}
                                        className="text-white focus:outline-none pl-6  w-[100%] bg-transparent py-1"
                                        type="number" placeholder="Weight" />
                                    <GiWeight className='absolute left-1' color="white" />
                                    <span className='font-light text-white'>kg</span>

                                </div>
                            </div>

                            {/* height */}
                            <div className="flex lg:items-center lg:justify-center lg:flex-row flex-col mb-2 md:mr-0 mr-4 sm:w-auto w-[70vw]">
                                <h1 className='text-gray-300 font-semibold  mr-2'>Height:</h1>
                                <div className={`${heightErr ? 'border-red-500 ' : 'border-transparent'} border border-1 search-bar  md:md-0 flex items-center relative rounded-sm sm:w-[140px] w-[full] sm:pr-1 pr-0
               bg-zinc-800`}>
                                    <input
                                        value={height ? height : ''}
                                        onChange={(e) => {
                                            setHeightErr(false)
                                            setHeight(e.target.value)
                                        }}
                                        className="text-white focus:outline-none pl-6  w-[100%] bg-transparent py-1"
                                        type="number" placeholder="Height" />
                                    <GiBodyHeight className='absolute left-1' color="white" />
                                    <span className='font-light text-white'>cm</span>
                                </div>
                            </div>

                        </div>
                        {/* col 2 */}

                        <div className="flex justify-center items-center md:items-end flex-col md:flex-col">
                            {/* neck  */}
                            <div className="flex lg:items-center lg:justify-center lg:flex-row flex-col mb-2 md:mr-0 mr-4 sm:w-auto w-[70vw]">
                                <h1 className='text-gray-300 font-semibold  mr-2'>Neck:</h1>
                                <div className={`${neckErr ? 'border-red-500 ' : 'border-transparent'} border border-1 search-bar  md:md-0 flex items-center relative rounded-sm sm:w-[140px] w-[full] sm:pr-1 pr-0 bg-zinc-800`}>
                                    <input
                                        value={neck ? neck : ''}
                                        onChange={(e) => {
                                            setNeckErr(false)
                                            setNeck(e.target.value)
                                        }}
                                        className="text-white focus:outline-none pl-6  w-[100%] bg-transparent py-1"
                                        type="number" placeholder="Neck" />
                                    <BiBody className='absolute left-1' color="white" />
                                    <span className='font-light text-white'>cm</span>
                                </div>
                            </div>
                            {/* waist */}
                            <div className="flex lg:items-center lg:justify-center lg:flex-row flex-col mb-2 md:mr-0 mr-4 sm:w-auto w-[70vw]">
                                <h1 className='text-gray-300 font-semibold  mr-2'>Waist:</h1>
                                <div className={`${waistErr ? 'border-red-500 ' : 'border-transparent'} border border-1 search-bar  md:md-0 flex items-center relative rounded-sm sm:w-[140px] w-[full] sm:pr-1 pr-0 bg-zinc-800`}>
                                    <input
                                        value={waist ? waist : ''}
                                        onChange={(e) => {
                                            setWaistErr(false)
                                            setWaist(e.target.value)
                                        }}
                                        className="text-white focus:outline-none pl-6  w-[100%] bg-transparent py-1"
                                        type="number" placeholder="Waist" />
                                    <BiBody className='absolute left-1' color="white" />
                                    <span className='font-light text-white'>cm</span>
                                </div>
                            </div>
                            {/* hip */}
                            <div className="flex lg:items-center lg:justify-center lg:flex-row flex-col mb-2 md:mr-0 mr-4 sm:w-auto w-[70vw]">
                                <h1 className='text-gray-300 font-semibold  mr-2'>Hip:</h1>
                                <div className={`${hipErr ? 'border-red-500 ' : 'border-transparent'} border border-1 search-bar  md:md-0 flex items-center relative rounded-sm sm:w-[140px] w-[full] sm:pr-1 pr-0 bg-zinc-800`}>
                                    <input
                                        value={hip ? hip : ''}
                                        onChange={(e) => {
                                            setHipErr(false)
                                            setHip(e.target.value)
                                        }}
                                        className="text-white focus:outline-none pl-6  w-[100%] bg-transparent py-1"
                                        type="number" placeholder="Hip" />
                                    <BiBody className='absolute left-1' color="white" />
                                    <span className='font-light text-white'>cm</span>
                                </div>
                            </div>



                        </div>
                        <div className="flex justify-center sm:items-end items-center flex-col md:ml-3 ">

                            {/* gender */}
                            <div className="flex lg:items-center lg:justify-center lg:flex-row flex-col sm:w-auto w-[70vw]">
                                <h1 className='text-gray-300 font-semibold  mr-2'>Gender:</h1>
                                <div className={`${genderErr ? 'border-red-500 ' : 'border-transparent'} border border-1 bg-zinc-800 md:md-0 muscle_search flex items-center relative rounded-sm sm:w-[140px] w-full cursor-pointer  py-1`}>
                                    <div className="selector pl-6 w-[100%] ">
                                        <h1 className="text-gray-400 pl-1">{gender ? gender : 'Set Gender'}</h1>
                                    </div>
                                    <div className="search_cont absolute top-8 w-[100%] rounded-b-sm overflow-hidden z-10 bg-zinc-800 text-white">
                                        <div
                                            onClick={() => {
                                                setGenderErr(false)
                                                setGender('male')
                                            }}
                                            className="p-2 hover:bg-zinc-600 cursor-pointer flex items-center ">
                                            <BsGenderMale />
                                            <h1 className="md:ml-2 ">Male</h1>
                                        </div>
                                        <div
                                            onClick={() => {
                                                setGenderErr(false)
                                                setGender('female')
                                            }}
                                            className="p-2 hover:bg-zinc-600 cursor-pointer flex items-center ">
                                            <BsGenderFemale />
                                            <h1 className="md:ml-2">Female</h1>
                                        </div>



                                    </div>
                                    <FaTransgender className='absolute left-1' color="white" />
                                </div>
                            </div>

                            <button
                                onClick={() => submitForm()}
                                className='md:mt-3 bg-blue-400  text-gray-100 font-semibold py-2 flex items-center justify-center mt-7 sm:w-[140px] w-[35vw]'>
                                <AiOutlineSend size={20} />
                            </button>

                        </div>
                    </div>
                    <div className='ml-2 w-full flex bg-zinc-800 rounded-md items-center justify-center '>
                        {loading &&

                            <div className="h-[140px] flex justify-center items-center">
                                <div className="loader_mini"></div>
                            </div>
                        }
                        {
                            data ?
                                !loading &&
                                <div className="flex flex-col lg:flex-row w-full h-full p-4 justify-between ">
                                    <div>
                                        <h1 className="text-blue-400 font-semibold text-2xl ">Body Fat Category</h1>
                                        <h1 className="text-white font-bold text-3xl"> <span className="font-light">{data["Body Fat Category"] ? data["Body Fat Category"] : "Normal"}</span></h1>
                                        <h1 className="text-white font-bold text-xl mt-5"> <span className="font-light">BMI: {data["Body Fat (BMI method)"]}</span></h1>

                                        <div className="my-8 flex sm:block justify-center items-center">
                                            <BMI_graphic data={"18.5 - 25"} bmi={data["Body Fat (BMI method)"]} />
                                        </div>
                                    </div>
                                    <div className="flex w-full lg:w-[50%] h-[100%] justify-evenly items-center">
                                        <div className="mr-2 lg:mr-0 mt-3 lg:mt-0">
                                            <div className="text-white font-ligth text-md lg:text-lg mb-10">
                                                <h1 className="text-blue-400 font-semibold">
                                                    Body Fat (BMI method):
                                                </h1>
                                                <h1>
                                                    {data["Body Fat (BMI method)"]}
                                                </h1>
                                            </div>
                                            <div className="text-white font-ligth text-md lg:text-lg">
                                                <h1 className="text-blue-400 font-semibold">
                                                    Body Fat (U.S. Navy Method):
                                                </h1>
                                                <h1>
                                                    {data["Body Fat (U.S. Navy Method)"]}
                                                </h1>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-white font-ligth text-md lg:text-lg mb-10">
                                                <h1 className="text-blue-400 font-semibold">
                                                    Body Fat Mass:
                                                </h1>
                                                <h1>
                                                    {data["Body Fat Mass"]}
                                                </h1>
                                            </div>
                                            <div className="text-white font-ligth text-md lg:text-lg ">
                                                <h1 className="text-blue-400 font-semibold">
                                                    Lean Body Mass:
                                                </h1>
                                                <h1>
                                                    {data["Body Fat Mass"]}
                                                </h1>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                :
                                !loading &&
                                <div className="flex items-center flex-col justify-center w-full h-full p-3 min-h-[300px]">
                                    <BsHeartPulseFill color="#bfbfbf" size={40} />
                                    <p className="text-zinc-400 text-lg mt-2">Use the menu above to make a search!</p>
                                </div>

                        }
                        {(error && !loading) &&
                            <Error errorMessage={'Sorry, something went wrong. Please try again later.'} />
                        }

                    </div>
                    <div className="flex flex-col justify-between w-full h-full p-3 mt-5">
                        <div className="mb-10">
                            <h1 className="text-blue-400 font-semibold text-2xl mb-1">Welcome to the Body Fat Percentage Calculator</h1>
                            <h1 className="text-gray-400 text-md text-justify">The Daily Body Fat Percentage Calculator is your trusted tool for estimating your current body fat percentage and setting goals for a healthier lifestyle. Whether you want to maintain, reduce, or increase your body fat percentage, our user-friendly interface takes various factors into account to provide you with accurate recommendations. By understanding your body composition, you can make informed decisions to achieve your fitness and health objectives. Take control of your fitness journey and get started with this valuable tool today.</h1>
                        </div>
                        <div className="">
                            <h1 className="text-xl text-blue-400 mb-2">Search specifications</h1>
                            <div className="mb-2">
                                <h1 className="text-blue-400 font-normal text-mb mb-1">Age</h1>
                                <h1 className="text-gray-400 text-sm">Values between: <span className="text-blue-400 text-sm">0 years - 80 years</span></h1>
                            </div>
                            <div className="mb-2">
                                <h1 className="text-blue-400 font-normal text-mb mb-1">Height</h1>
                                <h1 className="text-gray-400 text-sm">Values between: <span className="text-blue-400 text-sm">130cm  - 230cm</span></h1>
                            </div>
                            <div className="mb-4">
                                <h1 className="text-blue-400 font-normal text-mb mb-1">Weight</h1>
                                <h1 className="text-gray-400 text-sm">Values between: <span className="text-blue-400 text-sm">40kg - 160kg</span></h1>
                            </div>
                            <div className="mb-4">
                                <h1 className="text-blue-400 font-normal text-mb mb-1">Neck</h1>
                                <h1 className="text-gray-400 text-sm">Values between: <span className="text-blue-400 text-sm">20kg - 60kg</span></h1>
                            </div>
                            <div className="mb-4">
                                <h1 className="text-blue-400 font-normal text-mb mb-1">Waist</h1>
                                <h1 className="text-gray-400 text-sm">Values between: <span className="text-blue-400 text-sm">40kg - 130kg</span></h1>
                            </div>
                            <div className="mb-4">
                                <h1 className="text-blue-400 font-normal text-mb mb-1">Weight</h1>
                                <h1 className="text-gray-400 text-sm">Values between: <span className="text-blue-400 text-sm">40kg - 130kg</span></h1>
                            </div>

                        </div>
                        <div>
                            <h1 className="text-gray-400 text-xs text-justify">The content provided on this website is for informational and educational purposes only. It is not intended to be a substitute for medical advice, diagnosis or treatment provided by appropriately qualified health care professionals.</h1>
                        </div>

                    </div>
                </div>

            </div>

        </>
    )
}



export default BodyFatPage