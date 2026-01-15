import logo from '../assets/logo.png';
import meta from '../assets/metalogo.png';

const Logo = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-between items-center bg-white">
      {/* Centered Instagram Logo */}
      <div className="flex-grow flex justify-center items-center">
        <img src={logo} alt="Instagram Logo" className="h-16" />
      </div>

      {/* Meta Branding at Bottom */}
      <div className="mb-4 flex flex-col items-center text-sm text-gray-500">
        <p className="mb-1">from</p>
        <img src={meta} alt="Meta Logo" className="h-6" />
      </div>
    </div>
  );
};

export default Logo;
