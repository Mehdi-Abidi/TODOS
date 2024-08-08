import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoForm() {
    const [todo, setTodo] = useState("");
    const { addTodo } = useTodo();

    const add = (e) => {
        e.preventDefault();
        if (!todo) return;
        addTodo({ todo, completed: false });
        setTodo("");
    };

    return (
        <form onSubmit={add} className="flex items-center space-x-2">
        <input
            type="text"
            placeholder="Write a Todo..."
            className="w-full border border-black/20 rounded-l-lg px-3 py-2 outline-none duration-150 bg-white/10 focus:bg-white/20"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
        />
        <button
            type="submit"
            className="rounded-r-lg px-4 py-2 bg-green-600 text-white font-semibold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
            Add
        </button>
        </form>
    );
}

export default TodoForm;
