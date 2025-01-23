import { Header } from './components/Header';
import { TodoList } from './components/TodoList';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <TodoList />
      </main>
    </>
  );
}
