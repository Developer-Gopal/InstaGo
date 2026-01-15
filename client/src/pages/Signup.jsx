import instfont from '../assets/instfont.png';
import facebook from '../assets/square facebook logo.png';
import playstore from '../assets/playstore.png';
import appstore from '../assets/app store.png';

const Signup = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center ">
                <div className="grid grid-cols-1 w-full max-w-sm  py-3 px-4 ">
                    <div>
                        <div className='flex flex-col justify-center items-center md:border border-gray-300 px-10 md:p-10 '>
                            <img src={instfont} alt="Instagram" className='w-46 pt-0' />
                            <p className='text-center text-gray-500 font-semibold'>Sign up to see photos and videos from your friends.</p>
                            <button className='flex flex-row justify-center items-center bg-[#0095f6] text-white text-sm font-semibold  rounded-lg w-full  mt-4'>
                                <img src={facebook} alt="" className='w-8' />
                                <p>Log in with Facebook</p>
                            </button>

                            <div className="flex items-center w-full my-4">
                                <hr className="flex-grow border-t border-gray-300" />
                                <span className="mx-2 text-gray-500 text-sm">OR</span>
                                <hr className="flex-grow border-t border-gray-300" />
                            </div>

                            <div className='space-y-2'>

                                <input type="text" placeholder='Mobile Number or Email' className='border border-gray-300 bg-gray-50 w-full p-2 text-xs rounded' />
                                <input type="text" placeholder='Password' className='border border-gray-300 bg-gray-50 w-full p-2 text-xs rounded' />
                                <input type="text" placeholder='Full Name' className='border border-gray-300 bg-gray-50 w-full p-2 text-xs rounded' />
                                <input type="text" placeholder='Username' className='border border-gray-300 bg-gray-50 w-full p-2 text-xs rounded' />

                            </div>

                            <p className='text-[12px] my-4 text-gray-400 text-center'>
                                People who use our service may have uploaded your contact information to Instagram.<a href="" className='text-[#4150f7]'> Learn More</a>
                            </p>

                            <p className='text-[12px] text-gray-400 text-center'>
                                By signing up, you agree to our <a href="" className='text-[#4150f7]'>Terms</a> , <a href="" className='text-[#4150f7]'>Privacy Policy</a>and <a href="" className='text-[#4150f7]'>Cookies policy</a> .
                            </p>

                            <button className='flex flex-row justify-center items-center bg-[#0095f6] text-white text-sm font-semibold p-2 rounded-lg w-full  mt-4'>Sign up</button>

                        </div>

                        <div className='flex flex-col justify-center items-center md:border border-gray-300 md:my-2 p-4 w-full '>
                            <p className='text-sm'>
                                Have an account?
                            </p>

                            <a href="" className='text-[#0095f6] font-bold text-sm'>Log in</a>
                        </div>
                        <p className='text-center mt-4'>Get the app.</p>
                        <div className='flex flex-row justify-center items-center mt-4'>

                            <a href=""><img src={playstore} alt="Play Store" className='h-13' /></a>
                            <a href=""><img src={appstore} alt="App Store" className='h-12' /></a>
                        </div>
                    </div>
                </div>
                <ol className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-gray-500 text-center my-12">
                    <li className="cursor-pointer hover:underline">Meta</li>
                    <li className="cursor-pointer hover:underline">About</li>
                    <li className="cursor-pointer hover:underline">Blog</li>
                    <li className="cursor-pointer hover:underline">Jobs</li>
                    <li className="cursor-pointer hover:underline">Help</li>
                    <li className="cursor-pointer hover:underline">API</li>
                    <li className="cursor-pointer hover:underline">Privacy</li>
                    <li className="cursor-pointer hover:underline">Terms</li>
                    <li className="cursor-pointer hover:underline">Locations</li>
                    <li className="cursor-pointer hover:underline">Instagram Lite</li>
                    <li className="cursor-pointer hover:underline">Threads</li>
                    <li className="cursor-pointer hover:underline">Contact Uploading & Non-Users</li>
                    <li className="cursor-pointer hover:underline">Meta Verified</li>

                    <li className="cursor-pointer hover:underline w-full text-center mt-2">
                        © 2023 Instagram from Meta
                    </li>
                </ol>

            </div>
        </>

    )
}

export default Signup;