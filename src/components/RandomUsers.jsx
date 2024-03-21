import { stringify } from 'postcss';
import {React, useEffect, useState}  from 'react'

function RandomUsers() {
  const [user, setUser] = useState(null);

  const Nombre = () => {
    const presentacion = document.getElementById("presentacion")
    const informacion = document.getElementById("informacion")
    presentacion.textContent = "Hola, mi nombre es"
    informacion.innerText = user.name
  }

  const Direccion = () => {
    const presentacion = document.getElementById("presentacion")
    const informacion = document.getElementById("informacion")
    presentacion.textContent = "Mi direccion es"
    informacion.innerText = user.location
  }

  const Cumpleaños = () => {
    const presentacion = document.getElementById("presentacion")
    const informacion = document.getElementById("informacion")
    presentacion.textContent = "Mi cumpleaños es"
    informacion.innerText = user.registered;
  }

  const Telefono = () => {
    const presentacion = document.getElementById("presentacion")
    const informacion = document.getElementById("informacion")
    presentacion.textContent = "Mi numero es"
    informacion.innerText = user.cell
  }


  const Cambiar = () => {
    fetch("https://api.randomuser.me/")
      .then((res) => res.json())
      .then((data) => {
        const userData = {
          name: data.results[0].name.first + " " + data.results[0].name.last,
          email: data.results[0].email,
          picture: data.results[0].picture.large,
          location: data.results[0].location.street.number + ", " + data.results[0].location.street.name,
          registered: data.results[0].registered.date.slice(0, 10),
          cell: data.results[0].cell,
        };
        setUser(userData);
      });
  }
   
  

  useEffect(()=>{
    fetch("https://api.randomuser.me/")
      .then((res) => res.json())
      .then((data) => {

        const userData = {
          name: data.results[0].name.first + " " + data.results[0].name.last,
          email: data.results[0].email,
          picture: data.results[0].picture.large,
          location: data.results[0].location.street.number + ", " + data.results[0].location.street.name,
          registered: data.results[0].registered.date.slice(0, 10),
          cell: data.results[0].cell,
        };

        setUser(userData);
      });
  }, []);


  return (
    <>
      {user ? (
        <div className='w-80 h-auto flex flex-col items-center justify-center rounded-2xl p-5 shadow-2xl bg-slate-50'>
          <div className='w-32 h-32  rounded-full'>
            <img src={user.picture} alt="" className='w-32 h-32 rounded-full border shadow'/>
          </div>
          <p className='mt-5 text-base font-Poppins' id='presentacion'>Hola, mi nombre es</p>
          <h1 className='text-2xl pb-10 font-Poppins w-full text-center text-red-600' id='informacion'>{user.name} {user.last}</h1>
          <div className='gap-3 flex mb-10'>
            <button className='h-auto w-auto' onClick={Nombre}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 hover:text-red-600 hover:scale-110 hover:transition-all  ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </button>

            <button className='h-auto w-auto' onClick={Direccion} >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 hover:text-red-600 hover:scale-110 hover:transition-all">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </button>

            <button className='h-auto w-auto' onClick={Cumpleaños}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 hover:text-red-600 hover:scale-110 hover:transition-all">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
            </button>

            <button className='h-auto w-auto' onClick={Telefono}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 hover:text-red-600 hover:scale-110 hover:transition-all">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
            </button>
            

          </div>
          <button className='px-5 py-2 bg-slate-400 border-black border-2 hover:border-red-500 hover:scale-105 hover:transition-all shadow-2xl rounded font-Poppins' onClick={Cambiar}>
            Cambiar
          </button>
        </div>
        ) : null}
    </>
  )
}

export default RandomUsers
