import { crearTodoHtml, saludar } from './js/componentes';
import './styles.css';

import { Todo, TodoList } from './class';

export const todoList = new TodoList();

todoList.todos.forEach( todo => crearTodoHtml( todo ));
//Otra forma de hacer el forEach todoList.todos.forEach( crearTodoHtml());

//const tarea = new Todo("Aprender JavaScript");
//todoList.nuevoTodo(tarea);

//console.log( todoList );

//crearTodoHtml( tarea );


//localStorage.setItem('mi-key', 'ABC123');

//setTimeout( () =>{

//    localStorage.removeItem('mi-key')

//}, 1500);

