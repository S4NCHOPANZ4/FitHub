import { useState } from 'react'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'


interface Interface {
  data: string,
  bmi: number
}


const BMI_graphic = ({ data, bmi }: Interface) => {


  const [valueArr, setValueArr] = useState(data.split(' '))
  const [valueMin, setValueMin] = useState(valueArr[0])
  const [valueMax, setValueMax] = useState(valueArr[valueArr.length - 1])
  const max = 35;
  const min = 5;


  const innerBarWidth = (val: number) => {
        
      return ((val - 5)*100)/44

      
  }
  const userRecordBar = () => {

    let fix = 0

    if(bmi >= Number(valueMax)){
      fix = 8.5
    }else if(bmi <= Number(valueMin)){
      fix = -5
    }
    else{
      fix = 5
    }

    const percentage = ((bmi + fix)*100)/44
    
    if(percentage > 95){return 95}
    else if(percentage < 5) return 5
    return percentage
  }

  return (
    <div>
      <div className='h-[10px] w-[300px] bg-rose-500 flex justify-start relative'>
        <div 
         style={{width: innerBarWidth(Number(valueMin))+"%"}} className='bg-yellow-200 '></div>
        <div 
        style={{width: innerBarWidth(Number(valueMax))+"%"}}
        className='h-full  bg-emerald-400 relative'>

          <div className='text-zinc-300 absolute -right-0 -top-8 flex flex-col justify-center items-center'>
            <IoMdArrowDropdown  className='text-sm absolute top-5' size={20} />
            <p className='text-sm absolute top-2'>{valueMax}</p>
          </div>

          <div className='text-zinc-300 absolute -left-0 -top-8 flex flex-col justify-center items-center'>
            <IoMdArrowDropdown  className='text-sm absolute top-5' size={20} />
            <p className='text-sm absolute top-2'>{valueMin}</p>
          </div>
        </div>
        <div 
        style={{width: userRecordBar()+"%"}}
        className='bg-transparent  h-full absolute z-10 left-0'>
            <div className='text-zinc-100 absolute -right-0 top-3 flex flex-col justify-center items-center'>
              <IoMdArrowDropup className='text-sm absolute rigth-0 -top-2' size={20} />
              <p className='text-sm absolute rigth-0 top-1'>{bmi}</p>
            </div>
          </div>
      </div>

    </div>
  )
}

export default BMI_graphic