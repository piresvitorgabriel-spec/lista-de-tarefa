import type { Todo, TodoFilter } from "@/types/todo";
import { TodoItem } from "@/components/TodoItem";

type TodoListProps = {
  todos: Todo[];
  filter: TodoFilter;
  total: number;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

function emptyCopy(filter: TodoFilter, total: number) {
  if (total === 0) {
    return {
      title: "Nenhuma tarefa por aqui",
      text: "Use o campo acima para cadastrar a primeira atividade.",
    };
  }

  if (filter === "pending") {
    return {
      title: "Nada pendente",
      text: "Todas as tarefas cadastradas já foram concluídas.",
    };
  }

  return {
    title: "Nenhuma concluída",
    text: "Marque uma tarefa como concluída para vê-la neste filtro.",
  };
}

export function TodoList({
  todos,
  filter,
  total,
  onToggle,
  onDelete,
}: TodoListProps) {
  if (todos.length === 0) {
    const copy = emptyCopy(filter, total);

    return (
      <div className="mt-4 rounded-2xl border border-dashed border-line px-4 py-10 text-center">
        <p className="font-display text-2xl text-ink">{copy.title}</p>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-muted">
          {copy.text}
        </p>
      </div>
    );
  }

  return (
    <ul aria-label="Tarefas" className="mt-4 flex flex-col gap-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
