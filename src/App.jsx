import RandomUsers from './components/RandomUsers'

function App() {

  return (
    <main className='flex  justify-center items-center h-screen bg-slate-300'>
      <div className=' h-auto w-11/12 flex flex-wrap justify-center gap-10 p-5'>
        <RandomUsers/>
      </div>
    </main>
  )
}

export default App
