"use client";

import { useState } from "react";
import { TodoFilters } from "@/components/TodoFilters";
import { TodoForm } from "@/components/TodoForm";
import { TodoList } from "@/components/TodoList";
import { TodoSummary } from "@/components/TodoSummary";
import type { Todo, TodoFilter } from "@/types/todo";

export function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<TodoFilter>("all");

  function addTodo(text: string) {
    setTodos((current) => [
      {
        id: crypto.randomUUID(),
        text,
        completed: false,
      },
      ...current,
    ]);
  }

  function toggleTodo(id: string) {
    setTodos((current) =>
      current.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  function deleteTodo(id: string) {
    setTodos((current) => current.filter((todo) => todo.id !== id));
  }

  const visibleTodos = todos.filter((todo) => {
    if (filter === "pending") {
      return !todo.completed;
    }

    if (filter === "completed") {
      return todo.completed;
    }

    return true;
  });

  const pending = todos.filter((todo) => !todo.completed).length;
  const completed = todos.filter((todo) => todo.completed).length;

  return (
    <section className="w-full rounded-[28px] border border-line bg-card px-4 py-6 shadow-[0_24px_60px_rgba(70,46,22,0.08)] sm:px-8 sm:py-8">
      <header>
        <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
          Suas atividades
        </p>
        <h1 className="mt-2 font-display text-4xl leading-none text-ink sm:text-5xl">
          Lista de tarefas
        </h1>
        <p className="mt-3 max-w-md text-base leading-7 text-muted">
          Cadastre o que precisa fazer, marque o que já concluiu e filtre a
          lista quando quiser focar no que falta.
        </p>
      </header>

      <TodoSummary
        total={todos.length}
        pending={pending}
        completed={completed}
      />
      <TodoForm onAdd={addTodo} />
      <TodoFilters filter={filter} onChange={setFilter} />
      <TodoList
        todos={visibleTodos}
        filter={filter}
        total={todos.length}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
    </section>
  );
}
