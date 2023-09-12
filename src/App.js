import { useState } from "react";
import "./App.css";

//Component
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
    //State
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
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
            />
            <TodoList />
        </div>
    );
}

export default App;
