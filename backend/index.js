const app = require("./src/app");
require("dotenv").config();

const port = parseInt(process.env.PORT, 10);

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server adress : http://localhost:${port}`);
  }
});
