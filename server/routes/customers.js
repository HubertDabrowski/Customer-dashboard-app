import express from "express";
import customers from "../data/customers.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const router = express.Router();
//let data  = customers//= JSON.parse(JSON.stringify(customers.array));

router.get("/customers", async (req, res) => {
  try {
    const data = await prisma.clients.findMany({});
    data.forEach((person) => {
      let h, min, sec;
      if (person.creation_date.getHours() > 9) {
        h = person.creation_date.getHours().toString();
      } else {
        h = "0" + person.creation_date.getHours().toString();
      }


      if (person.creation_date.getMinutes() > 9) {
        min = person.creation_date.getMinutes().toString();
      } else {
        min = "0" + person.creation_date.getMinutes().toString();
      }

      if (person.creation_date.getSeconds() > 9) {
        sec = person.creation_date.getSeconds().toString();
      } else {
        sec = "0" + person.creation_date.getSeconds().toString();
      }

      person.creation_date =
        person.creation_date.getDate().toString() +
        "." +
        person.creation_date.getMonth() +
        "." +
        person.creation_date.getFullYear().toString() +
        " " +
        h +
        ":" +
        min +
        ":" +
        sec;
    });
    res.status(200).json({ success: true, data });
  } catch (err) {
    console.log(err);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
});

router.delete("/customers/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const newData = await prisma.clients.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.status(200).json({ success: true, data: newData });
  } catch (err) {
    console.log(err);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
});

router.post("/customers", async (req, res) => {
  try {
    //const data = await prisma.clients.findMany({});
    const reqBody = req.body;
    console.log(req.body);
    if (!reqBody) {
      return res
        .status(400)
        .json({ success: false, msg: "error invalid data" });
    }

    const newData = await prisma.clients.create({
      data: reqBody,
    });

    res.status(200).json({ success: true, data: newData });
  } catch (err) {
    console.log(err);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
});

router.put("/customers/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const reqBody = req.body;
    console.log(req);
    const newData = await prisma.clients.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name: reqBody.name,
        VAT_number: reqBody.VAT_number,
        address: reqBody.address,
      },
    });

    if (!newData) {
      return res
        .status(400)
        .json({ success: false, msg: "error customer not found" });
    }

    res.status(200).json({ success: true, data: newData });
  } catch (err) {
    console.log(err);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
});

export default router;
