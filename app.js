const express = require("express");
const app = express();
const port = 3000;

const booksRouter = require("./routes/books");
const authorsRouter = require("./routes/authors");

app.use("/books", booksRouter);
app.use("/authors", authorsRouter);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


module.exports = app;

