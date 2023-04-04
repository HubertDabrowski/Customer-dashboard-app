import { Link } from "react-router-dom";

const Navbar = () => {
  return (
  <div className="items-stretch h-20 w-full flex flex-row bg-black bg-opacity-60 justify-between">
    <Link className="ml-28 " to="/">
      <button className="text-white pl-20 pr-20 w-full h-full text-xl font-bold hover:bg-white hover:text-black">Home</button>
    </Link>
    <Link to="/show">
      <button className="text-white pl-20 pr-20 w-full h-full text-xl font-bold hover:bg-white hover:text-black">Show</button>
    </Link>
    <Link to="/add">
      <button className="text-white pl-20 pr-20 w-full h-full text-xl font-bold hover:bg-white hover:text-black">Add</button>
    </Link>
    <Link to="/delete">
      <button className="text-white pl-20 pr-20 w-full h-full text-xl font-bold hover:bg-white hover:text-black">Delete</button>
    </Link>
    <Link className="mr-28" to="/edit">
      <button className="text-white pl-20 pr-20 w-full h-full text-xl font-bold hover:bg-white  hover:text-black">Edit</button>
    </Link>
  </div>);
};

export default Navbar;
