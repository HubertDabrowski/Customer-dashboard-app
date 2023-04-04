import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="grid h-screen place-items-center">
      <div className="h-600 bg-white bg-opacity-80 rounded-xl grid grid-cols-1 gap-8 p-10 align-middle ">
        <Link to="/show">
          <button className="w-80 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Show Customer
          </button>
        </Link>
        <Link to="/add">
          <button className="w-80 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Add Customer
          </button>
        </Link>
        <Link to="/delete">
          <button className="w-80 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Delete Customer
          </button>
        </Link>
        <Link to="/edit">
          <button className="w-80 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Edit Customer
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
