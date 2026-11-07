import { TodoApp } from "@/components/TodoApp";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-xl flex-1 px-4 py-8 sm:px-6 sm:py-16">
      <TodoApp />
    </main>
  );
}
