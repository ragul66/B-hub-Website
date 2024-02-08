import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();

  const handleabout = () => {
    navigate('/About')
  }
  return (
    <header className=" bg-textcolor-0 sm:w-full sm:rounded-b-[30px] text-background-0 sm:h-8 sm:text-center lg:bg-header-bg lg:w-[100%] lg:h-16 lg:text-[22px] lg:text-center ">
      <p className="">
        <q>Strive not to be a success, but rather to be of value.</q>
      </p>
      <a className="text-textcolor-0 rounded-lg p-1 bg-background-0 cursor-pointer" onClick={handleabout}>About</a>
    </header>
  );
};

export default Header;
