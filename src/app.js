const express = require("express");
const userRouter = require("./router/userRouter.js");
const productRouter = require("./router/productRouter.js");
const port = 3000;
const app = express();
app.get("/botao", (req, res) => {
  res.send(`
      <html>
        <head>
          <title>Exemplo de cliente servidor</title>
          <script>
            function redirecionarParaProduct() {
              window.location.href = "/api/product";
            }
          </script>
          <script>
            function redirecionarParaUser() {
              window.location.href = "/api/user";
            }
          </script>
        </head>
        <body>
          <h1>Exemplo cliente servidor</h1>
          <!-- Usando JavaScript para redirecionar para a página de destino -->
          <button onclick="redirecionarParaProduct()">produto</button>
          <button onclick="redirecionarParaUser()">usuario</button>
        </body>
      </html>
    `);
});
app.use("/api", userRouter);

app.use("/api", productRouter);

app.listen(port, () => {
  console.log("servidor online");
});
