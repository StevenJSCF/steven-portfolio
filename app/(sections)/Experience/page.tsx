import React from 'react'

function page() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Experience</h1>
      <div className="space-y-4">
        <div className="border-b border-gray-700 pb-4">
          <h2 className="text-2xl font-semibold">Job Title - Company</h2>
          <p className="text-gray-400">Location | Dates</p>
          <ul className="list-disc list-inside">
            <li>Responsibility 1</li>
            <li>Responsibility 2</li>
            <li>Responsibility 3</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default page
