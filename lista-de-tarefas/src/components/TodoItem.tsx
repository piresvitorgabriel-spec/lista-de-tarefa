import type { Todo } from "@/types/todo";

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li
      className={`flex items-start gap-3 rounded-2xl border border-line border-l-4 px-3 py-3 sm:px-4 ${
        todo.completed
          ? "border-l-sage bg-sage/8"
          : "border-l-accent bg-white"
      }`}
    >
      <input
        id={todo.id}
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="mt-1 size-5 shrink-0 accent-sage"
      />
      <label htmlFor={todo.id} className="min-w-0 flex-1 cursor-pointer">
        <span
          className={`block text-base leading-6 break-words ${
            todo.completed ? "text-muted line-through" : "text-ink"
          }`}
        >
          {todo.text}
        </span>
        <span className="mt-1 block text-xs font-semibold tracking-wide uppercase">
          {todo.completed ? (
            <span className="text-sage">Concluída</span>
          ) : (
            <span className="text-accent-dark">Pendente</span>
          )}
        </span>
      </label>
      <button
        type="button"
        onClick={() => onDelete(todo.id)}
        aria-label={`Excluir ${todo.text}`}
        className="shrink-0 rounded-xl px-2 py-1 text-sm font-semibold text-muted transition hover:bg-accent/10 hover:text-accent-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        Excluir
      </button>
    </li>
  );
}
