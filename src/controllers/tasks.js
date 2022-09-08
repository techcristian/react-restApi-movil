import {connect} from '../database.js';


export const getTasks = async (req,res) =>{
  const connection = await connect()
 const [rows]=await connection.query('SELECT * FROM tasks')
  res.json(rows)
  
}
export const getTask = async (req,res) =>{
  const connection = await connect()
  const [rows] = await connection.query('SELECT * FROM tasks WHERE id=?',[req.params.id])
  
 res.json(rows[0])
}


export const getTaskCount = async(req,res) =>{
const connection = await connect()
const [rows]= await connection.query('SELECT count(*) FROM tasks ')
res.json(rows[0]['count(*)'])
  
}

export const createTasks = async(req,res) =>{
  const connection = await connect()
  const [results] = await connection.query('INSERT INTO tasks(title,description) VALUES (?,?)',[
    req.body.title,
    req.body.description
  ])
 res.json({
  id:results.insertId,
  ...req.body
 })
}




export const deleteTasks = async(req,res) =>{
  const connection = await connect()
  await connection.query('DELETE FROM tasks WHERE id=?',[req.params.id])
  res.sendStatus(204)
}




export const updateTasks = async(req,res) =>{
  

  const connection = await connect();
  const result = await connection.query('UPDATE tasks SET title=?,description=? WHERE id=?', [
   req.body.title,
   req.body.description,
   req.params.id
  ]);
  console.log(result)
  res.sendStatus(204);
}


