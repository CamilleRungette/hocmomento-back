const { connectDb } = require("./src/services/mongoose");
const showRoutes = require("./src/routes/show");
const actionRoutes = require("./src/routes/action");
const eventRoutes = require("./src/routes/event");
const adminRoutes = require("./src/routes/admin");
const messageRoutes = require("./src/routes/message");
const partnersRoutes = require("./src/routes/partners");

const express = require("express");
const app = express();
const port = process.env.port || 3000;

connectDb().catch((e) => console.log(e));

app.use(express.json());
app.use("/shows", showRoutes);
app.use("/actions", actionRoutes);
app.use("/events", eventRoutes);
app.use("/admin", adminRoutes);
app.use("/message", messageRoutes);
app.use("/partners", partnersRoutes);

app.listen(port, () => {
  console.log(`Server running at: ${port}`);
});
