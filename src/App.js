import React, { Component } from "react";
import shortid from "shortid";
import Counter from 'components/Counter';
import Dropdown from "./components/Dropdown";
import Controls from "./components/Counter";
import ColorPicker from "./components/ColorPicker";
import Todolist from "components/Todolist";
import { render } from "@testing-library/react";
import Form from './components/form';
import initialTodos from './todos.json';
import TodoEditor from "components/TodoEditor";
import Filter from "components/Todolist/Filter";
import Modal from "components/Modal/Modal";
import Clock from "components/Clock/Clock";
import Tabs from "components/Tabs";
import tabs from './tabs.json';
import IconButton from "./components/IconButton/IconButton";
import { ReactComponent as AddIcon } from './components/icons/add.svg';
import {ReactComponent as DeleteIcon } from './components/icons/delete.svg';



const colorPickerOptions = [
    { label: 'red', color: '#f44336' },
    { label: 'green', color: '#4CAF50' },
    { label: 'blue', color: '#2196F3' },
    { label: 'grey', color: '#607DBB' },
    { label: 'pink', color: '#E91E63' },
    { label: 'indigo', color: '#3F51B5' },
   

];

class App extends Component { 
    state = {
        todos: initialTodos,
        // todos: [],
        filter: '',
        showModal: false,
        showClock:false,
    };  


    // Викликається сам при маунті компонента


    componentDidMount() { 
        // console.log('componentDidMount');
        const todos = localStorage.getItem('todos');
        const parseTodos = JSON.parse(todos);

        if (parseTodos) { 
            this.setState({ todos: parseTodos }); 
        }        
    }

    //Викликається сам після кожного оновлення
    // обов'язкова перевірка (інакше відбудеться зациклювання)
    //componentDidUpdate( prevProps, prevState, snapshot)
    
    componentDidUpdate(prevProps, prevState) { 
        // console.log('componentDidUpdate');
        if (this.state.todos !== prevState.todos) { 
            // console.log('Обновилось поле todos');
            localStorage.setItem('todos', JSON.stringify(this.state.todos));        
        }

        // if (this.state.todos.length > prevState.todos.length && prevState.todos.length!==0) {
        //     this.toggleModal();
        //  }
    }

   
    
    addTodo = text => {
       
        const todo = {
            id: shortid.generate(),
            text,
            completet: false,

        }
        this.setState(({ todos }) => ({
            todos: [todo, ...todos],
        }))
       this.toggleModal();
    };

    deleteTodo = todoId => {
        this.setState(prevState => ({
            todos: prevState.todos.filter(todo => todo.id !== todoId),
        }))
    }

    toggleCompleted = todoId => {
        // console.log(todoId);
        // this.setState(prevState => ({

        //     todos: prevState.todos.map(todo => { 

        //         if (todo.id === todoId) {
        //             // console.log('Знайшли, те що потрібно');

        //             return {
        //                 ...todo, completet: !todo.completed,
        //             };

        //         }
        //         return todo;
        //     })

        // }));


        this.setState(({todos}) => ({
            todos: todos.map(todo =>
                todo.id === todoId ? {...todo, completed: !todo.completed} : todo,
            )
            
        }));
       
    };

    changeFilter = (event) => { 
        this.setState({filter: event.currentTarget.value})
    }

    formSubmitHandler = (data) => {

        // setTimeout(() => {
        //   console.log(data);  
        // }, 1000);

        console.log(data);  

    }
    
    getVisibleTodos = () => { 

        const {filter, todos }=this.state

        const normalizedFilter = filter.toLowerCase();
        return todos.filter(todo =>
                todo.text.toLowerCase().includes(normalizedFilter),
            );
    }

    calculateCompletedTodos = () => { 
        const { todos } = this.state;
        return todos.reduce
            ((total, todo) => (!todo.completed ? total + 1 : total), 0)


    }
    

     toggleModal = () => {
        this.setState(({ showModal }) => ({
            showModal: !showModal,
        }));
    };

    toggleClock = () => {
        this.setState(({ showClock }) => ({
            showClock: !showClock,
        }));
    };

    render() {

        const { todos, filter, showModal, showClock } = this.state;
        // const { todos, filter } = this.state;        
        const totalTodoCount = todos.length;
        const completedTodosCount = todos.filter(todo => todo.completed).length;
        // const nouCompletedTodosCount=todos.reduce((total,todo)=>(!todo.completet ? total+1: total),0)
        const nouCompletedTodosCount = this.calculateCompletedTodos();
        const visibleTodos =
            this.getVisibleTodos();

        
        return (
            <>
               
              
                
               
                
                
               
                
                {/* <Tabs items={tabs} />   */}

               

                {/* <button
                    type="button"
                    className="Button_onClock"
                    onClick={this.toggleClock}>
                    Відкрити / Закрити  таймер
                </button> */}

                 {/* {showClock &&  <Clock />} */}
                
                {/* <Clock /> */}


                <IconButton onClick={this.toggleModal}> <AddIcon  width="40" height="40" fill="#fff"/></IconButton>

                 <h1>Стан Компонента</h1>
                
                <button type="button" onClick={this.toggleModal}>Відкрити модалку</button>
                {/* render за умовою  /* }
                {/* Якщо  (showModal === true) то відбувається render  <Modal/> */}

                {/* {showModal && <Modal onClose={this.toggleModal}>
                    <h1>Привіт це контент модалки як children</h1>
                    <h2>Привіт це контент модалки як children</h2>
                    <p>test text test text test text test text test text test text
                        test text test text test text test text test text test text
                        test text test text test text test text test text test text
                        test text test text test text test text test text test text
                        test text test text test text test text test text test text 
                    </p>

                    <button type="button" onClick={this.toggleModal}>Закрити модалку</button>
                </Modal>} */}


                 {showModal && <Modal onClose={this.toggleModal}>
                    <TodoEditor onSubmit={this.addTodo} />
                    {/* <button type="button" onClick={this.toggleModal}>Закрити модалку</button> */}
                  
                    <IconButton
                        onClick={this.toggleModal}
                        className="Button__delete">
                        <DeleteIcon width="40" height="40" fill="#fff" />
                    </IconButton>
                   
                </Modal>}


                {/* <Form onSubmiter={this.formSubmitHandler} /> */}
                
                
                {/* <Counter initialValue={10} /> */}
       
                {/* <ColorPicker options={colorPickerOptions}/> */}
       
                {/* < Dropdown /> */}

                <div>
                    <p>Загальна кількість приміток : {totalTodoCount}</p>
                    <p>Кількість виконаних : {completedTodosCount}</p>
                    <p>Кількість не виконаних : {nouCompletedTodosCount }</p>
                    
                    
                </div>
        
                {/* <TodoEditor onSubmit={this.addTodo} /> */}

                <Filter value={filter} onChange={this.changeFilter} />
                
                
                <Todolist
                    todos={visibleTodos}
                    onDeleteTodo={this.deleteTodo}
                    onToggleCompleted={this.toggleCompleted}
                />
           
        </>
        );
    };
   
};
export default App;


// const App = () => (
    
// );

// export default App;