import image1 from '../assets/loginpageimage.png';
import instfont from '../assets/instfont.png';
import facebook from '../assets/facebook.png';

const Login = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center  px-4 ">
            <div className="flex flex-col justify-center items-center lg:grid lg:grid-cols-2 w-full max-w-6xl bg-white p-6 md:p-10 gap-6  rounded-lg">
                {/* Left Column – Image (Hidden on small screens) */}
                <div className="hidden lg:flex justify-center items-center w-full">
                    <img
                        src={image1}
                        alt="Preview"
                        className="w-full h-auto object-cover rounded-lg lg:ml-40"
                    />
                </div>

                {/* Right Column – Login Form */}
                <div className="flex flex-col justify-center items-center w-full max-w-xs px-4 md:shadow-lg lg:shadow-none lg:ml-32 ">
                    <div className="w-full  p-4 ">
                        <img src={instfont} alt="instagram font logo" className='mx-auto mb-6 w-[70%] ' />

                        <input type="text" placeholder="Phone number, username, or email" className="w-full border border-gray-300 p-2 mb-3 rounded text-sm bg-gray-50" />
                        <input type="password" placeholder="Password" className="w-full border border-gray-300 p-2 mb-4 rounded text-sm bg-gray-50" />
                        <button className="bg-[#4cb5f9] text-white text-sm p-2 rounded-lg w-full">Log in</button>

                        <div className="flex items-center my-4">
                            <hr className="flex-grow border-t border-gray-300" />
                            <span className="mx-2 text-gray-400 text-sm">OR</span>
                            <hr className="flex-grow border-t border-gray-300" />
                        </div>

                        <div className="flex items-center justify-center gap-2 text-sm mb-4">
                            <img src={facebook} alt="image1" className='w-5'/>
                            <button className="text-[#3579ea] font-bold text-sm">Log in with Facebook</button>
                        </div>

                        <button className="text-sm mb-4 w-full text-center">Forgot password?</button>
                    </div>

                    <div className='flex flex-row justify-center items-center gap-1 my-4 text-sm'>
                        <p>Don't have an account?</p>
                        <button className='text-[#0095f6] font-bold'>Sign up</button>
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
    );
};
export default Login;
