const { PrismaClient } = require("@prisma/client");
const express = require("express");
const cors = require("cors");

const prisma = new PrismaClient();
const app = express();

app.use(cors());

app.get("/posts", async (req, res) => {
  try {
    const data = await prisma.user.findMany({
      include: {
        posts: {
            include:{
                comments:true
            }
        },
        comments: true, // load comments made by the user
      },
    });

    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching data");
  }
});

app.listen(3001, () => {
  console.log("Server is running");
});
