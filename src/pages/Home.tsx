import Navbar from '../components/Navbar'

const Home = () => {

    return (
        <div className="w-full h-full flex">
            <Navbar id={undefined}/>
            <div className="w-full h-full md:w-[80%] mt-5  ">
                <div className="w-full flex  items-center justify-center mt-3" >
                    <h1 className="text-4xl text-blue-400 font-semibold mb-3">Welcome!</h1>

                </div>
            </div>
        </div>
    )
}

export default Home