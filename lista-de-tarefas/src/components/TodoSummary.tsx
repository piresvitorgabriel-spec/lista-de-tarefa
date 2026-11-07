type TodoSummaryProps = {
  total: number;
  pending: number;
  completed: number;
};

function countLabel(total: number) {
  if (total === 0) {
    return "Nenhuma tarefa cadastrada";
  }

  if (total === 1) {
    return "1 tarefa cadastrada";
  }

  return `${total} tarefas cadastradas`;
}

export function TodoSummary({ total, pending, completed }: TodoSummaryProps) {
  const stats = [
    { label: "Cadastradas", value: total },
    { label: "Pendentes", value: pending },
    { label: "Concluídas", value: completed },
  ];

  return (
    <section className="mt-6" aria-label="Resumo das tarefas">
      <p aria-live="polite" className="text-sm font-medium text-muted">
        {countLabel(total)}
      </p>
      <dl className="mt-3 grid grid-cols-3 gap-2 sm:gap-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-line bg-paper/70 px-3 py-3"
          >
            <dt className="text-xs font-medium tracking-wide text-muted uppercase">
              {stat.label}
            </dt>
            <dd className="mt-1 font-display text-3xl leading-none text-ink">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
