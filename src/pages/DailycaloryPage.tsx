import { useState } from "react"
import Navbar from '../components/Navbar'
import { BiSolidBabyCarriage } from 'react-icons/bi'
import { FaTransgender } from 'react-icons/fa'
import { GiBodyHeight, GiWeight } from 'react-icons/gi'
import { BsGenderMale, BsGenderFemale, BsGenderAmbiguous, BsFire, BsHeartPulseFill } from 'react-icons/bs'
import { AiOutlineSend } from 'react-icons/ai'
import { fetchDailyCalories } from "../Api"
import { DataDailyCalories } from "../typos"

const DailycaloryPage = () => {

  //--------Form
  const [age, setAge] = useState<number | string | null>()
  const [ageErr, setAgeErr] = useState(false)
  const [gender, setGender] = useState<string | null>()
  const [genderErr, setGenderErr] = useState(false)
  const [height, setHeight] = useState<number | string | null | undefined>()
  const [heightErr, setHeightErr] = useState(false)
  const [weight, setWeight] = useState<number | string | null | undefined>()
  const [weightErr, setWeightErr] = useState(false)
  const [level, setLevel] = useState<string | null>()
  const [levelErr, setLevelErr] = useState(false)
  //--------
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<DataDailyCalories | undefined | null>()
  const [topCal, setTopCal] = useState<number>(100)
  const [bottomCal, setBottomCal] = useState<number>(0)





  const submitForm = () => {
    if (age && gender && height && weight && level) {
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
        case level:
          setLevelErr(true)
          break;
        default:

      }

    }
  }

  const fetchFromApi = async () => {
    setLoading(true)


    try {
      const data = await fetchDailyCalories({
        age: fixValues(80, 0, Number(age)),
        gender: gender,
        height: fixValues(230, 130, Number(height)),
        weight: fixValues(160, 40, Number(weight)),
        activitylevel: level
      })
      if (data === null || data.length === 0) { setError(true) }
      if (data) {
        setLoading(false)
      }
      console.log(data);
      setData(data.data)
      setTopCal(data.data.goals["Extreme weight gain"].calory)
      setBottomCal(data.data.goals["Extreme weight loss"].calory)

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


  return (
    <>
      <div>
        <Navbar id={'dailyCal'} />
      </div>
      <div className='w-full md:w-[80%]  flex  justify-center h-[90vh] mt-5'>
        <div className='flex w-full flex-col'>
          <div className="flex items-center justify-evenly mb-5 flex-col md:flex-row">
            <div className="flex justify-center items-center md:items-end flex-row md:flex-col ">
              <div className="flex lg:items-center lg:justify-center lg:flex-row flex-col md:mb-2 md:mr-0 mr-4 sm:w-auto w-[45vw]">
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

              <div className="flex lg:items-center lg:justify-center lg:flex-row flex-col sm:w-auto w-[45vw]">
                <h1 className='text-gray-300 font-semibold  mr-2'>Gender:</h1>
                <div className={`${genderErr ? 'border-red-500 ' : 'border-transparent'} border border-1 bg-zinc-800 md:md-0 muscle_search flex items-center relative rounded-sm sm:w-[140px] w-full cursor-pointer 
                    py-1`}>
                  <div className="selector pl-6 w-[100%] ">
                    <h1 className="text-gray-400 pl-1">{gender ? gender : 'Set Gender'}</h1>
                  </div>
                  <div className="search_cont absolute top-8 w-[100%] rounded-b-sm overflow-hidden z-10 
                    bg-zinc-800 text-white">
                    <div
                      onClick={() => {
                        setGenderErr(false)
                        setGender('male')
                      }}
                      className="p-2 hover:bg-zinc-600 cursor-pointer flex items-center ">
                      <BsGenderMale />
                      <h1 className="ml-2">Male</h1>
                    </div>
                    <div
                      onClick={() => {
                        setGenderErr(false)
                        setGender('female')
                      }}
                      className="p-2 hover:bg-zinc-600 cursor-pointer flex items-center ">
                      <BsGenderFemale />
                      <h1 className="ml-2">Female</h1>
                    </div>
                    <div
                      onClick={() => {
                        setGenderErr(false)
                        setGender('Other')
                      }}
                      className="p-2 hover:bg-zinc-600 cursor-pointer flex items-center ">
                      <BsGenderAmbiguous />
                      <h1 className="ml-2">Other</h1>
                    </div>


                  </div>
                  <FaTransgender className='absolute left-1' color="white" />
                </div>
              </div>

            </div>

            <div className="flex justify-center items-center md:items-end flex-row md:flex-col">

              <div className="flex lg:items-center lg:justify-center lg:flex-row flex-col mb-2 md:mr-0 mr-4 sm:w-auto w-[45vw]">
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

              <div className="flex lg:items-center lg:justify-center lg:flex-row flex-col sm:w-auto w-[45vw]">
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

            </div>
            <div className="flex justify-center sm:items-end items-center flex-col">

              <div className="flex lg:items-center lg:justify-center lg:flex-row flex-col sm:w-auto w-[35vw]">
                <h1 className='text-gray-300 font-semibold mr-2 mb-2 md:mb-0'>Daily Exhaustion: </h1>
                <div className={`${levelErr ? 'border-red-500 ' : 'border-transparent'} border border-1 bg-zinc-800  md:md-0 muscle_search flex items-center relative rounded-sm sm:w-[140px] w-full cursor-pointer 
                    py-1`}>
                  <div className="selector pl-6 w-[100%] ">
                    <h1 className="text-gray-400 pl-1">{level ? level : 'Exhaustion'} </h1>
                  </div>
                  <div className="search_cont absolute top-8 w-[100%] rounded-b-sm overflow-hidden z-10 
                    bg-zinc-800 text-white">
                    <div
                      onClick={() => {
                        setLevelErr(false)
                        setLevel("level_1")
                      }}
                      className="p-2 hover:bg-zinc-600 cursor-pointer flex items-center ">
                      <div className="h-[10px] w-[10px] bg-gray-400 rounded-full"></div>
                      <h1 className="ml-2">Low</h1>
                    </div>
                    <div
                      onClick={() => {
                        setLevelErr(false)
                        setLevel("level_2")
                      }}
                      className="p-2 hover:bg-zinc-600 cursor-pointer flex items-center ">
                      <div className="h-[10px] w-[10px] bg-green-200 rounded-full"></div>
                      <h1 className="ml-2">Simple</h1>
                    </div>
                    <div
                      onClick={() => {
                        setLevelErr(false)
                        setLevel("level_3")
                      }}
                      className="p-2 hover:bg-zinc-600 cursor-pointer flex items-center ">
                      <div className="h-[10px] w-[10px] bg-green-400 rounded-full"></div>
                      <h1 className="ml-2">Intermediate</h1>
                    </div>
                    <div
                      onClick={() => {
                        setLevelErr(false)
                        setLevel("level_4")
                      }}
                      className="p-2 hover:bg-zinc-600 cursor-pointer flex items-center ">
                      <div className="h-[10px] w-[10px] bg-yellow-400 rounded-full"></div>
                      <h1 className="ml-2">Moderate</h1>
                    </div>
                    <div
                      onClick={() => {
                        setLevelErr(false)
                        setLevel("level_5")
                      }}
                      className="p-2 hover:bg-zinc-600 cursor-pointer flex items-center ">
                      <div className="h-[10px] w-[10px] bg-red-400 rounded-full"></div>
                      <h1 className="ml-2">Difficult</h1>
                    </div>
                    <div
                      onClick={() => {
                        setLevelErr(false)
                        setLevel("level_6")
                      }}
                      className="p-2 hover:bg-zinc-600 cursor-pointer flex items-center ">
                      <div className="h-[10px] w-[10px] bg-red-500 rounded-full"></div>
                      <h1 className="ml-2">Challenging</h1>
                    </div>


                  </div>
                  <BsFire className='absolute left-1' color="white" />
                </div>

              </div>


              <button
                onClick={() => submitForm()}
                className='md:mt-3 bg-blue-400  text-gray-100 font-semibold py-2 flex items-center justify-center mt-7 sm:w-[140px] w-[35vw]'>
                <AiOutlineSend size={20} />
              </button>
            </div>
          </div>
          <div className='ml-2 w-full flex bg-zinc-800 rounded-md items-center justify-center min-h-[450px]'>
            {loading &&

              <div className="loader_mini"></div>
            }
            {
              data ?
                !loading &&
                <div className="flex flex-col w-full h-full p-3">
                  <div>
                    <h1 className="text-blue-400 font-semibold text-2xl ">Daily needs:</h1>
                    <h1 className="text-white font-bold text-3xl">{data.BMR} <span className="font-light">calories</span></h1>
                  </div>
                  {graficCals("Extreme weight gain", data.goals["Extreme weight gain"].calory, topCal, bottomCal)}
                  {graficCals("Mild weight gain", data.goals["Mild weight gain"].calory, topCal, bottomCal)}
                  {graficCals("Weight gain", data.goals["Weight gain"].calory, topCal, bottomCal)}
                  {graficCals("Weight loss", data.goals["Weight loss"].calory, topCal, bottomCal)}
                  {graficCals("Mild weight loss", data.goals["Mild weight loss"].calory, topCal, bottomCal)}
                  {graficCals("Extreme weight loss", data.goals["Extreme weight loss"].calory, topCal, bottomCal)}

                </div>
                :
                !loading &&
                <div className="flex items-center flex-col justify-center w-full h-full p-3 min-h-[300px]">
                  <BsHeartPulseFill color="#bfbfbf" size={40} />
                  <p className="text-zinc-400 text-lg mt-2">Use the menu above to make a search!</p>
                </div>

            }

          </div>
          <div className="flex flex-col justify-between w-full h-full p-3 mt-5">
            <div className="mb-10">
              <h1 className="text-blue-400 font-semibold text-2xl mb-1">Welcome to the Daily Calory Calculator</h1>
              <h1 className="text-gray-400 text-md text-justify">The Daily Calorie Calculator, your reliable resource for calculating the calories required to achieve your health and fitness goals, whether it's maintaining, losing, or gaining weight. Our user-friendly interface considers your daily activity level to provide precise recommendations, helping you embark on a personalized journey towards a healthier you. Take control of your nutrition and make informed choices with this valuable tool.</h1>
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
      </div>
    </>
  )
}



const graficCals = (name: string, cals: number, topCal: number, bottomCal: number) => {

  const getPercentageCals = (cals: number) => {
    const max = topCal - bottomCal
    const avrcals = cals - bottomCal

    return (avrcals * 100) / max
  }


  return (
    <div className="mt-2">
      <h1 className="text-white mb-1">{name}: <span className="text-blue-400 font-semibold">{Math.floor(cals)}</span><span className="font-ligth text-blue-400"> kals</span></h1>
      <div className="h-[20px] w-full relative bg-zinc-600 rounded-sm">
        <div
          style={{ width: getPercentageCals(cals) + "%" }}
          className="absolute h-full rounded-sm bg-blue-400 min-w-[2%]"></div>
      </div>
    </div>
  )
}
export default DailycaloryPage