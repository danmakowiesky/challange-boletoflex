import app from './app';
import 'dotenv/config';

const port = `${process.env.PORT_SERVER}`;

app.listen(port, () => {
  console.log('⚡️ Server Running');
});
