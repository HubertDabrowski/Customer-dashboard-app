import { useState, useEffect } from "react";

const ShowCustomers = () => {
  const [data, setData] = useState({success: false, data:[]});

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/customers");
      const customers = await res.json();
      setData(await customers);
    };
    fetchData();
  }, []);

  const renderArr = data.data.map(customer => {
    return(<div key={customer.VAT_number} className="grid grid-cols-4 gap-4">
      <span className="pt-1 pb-1">{customer.name}</span>
      <span className="pt-1 pb-1">{customer.VAT_number}</span>
      <span className="pt-1 pb-1">{customer.creation_date}</span>
      <span className="pt-1 pb-1">{customer.address}</span>
    </div>);
  });

  return (
    <div className="bg-white mt-10 p-10 pl-20 ml-52 mr-52 rounded-2xl bg-opacity-80 shadow-2xl">
      {data.data.length > 0 ? (
        <>
        <div className="pb-2 grid grid-cols-4 gap-4">
          <p className="font-bold">Name:</p>
          <p className="font-bold">VAT:</p>
          <p className="font-bold">Creation date:</p>
          <p className="font-bold">Address:</p>
        </div>
        {renderArr}
        </>
      ) : (
        <p className="flex justify-center font-bold">NO CUSTOMERS RIGHT NOW</p>
      )}
    </div>
  );
};

export default ShowCustomers;
