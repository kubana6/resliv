import React from 'react'
import Header from './header'
import Head from './head'

const Dummy = () => {
  return (
    <div>
      <Head title="Hello" />
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          This is dummy component
        </div>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy
