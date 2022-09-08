import { Router } from 'express';
import { createTasks, deleteTasks, getTask, getTaskCount, getTasks, updateTasks } from '../controllers/tasks.js'; //ejecutamos la funcion Router() que importamos desde express

const router = Router();
/* El código anterior crea un objeto de enrutador y luego usa el objeto de enrutador para crear rutas. */

router.get('/tasks', getTasks);
router.get('/tasks/count', getTaskCount);
router.get('/tasks/:id', getTask);
router.post('/tasks', createTasks);
router.delete('/tasks/:id', deleteTasks);
router.put('/tasks/:id', updateTasks);
export default router;