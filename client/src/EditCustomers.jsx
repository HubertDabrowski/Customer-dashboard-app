import { useState, useEffect } from "react";
import EditForm from "./EditForm";

const EditCustomers = () => {
  const [data, setData] = useState([]);
  const [render, setRender] = useState(true);
  const [editData, setEditData] = useState({
    id: "-",
    name: "-",
    VAT_number: "-",
    address: "-",
    creation_date: "-"
  });
  const [isForm, setIsForm] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/customers");
      const customers = await res.json();
      const array = Object.keys(customers.data)
      .map(key => {
          return customers.data[key];
      });
      setData(array);
      //console.log(data);
    };
    fetchData();
  }, [render]);

  const clickHandle =  (id) => {
    const index = data.findIndex((i) => i.id === id);
    setEditData({
      id:  data[index].id,
      name:  data[index].name, //tu musi byc numer z array
      VAT_number:  data[index].VAT_number,
      address:  data[index].address,
      creation_date: data[index].creation_date
    });
    setIsForm(true);
  };

  const submitHandle = (id) => {
    fetch(`/api/customers/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editData),
    })
      .then((res) => res.json())
      .then((data) => setData(data));
    setRender((prev) => !prev);
    setIsForm(false);
    return false;
  };

  const renderArr =data.length > 0 && data.map((customer) => {
   return (
      
      <div key={customer.id} className="grid grid-cols-9 gap-4">
        <span className="col-span-2 pt-1 pb-1">{customer.name}</span>
        <span className="col-span-2 pt-1 pb-1">{customer.VAT_number}</span>
        <span className="col-span-2 pt-1 pb-1">{customer.creation_date}</span>
        <span className="col-span-2 pt-1 pb-1">{customer.address}</span>
        <button
          key={customer.id}
          onClick={() => {
            console.log("my_id " + customer.id);
            clickHandle(customer.id);
          }}
          className="bg-yellow-400 mb-1 mt-1 pl-1 pr-1 pb-1 w-2/4 rounded-md font-bold"
        >
          edit
        </button>
      </div>
    );
  });

  return (
    <>
      {!isForm ? (
        <div className="bg-white mt-10 p-10 pl-20 ml-52 mr-52 rounded-2xl bg-opacity-80 shadow-2xl">
          {data.length > 0 ? (
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
      ) : (
        <EditForm
          handler={submitHandle}
          data={editData}
          setData={setEditData}
        />
      )}
    </>
  );
};

export default EditCustomers;
