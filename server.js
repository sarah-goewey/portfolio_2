const express = require("express");
const app = express();
app.use(express.static("static"));

app.get("/", (req, res) => {
  res.send(
    `
    <html>
      <h1>Sarah Goewey</h1>
      <h2>backup-cash-register.onrender.com</h2>
    </html>
    `
  );
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
