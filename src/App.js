import './App.css';
import Card from './Card/card';
import Additem from './Additem';
import {useState} from 'react';
const todos = [
  {'name':'Use To do list','id':4,'date':new Date(2022,7,31)},
  {'name':'Buy Groceries','id':0,'date':new Date(2022,7,4)},
  {'name':'Wash Clothes','id':1,'date':new Date(2022,7,4)},
  {'name':'Make Tea','id':2,'date':new Date(2022,7,4)},
  {'name':'Send Emails','id':3,'date':new Date(2022,8,12)}
]
function App() {
  const [currentTodo,setcurrentTodo] = useState(todos);
  const [initialrender,setinitialrender] = useState();
  function GetInputData(Addeddata){
    setcurrentTodo(
      ()=>{return([Addeddata,...currentTodo])}  
    )
  }
  
  function modifydata(removedata){
    let completeditem = currentTodo.splice(currentTodo.indexOf(removedata),1)
    currentTodo.push(completeditem[0])
    let newTodolist = currentTodo;
    setcurrentTodo(newTodolist);
    setinitialrender(Math.random);
  }

  return (
    <div className='absolute w-[100%] h-auto bg-gradient-to-b from-blue-600 to-cyan-300'>
      <h1 className='absolute text-4xl font-bold ml-[30%] mt-[2%] sm:ml-[40%]'>To Do List</h1>
      <Additem onAddingData={GetInputData}/>
      {currentTodo.map((todo)=>(<Card items={todo} key={todo.id} onClickcheckbox={modifydata}/>))}
    </div>
  );}
export default App;
