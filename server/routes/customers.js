import express from "express";
import customers from "../data/customers.json" assert { type: "json" };

const router = express.Router();
let data = JSON.parse(JSON.stringify(customers.array));

router.get("/customers", (req, res) => {
  res.status(200).json({ success: true, data });
});

router.delete("/customers/:id", (req, res) => {
  const { id } = req.params;
  const newData = data.filter((customer) => customer.id !== id);
  data = newData;
  res.status(200).json({ success: true, data: newData });
});

router.post("/customers", (req, res) => {
  const reqBody = req.body;
  console.log(req.body);

  if (!reqBody) {
    return res.status(400).json({ success: false, msg: "error invalid data" });
  }
  const currentDate = new Date();
  const date = ("0" + currentDate.getDate()).slice(-2);
  const month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
  const year = currentDate.getFullYear();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  console.log(Number(data[data.length - 1].id) + 1);
  const newData = [
    ...data,
    {
      id: `${Number(data[data.length - 1].id) + 1}`,
      ...reqBody,
      creation_date: `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`,
    },
  ];
  console.log(newData[newData.length - 1]);
  data = newData;
  res.status(200).json({ success: true, data: newData });
});

router.put("/customers/:id", (req, res) => {
  const { id } = req.params;
  const reqBody = req.body;
  console.log(reqBody);

  const customerToUpdate = data.find(
    (customer) => Number(customer.id) === Number(id)
  );

  if (!customerToUpdate) {
    return res
      .status(400)
      .json({ success: false, msg: "error customer not found" });
  }

  const newData = data.map((customer) => {
    if (customer.id === id) {
      customer = reqBody;
    }
    return customer;
  });

  data = newData;
  res.status(200).json({ success: true, data: newData });
});

export default router;
