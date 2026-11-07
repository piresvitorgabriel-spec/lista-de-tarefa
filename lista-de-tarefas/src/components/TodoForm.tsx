import { useState, type FormEvent } from "react";

type TodoFormProps = {
  onAdd: (text: string) => void;
};

export function TodoForm({ onAdd }: TodoFormProps) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = text.trim();

    if (!trimmed) {
      setError("Digite uma tarefa antes de adicionar.");
      return;
    }

    onAdd(trimmed);
    setText("");
    setError("");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <label
        htmlFor="nova-tarefa"
        className="mb-2 block text-sm font-semibold text-ink"
      >
        Nova tarefa
      </label>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          id="nova-tarefa"
          name="tarefa"
          value={text}
          onChange={(event) => {
            setText(event.target.value);
            if (error) {
              setError("");
            }
          }}
          placeholder="Ex.: Revisar o capítulo de React"
          maxLength={180}
          autoComplete="off"
          className="h-12 min-w-0 flex-1 rounded-2xl border border-line bg-white px-4 text-base text-ink outline-none transition placeholder:text-muted/80 focus:border-accent focus:ring-4 focus:ring-accent/15"
        />
        <button
          type="submit"
          className="h-12 shrink-0 rounded-2xl bg-accent px-5 text-base font-semibold text-white transition hover:bg-accent-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Adicionar
        </button>
      </div>
      {error ? (
        <p role="alert" className="mt-2 text-sm font-medium text-accent-dark">
          {error}
        </p>
      ) : (
        <p className="mt-2 text-sm text-muted">
          A tarefa entra na lista como pendente.
        </p>
      )}
    </form>
  );
}
