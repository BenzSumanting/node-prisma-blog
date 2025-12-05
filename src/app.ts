import express from 'express';
import router from './routes/user';

const app = express();

app.use('/api/users', router)

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
});

