import { useState, useEffect } from "react";

const DeleteCustomers = () => {
  const [data, setData] = useState({ success: false, data: [] });
  const [render, setRender] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/customers");
      const customers = await res.json();
      setData(await customers);
    };
    fetchData();
  }, [render]);

  const clickHandle = async(id) => {
    console.log(id);
    await fetch(`/api/customers/${id}`, {
      method: "DELETE",
    });
    setRender((prev) => !prev);
  };

  const renderArr =data.data.length>0 && data.data.map((customer) => {
    return (
      <div key={customer.VAT_number} className="grid grid-cols-9 gap-4">
        <span className="col-span-2 pt-1 pb-1">{customer.name}</span>
        <span className="col-span-2 pt-1 pb-1">{customer.VAT_number}</span>
        <span className="col-span-2 pt-1 pb-1">{customer.creation_date}</span>
        <span className="col-span-2 pt-1 pb-1">{customer.address}</span>
        <button
          key={customer.id}
          onClick={() => {
            clickHandle(customer.id);
          }}
          className="bg-red-600 mb-1 mt-1 pl-1 pr-1 pb-1 w-1/4 rounded-md font-bold"
        >
          x
        </button>
      </div>
    );
  });

  return (
    <div className="bg-white mt-10 p-10 pl-20 ml-52 mr-52 rounded-2xl bg-opacity-80 shadow-2xl">
      {data.data.length > 0 ? (
        <>
          <div className="pb-2 grid grid-cols-9 gap-4">
            <p className="col-span-2 font-bold">Name:</p>
            <p className="col-span-2 font-bold">VAT:</p>
            <p className="col-span-2 font-bold">Creation date:</p>
            <p className="col-span-2 font-bold">Address:</p>
          </div>
          {renderArr}
        </>
      ) : (
        <p className="flex justify-center font-bold">
          NO CUSTOMERS RIGHT NOW
        </p>
      )}
    </div>
  );
};

export default DeleteCustomers;
