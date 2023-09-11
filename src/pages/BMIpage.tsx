import { useState } from 'react'
import Navbar from '../components/Navbar'
import { BiSolidBabyCarriage } from 'react-icons/bi'
import { GiBodyHeight, GiWeight } from 'react-icons/gi'
import { BmiFetch } from '../Api'
//body
import Body from '../assets/body/body-d.svg'
import BodyM from '../assets/body/body-m.svg'
import BodyH from '../assets/body/body-h.svg'
import BodyL from '../assets/body/body-l.svg'
import { BMIDataObj } from '../typos'
import { AiOutlineSend } from 'react-icons/ai'
import { BsHeartPulseFill } from 'react-icons/bs'

const BMIpage = () => {


    const [age, setAge] = useState<number | string | null>()
    const [ageErr, setAgeErr] = useState(false)
    const [height, setHeight] = useState<number | string | null | undefined>()
    const [heightErr, setHeightErr] = useState(false)
    const [weight, setWeight] = useState<number | string | null | undefined>()
    const [weightErr, setWeightErr] = useState(false)


    const [data, setData] = useState<BMIDataObj | undefined | null>()
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)


    const submitForm = () => {

        if (age && height && weight) {
            fetchBMI()
        } else {
            switch (null || undefined) {
                case age:
                    setAgeErr(true)
                    break;
                case height:
                    setHeightErr(true)
                    break
                case weight:
                    setWeightErr(true)
                    break

                default:

            }

        }
    }

    const fetchBMI = async () => {
        try {
            const data = await BmiFetch({
                age: fixValues(80, 0, Number(age))?.toString(),
                height: fixValues(230, 130, Number(height))?.toString(),
                weight: fixValues(160, 40, Number(weight))?.toString(),
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
        }
    }
    // Severe Thinness
    // Moderate Thinness
    // Normal
    // Overweight
    // Obese Class I
    // Obese Class II
    // Obese Class III
    return (
        <>
            <div>
                <Navbar id={'a'} />
            </div>
            <div className='w-full md:w-[80%]  flex flex-col  justify-center min-h-[90vh] mt-5 '>
                {/* SearchBar */}
                <div className='flex justify-evenly items-center h-[100px] mb-10'>
                    <div className="flex lg:items-center lg:justify-center lg:flex-row flex-col  mr-2 sm:w-auto w-[45vw]">
                        <h1 className='text-gray-300 font-semibold mr-2 '>Age:</h1>
                        <div className={`border-transparent  border border-1 search-bar  md:md-0 flex items-center relative rounded-sm sm:w-[140px] w-[full] sm:pr-1 pr-0
                         bg-zinc-800`}>
                            <input
                                onChange={(e) => {
                                    setAge(e.target.value)
                                }}
                                min="1" max="120"
                                className="text-white focus:outline-none pl-6  w-[100%] bg-transparent py-1 "
                                type="number" placeholder="Age" />
                            <BiSolidBabyCarriage className='absolute left-1' color="white" />
                        </div>
                    </div>
                    <div className="flex lg:items-center lg:justify-center lg:flex-row flex-col  mr-2 sm:w-auto w-[45vw]">
                        <h1 className='text-gray-300 font-semibold mr-2 '>Weight:</h1>
                        <div className={`border-transparent  border border-1 search-bar  md:md-0 flex items-center relative rounded-sm sm:w-[140px] w-[full] sm:pr-1 pr-0
                         bg-zinc-800`}>
                            <input
                                onChange={(e) => {
                                    setWeight(e.target.value)
                                }}
                                min="1" max="120"
                                className="text-white focus:outline-none pl-6  w-[100%] bg-transparent py-1 "
                                type="number" placeholder="Weight" />
                            <GiWeight className='absolute left-1' color="white" />
                        </div>
                    </div>
                    <div className="flex lg:items-center lg:justify-center lg:flex-row flex-col mr-2 sm:w-auto w-[45vw]">
                        <h1 className='text-gray-300 font-semibold mr-2 '>Height:</h1>
                        <div className={`border-transparent  border border-1 search-bar  md:md-0 flex items-center relative rounded-sm sm:w-[140px] w-[full] sm:pr-1 pr-0
                         bg-zinc-800`}>
                            <input
                                onChange={(e) => {
                                    setHeight(e.target.value)
                                }}
                                min="1" max="120"
                                className="text-white focus:outline-none pl-6  w-[100%] bg-transparent py-1 "
                                type="number" placeholder="Height" />
                            <GiBodyHeight className='absolute left-1' color="white" />
                        </div>
                    </div>
                    <button
                        onClick={() => submitForm()}
                        className='min-w-[100px] h-[40px]  bg-blue-400 mr-2 text-gray-100 font-semibold py-2 flex items-center justify-center  sm:w-[140px] w-[35vw]'>
                        <AiOutlineSend size={20} />
                    </button>
                </div>
                <div className='ml-2 w-full flex bg-zinc-800 rounded-md items-center justify-center min-h-[450px]'>
                    {loading &&

                        <div className="loader_mini"></div>
                    }
                    {
                        data ?
                            !loading &&
                            <div className="flex flex-col w-full h-full p-3 min-h-[300px]">
                              
                              <div>
                                    <img className='h-[400px]' src={Body}/>
                                </div>
                                <div className='flex  flex-col justify-center items-center'>
                                    <BsHeartPulseFill color="#bfbfbf" size={40} />
                                    <p className="text-zinc-400 text-lg mt-2">Use the menu above to make a search!</p>
                                </div>
                            </div>
                            :
                            !loading &&
                            <div className="flex items-center  justify-evenly text-zinc-400 w-full h-full p-3 min-h-[300px]">

                                <div>
                                    <img className='h-[400px]' src={Body}/>
                                </div>
                                <div className='flex  flex-col justify-center items-center'>
                                    <BsHeartPulseFill color="#bfbfbf" size={40} />
                                    <p className="text-zinc-400 text-lg mt-2">Use the menu above to make a search!</p>
                                </div>
                            </div>

                    }

                </div>
                <div className="flex flex-col justify-between w-full h-full p-3 mt-5">
            <div className="mb-10">
              <h1 className="text-blue-400 font-semibold text-2xl mb-1">Welcome to the BMI Calculator</h1>
              <h1 className="text-gray-400 text-md text-justify">The BMI Calculator is here to assist you in understanding your current health status. With our easy-to-use interface, simply input your height and weight, and let us calculate your BMI accurately. This essential tool offers insights into whether you are underweight, at a healthy weight, overweight, or obese, helping you make informed decisions about your health and well-being.</h1>
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
            </div>
            <div>
              <h1 className="text-gray-400 text-xs text-justify">The content provided on this website is for informational and educational purposes only. It is not intended to be a substitute for medical advice, diagnosis or treatment provided by appropriately qualified health care professionals.</h1>
            </div>

          </div>
            </div>
            {/* <img src={BodyL} alt="" />
            <img src={Body} alt="" />
            <img src={BodyM} alt="" />
            <img src={BodyH} alt="" /> */}

        </>
    )
}

export default BMIpage