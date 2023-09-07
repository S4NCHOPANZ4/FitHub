import { useState } from "react"
import Navbar from '../components/Navbar'
import { BiSolidBabyCarriage } from 'react-icons/bi'
import { FaTransgender } from 'react-icons/fa'
import { GiBodyHeight, GiWeight } from 'react-icons/gi'
import { MdHardware } from 'react-icons/md'
import { BsGenderMale, BsGenderFemale, BsGenderAmbiguous } from 'react-icons/bs'
import { AiOutlineSend } from 'react-icons/ai'

const DailycaloryPage = () => {

  const [age, setAge] = useState<number| string| null>()
  const [gender, setGender] = useState<string | null>()
  const [height, setHeight] = useState<number| string| null>('')
  const [weight, setWeight] = useState<number| string| null>('')
  const [level, setLevel] = useState('')
  
  return (
    <>
      <div>
        <Navbar id={'a'} />
      </div>
      <div className='w-full md:w-[80%]  flex items-center justify-center h-[70vh]'>
        <div className='flex w-full'>
          <div>
            <h1 className='text-gray-300 font-semibold mb-1'>Age:</h1>
            <div 
            className=" search-bar mb-2 md:md-0 flex items-center relative rounded-sm sm:w-[140px] w-[full] sm:pr-1 pr-0
               bg-zinc-800 ">
              <input
                value={age? age: ''}
                onChange={(e)=> setAge(e.target.value)}
                className="text-white focus:outline-none pl-6  w-[100%] bg-transparent py-1 "
                type="number" placeholder="Age" />
              <BiSolidBabyCarriage className='absolute left-1' color="white" />
            </div>
            <h1 className='text-gray-300 font-semibold mb-1'>Gender:</h1>
            <div className="bg-zinc-800 mb-2 md:md-0 muscle_search flex items-center relative rounded-sm sm:w-[140px] w-full cursor-pointer 
                    py-1">
              <div className="selector pl-6 w-[100%] ">
                <h1 className="text-gray-400 pl-1">{gender? gender: 'Set Complexity'}</h1>
              </div>
              <div className="search_cont absolute top-8 w-[100%] rounded-b-sm overflow-hidden z-10 
                    bg-zinc-800 text-white">
                <div
                  onClick={() => setGender('Male')}
                  className="p-2 hover:bg-zinc-600 cursor-pointer flex items-center ">
                  <BsGenderMale />
                  <h1 className="ml-2">Male</h1>
                </div>
                <div
                  onClick={() => setGender('Female')}
                  className="p-2 hover:bg-zinc-600 cursor-pointer flex items-center ">
                  <BsGenderFemale />
                  <h1 className="ml-2">Female</h1>
                </div>
                <div
                  onClick={() => setGender('Other')}
                  className="p-2 hover:bg-zinc-600 cursor-pointer flex items-center ">
                  <BsGenderAmbiguous />
                  <h1 className="ml-2">Other</h1>
                </div>


              </div>
              <FaTransgender className='absolute left-1' color="white" />
            </div>
            <h1 className='text-gray-300 font-semibold mb-1'>Height:</h1>
            <div className="search-bar mb-2 md:md-0 flex items-center relative rounded-sm sm:w-[140px] w-[full] sm:pr-1 pr-0
               bg-zinc-800 ">
              <input
                value={height? height : ''}
                onChange={(e)=> setHeight(e.target.value)}
                className="text-white focus:outline-none pl-6  w-[100%] bg-transparent py-1"
                type="number" placeholder="Height" />
              <GiBodyHeight className='absolute left-1' color="white" />
              <span className='font-light text-white'>cm</span>
            </div>
            <h1 className='text-gray-300 font-semibold mb-1'>Weight</h1>
            <div className="search-bar mb-2 md:md-0 flex items-center relative rounded-sm sm:w-[140px] w-[full] sm:pr-1 pr-0
               bg-zinc-800 ">
              <input
                value={weight? weight : ''}
                onChange={(e)=> setWeight(e.target.value)}
                className="text-white focus:outline-none pl-6  w-[100%] bg-transparent py-1"
                type="number" placeholder="Weight" />
              <GiWeight className='absolute left-1' color="white" />
              <span className='font-light text-white'>kg</span>

            </div>
            <h1 className='text-gray-300 font-semibold mb-1'>Level of Exhaustion: </h1>
            <div className="bg-zinc-800 mb-2 md:md-0 muscle_search flex items-center relative rounded-sm sm:w-[140px] w-full cursor-pointer 
                    py-1">
              <div className="selector pl-6 w-[100%] ">
                <h1 className="text-gray-400 pl-1">Level </h1>
              </div>
              <div className="search_cont absolute top-8 w-[100%] rounded-b-sm overflow-hidden z-10 
                    bg-zinc-800 text-white">
                <div
                  className="p-2 hover:bg-zinc-600 cursor-pointer flex items-center ">
                  <div className="h-[10px] w-[10px] bg-gray-400 rounded-full"></div>
                  <h1 className="ml-2">Level 1</h1>
                </div>
                <div
                  className="p-2 hover:bg-zinc-600 cursor-pointer flex items-center ">
                  <div className="h-[10px] w-[10px] bg-green-200 rounded-full"></div>
                  <h1 className="ml-2">Level 2</h1>
                </div>
                <div
                  className="p-2 hover:bg-zinc-600 cursor-pointer flex items-center ">
                  <div className="h-[10px] w-[10px] bg-green-400 rounded-full"></div>
                  <h1 className="ml-2">Level 3</h1>
                </div>
                <div
                  className="p-2 hover:bg-zinc-600 cursor-pointer flex items-center ">
                  <div className="h-[10px] w-[10px] bg-yellow-400 rounded-full"></div>
                  <h1 className="ml-2">Level 4</h1>
                </div>
                <div
                  className="p-2 hover:bg-zinc-600 cursor-pointer flex items-center ">
                  <div className="h-[10px] w-[10px] bg-red-400 rounded-full"></div>
                  <h1 className="ml-2">Level 5</h1>
                </div>
                <div
                  className="p-2 hover:bg-zinc-600 cursor-pointer flex items-center ">
                  <div className="h-[10px] w-[10px] bg-red-500 rounded-full"></div>
                  <h1 className="ml-2">Level 6</h1>
                </div>


              </div>
              <FaTransgender className='absolute left-1' color="white" />
            </div>
            <button className='mt-3 bg-blue-400 w-[140px] text-gray-100 font-semibold py-2 flex items-center justify-center'>
              <AiOutlineSend size={20}/>
            </button>
          </div>
          <div className='ml-2 w-[80%] flex bg-zinc-800 rounded-md items-center justify-center'>
              zoisfj
          </div>
        </div>
      </div>
    </>
  )
}

export default DailycaloryPage