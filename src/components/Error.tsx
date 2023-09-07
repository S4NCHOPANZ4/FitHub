import { BiErrorCircle } from "react-icons/bi"


interface Props {
    errorMessage?: string | null | undefined;
}


const Error = ({errorMessage} : Props) => {
  return (
    <div className='w-full bg-[#fe6d6d80] flex items-center justify-center flex-col text-white font-semibold py-2 rounded-md'>
        <BiErrorCircle size={40}/>
        <h1>{errorMessage ? errorMessage : "Something went wrong"}</h1>
    </div>
  )
}

export default Error