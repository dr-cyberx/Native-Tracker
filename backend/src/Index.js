import "./models/Users";
import Express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import authRoute from "./routes/authRoutes";
import requireAuth from "./middlewares/requireAuth";
import trackRoute from "./routes/trackRoute";

const app = Express();

app.use(
  cors({
    origin: "*", //we can also put * to all any origin to access data
  })
);
app.use(bodyParser.json());
app.use(authRoute);
app.use(trackRoute);

const mongoUri = `mongodb+srv://admin:admin@cluster0.bmlt0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const Server = async () => {
  await mongoose
    .connect(mongoUri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    })
    .then(() =>
      app.listen(4000, () => {
        console.log(`The server is up at http://localhost:${4000}`);
      })
    );

  app.get("/", requireAuth, (req, res) => {
    res.send(`your Email : ${req.user.email}`);
  });
};

Server();
