import express from 'express';
import router from './routes/user';
import { PORT } from './defaults';
import bodyParser from 'body-parser';
import { errorMiddleware } from './middlewares/error.middleware';
import { successMiddleware } from './middlewares/success.middleware';

const app = express();

app.use(bodyParser.json());
app.use(express.json());

app.use(successMiddleware);

app.use('/api/users', router)

app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
});

