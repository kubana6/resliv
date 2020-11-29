import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Header from './header'

const Home = () => {
   const [value, setValue] = useState('')
  function removedName(e) {
    const name =e.target.className
    const files = document.querySelector(`.${name}`).remove()
    console.log(files)
    return name
  }
  function addEmployment() {
    const valueName = document.querySelector(".valueName")
    const name = document.querySelector(".addEmploymend").value
    const addName = document.createElement("div")
    const btn = document.createElement("button")
    btn.classList.add(name)
    btn.onclick=removedName
    btn.textContent = "delete"
    addName.classList.add(name)
    addName.innerHTML = name
    addName.appendChild(btn)
    valueName.appendChild(addName)
  }

  useEffect(() => {
    axios(`https://reqres.in/api/users?per_page=12`).then((it) => {
      const reposName = it.data.data.map((arr) => {
        return (
          <div className={arr.first_name} key={arr.id}>
            {arr.first_name}
            <button className={arr.first_name} type='button' onClick={removedName}>delete</button>
          </div>
        )
      })
      setValue(reposName)
    })
  }, [value])
  // console.log(value)

  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="flex items-center justify-center bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div>
            <div className="valueName">
              {value}
            </div>

            <input className="addEmploymend text-black" placeholder="add employmend" type="text" />
            <button type="button" onClick={addEmployment}>
              ADD
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
