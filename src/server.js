const app = require('./app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Aurora Tours API rodando na porta ${port}`);
});
