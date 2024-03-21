import RandomUsers from './components/RandomUsers'
import DarkMode from './components/DarkMode'

function App() {

  return (
    <main className='flex  flex-col justify-center items-center h-screen bg-slate-300 dark:bg-slate-800'>
      <DarkMode/>
      <div className=' h-auto w-11/12 flex flex-wrap justify-center gap-10 p-5 pt-3'>
        <RandomUsers/>
      </div>
    </main>
  )
}

export default App
