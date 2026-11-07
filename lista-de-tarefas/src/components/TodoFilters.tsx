import type { TodoFilter } from "@/types/todo";

type TodoFiltersProps = {
  filter: TodoFilter;
  onChange: (filter: TodoFilter) => void;
};

const filters: { id: TodoFilter; label: string }[] = [
  { id: "all", label: "Todas" },
  { id: "pending", label: "Pendentes" },
  { id: "completed", label: "Concluídas" },
];

export function TodoFilters({ filter, onChange }: TodoFiltersProps) {
  return (
    <div
      className="mt-6 grid grid-cols-3 gap-1 rounded-2xl bg-paper p-1"
      role="group"
      aria-label="Filtrar tarefas"
    >
      {filters.map((option) => {
        const selected = filter === option.id;

        return (
          <button
            key={option.id}
            type="button"
            aria-pressed={selected}
            onClick={() => onChange(option.id)}
            className={`h-10 rounded-xl px-2 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:text-base ${
              selected
                ? "bg-ink text-white shadow-sm"
                : "text-muted hover:bg-white hover:text-ink"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
