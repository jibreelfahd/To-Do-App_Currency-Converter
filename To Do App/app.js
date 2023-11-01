const express = require('express');
const app = new express();
const { writeFileSync } = require('fs');

/* Middlewares */
app.use(express.json());
app.use(express.urlencoded( {extended: false } ));
app.set('view engine', 'ejs');
app.use(express.static('public'));


//array to add tasks
const todo = [];

//routing
app.get('/', (req, res) => {
   res.render('index', { tittle: 'To Do App', todo});
});

//display the to do interface
app.post('/add', (req, res) => {
   const inputTask = req.body.tasks;
   todo.push(inputTask);
   res.redirect('/');
});

//to delete texts
app.post('/delete/:id', (req, res) => {
   const listId = req.params.id;
   if(listId >= 0 && listId < todo.length) {
      todo.splice(listId, 1);
   }
   res.redirect('/');
});

//to update a text
app.get('/update', (req, res) => {
   res.render('update', {tittle: 'Edit Task', todo})
});

app.post('/update/:id', (req, res) => {
   const listId = req.params.id;
   const updatedTask = req.body.edited;

   const listToUpdate = req.todo.find((list) => list.id === listId);
   if (!listToUpdate) {
      return res.status(404).send('List not found');
   }
   listToUpdate.task = updatedTask;
   res.redirect('/');
});
      
//server
app.listen(3000, () => {
   console.log('Server is running');
});