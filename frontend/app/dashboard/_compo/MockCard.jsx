import React from 'react'

const MockCard = ({mock}) => {
    console.log(mock)
  return (
    <div className="border px-3 py-2 rounded-lg">
        <h2>{mock?.jobPosition}</h2>
        <h3>{mock?.jobExperience} Years of Experince</h3>
        <p>Created At: {}</p>
        div
    </div>
  )
}

export default MockCard