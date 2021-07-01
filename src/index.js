const express = require('express');
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const { validateUser } = require("./auth/validate-user");

// Constants
const HOST = process.env.SERVER_URL;
const PORT = process.env.SERVER_PORT;

// App
const app = express();
const apiRouter = express.Router();

app.use(cors({ origin: true }));

app.use("/api", apiRouter);
apiRouter.use("/validateUser", validateUser);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
