import express from 'express';
import tasksRoutes from './routes/users.js';
const app = express(); //antes de generar las rutas para enviar peticion POST debemos ejecutar express.json.

app.use(express.json());
app.use(tasksRoutes);
export default app;