import { useState, useEffect } from "react";
import "./App.css";

//Component
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
    //State
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);

    // Run Once when the app start
    useEffect(() => {
        getLocalTodos();
    }, []);

    //
    useEffect(() => {
        filterHandler();
        saveLocalTodos();
    }, [todos, status]);

    const filterHandler = () => {
        switch (status) {
            case "completed":
                setFilteredTodos(
                    todos.filter((todo) => todo.complete === true)
                );
                break;
            case "uncompleted":
                setFilteredTodos(
                    todos.filter((todo) => todo.complete === false)
                );
                break;
            default:
                setFilteredTodos(todos);
                break;
        }
    };

    // Save data to local storage
    const saveLocalTodos = () => {
        localStorage.setItem("todos", JSON.stringify(todos));
    };

    const getLocalTodos = () => {
        if (localStorage.getItem("todos") === null) {
            localStorage.setItem("todos", JSON.stringify([]));
        } else {
            let todoLocal = localStorage.getItem(
                "todos",
                JSON.parse(localStorage.getItem("todos"))
            );
            console.log(todoLocal);
            // setTodos(todoLocal);
        }
    };

    return (
        <div className="App">
            <header>
                <h1>Amirs Todo list:</h1>
            </header>
            <Form
                inputText={inputText}
                todos={todos}
                setTodos={setTodos}
                setInputText={setInputText}
                setStatus={setStatus}
                // filteredTodos={filteredTodos}
            />
            <TodoList
                setTodos={setTodos}
                todos={todos}
                filteredTodos={filteredTodos}
            />
        </div>
    );
}

export default App;
