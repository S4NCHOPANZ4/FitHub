import { AiFillGithub, AiFillLinkedin, AiFillMail, AiFillWallet } from "react-icons/ai"
import Icon from '../assets/Icon_md.svg'


const Footer = () => {

    const goTo = (link: string) => {
        window.open(link, '_blank');
    }

    function sendMail() {
        const email = 'buitr4gocontact@gmail.com';
        const subject = 'Hi Juan!';
        const body = 'Your Message...';

        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.open(mailtoLink, '_blank');
    }


    return (
        <div className=' w-full bg-zinc-800 flex flex-col item-center justify-center py-5 mt-10'>
            <div className="flex w-full justify-between px-5 md:flex-row flex-col">
                <div>
                    <div
                        className="flex justify-evenly items-center">
                        <img src={Icon} alt="" className="w-[60px]" />
                        <h1
                            onClick={() => goTo('https://www.linkedin.com/in/juan-d-buitrago/')}
                            className="text-center text-zinc-500 cursor-pointer">
                            <AiFillLinkedin size={35} />
                        </h1>
                        <h1
                            onClick={() => goTo('https://github.com/S4NCHOPANZ4')}
                            className="text-center text-zinc-500 cursor-pointer">
                            <AiFillGithub size={35} />
                        </h1>
                        <h1
                            onClick={() => goTo('https://portfolio5-09.vercel.app')}
                            className="text-center text-zinc-500 cursor-pointer">
                            <AiFillWallet size={35} />
                        </h1>
                        <h1
                            onClick={() => sendMail()}
                            className="text-center text-zinc-500 cursor-pointer">
                            <AiFillMail size={35} />
                        </h1>

                    </div>
                    <div
                        className="flex justify-center mb-5">
                        <h1 className="text-zinc-400">Crafted with love by Juan Buitrago {'<3'}</h1>
                    </div>
                </div>
                <div className="w-full md:w-[40%]">
                    <h1 className="text-gray-400 text-xs text-justify md:text-end ">The content provided on this website is for informational and educational purposes only. It is not intended to be a substitute for medical advice, diagnosis or treatment provided by appropriately qualified health care professionals.</h1>
                </div>
            </div>



        </div>
    )
}

export default Footer