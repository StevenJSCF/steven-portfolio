import React from "react";

const education = [
  {
    degree: "B.S. in Software Engineering",
    school: "Iowa State University of Science and Technology",
    years: "2021 - 2025",
    gpa: "GPA: 3.66/4.0",
  },
];

function EducationPage() {
  return (
    <div className="px-6 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education
            <div className="h-2 w-28 bg-gradient-to-r from-red-500 to-red-400 mx-auto mt-2"></div>
          </h2>
        </div>
        <div className="space-y-8">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-cyan-900/40 to-blue-900/30 rounded-2xl shadow-lg p-6 flex flex-col md:flex-row md:items-center gap-6"
            >
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-cyan-400 mb-1">
                  {item.degree}
                </h3>
                <p className="text-lg text-gray-200 mb-1">{item.school} </p>
                <p className="text-sm text-gray-400 mb-2">{item.years}</p>
                <p className="text-gray-300">{item.gpa}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EducationPage;
