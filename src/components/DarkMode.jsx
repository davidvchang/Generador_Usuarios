import React, { useEffect, useState } from 'react'

function DarkMode() {

    const [modoOscuro, setModoOscuro] = useState(false)

    const ModeChange = () => {
        setModoOscuro(!modoOscuro)
        console.log(modoOscuro)
        const Light = document.getElementById('LightMode')
        const Night = document.getElementById('Night')
        const Cambiar = document.getElementById('CambiarLado')
        Light.classList.toggle('hidden')
        Night.classList.toggle('hidden')
        Cambiar.classList.toggle('justify-end')
        Cambiar.classList.toggle('bg-slate-800')
    }

    useEffect(() => {
        document.querySelector('html').classList.toggle('dark')
    },[modoOscuro])


  return (
    <div className='w-28 flex flex-row justify-start gap-12 bg-slate-50 py-2 px-2 rounded-full shadow-2xl border border-black dark:bg-slate-200' id='CambiarLado'>
        <button className='hidden right-4' id='LightMode' onClick={ModeChange}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 rounded-full text-yellow-500 bg-slate-100">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>

        </button>
        
        <button onClick={ModeChange} id='Night'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-slate-950 bg-slate-50 dark:bg-slate-50 rounded-full">
                <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
            </svg>
        </button>
    </div>
  )
}

export default DarkMode
