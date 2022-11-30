import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

function App() {
  return (
    <main className='bg-zinc-900 h-screen'>
      <div className='container mx-auto p-10'>
      <TaskForm />
      <TaskList />
      </div>
    </main>
  );
}
// min 3:16:48
export default App
