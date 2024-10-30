/* eslint-disable react/prop-types */
// src/App.js
import React from "react";

const projects = [
  { projectName: "Project 1", startDate: "20-10-23", endDate: "10-12-23", progress: 73 },
  { projectName: "Project 2", startDate: "13-05-23", endDate: "07-08-23", progress: 35 },
  { projectName: "Project 3", startDate: "03-08-23", endDate: "27-09-23", progress: 82 },
  { projectName: "Project 4", startDate: "11-04-23", endDate: "17-06-23", progress: 61 },
  { projectName: "Project 5", startDate: "05-02-23", endDate: "15-04-23", progress: 95 },
];

const strategicThemes = [
  {
    projectName: "Strategic Theme 1",
    businessGoal: [
      {
        title: "Business Goal 1",
        progress: 82,
        objectives: [
          { title: "Objective 1", progress: 55 },
          { title: "Objective 2", progress: 70 },
        ],
      },
      { title: "Business Goal 2", progress: 25 },
      { title: "Business Goal 3", progress: 45 },
      { title: "Business Goal 4", progress: 75 },
    ],
  },
  {
    projectName: "Strategic Theme 2",
    businessGoal: [
      {
        title: "Business Goal 1",
        progress: 82,
        objectives: [
          { title: "Objective 1", progress: 55 },
          { title: "Objective 2", progress: 70 },
        ],
      },
      { title: "Business Goal 2", progress: 25 },
      { title: "Business Goal 3", progress: 45 },
      { title: "Business Goal 4", progress: 75 },
    ],
  },
];

const ProgressBar = ({ progress }) => (
  <div className="w-full bg-gray-200 rounded h-3">
    <div
      className="bg-blue-600 h-3 rounded"
      style={{ width: `${progress}%` }}
    ></div>
  </div>
);

const ProjectTable = () => (
  <div className="mb-8">
    <h2 className="text-xl font-bold mb-4">Projects</h2>
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border-b">Project Name</th>
            <th className="p-2 border-b">Start Date</th>
            <th className="p-2 border-b">End Date</th>
            <th className="p-2 border-b">Progress</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="p-2 border-b">{project.projectName}</td>
              <td className="p-2 border-b">{project.startDate}</td>
              <td className="p-2 border-b">{project.endDate}</td>
              <td className="p-2 border-b">
                <ProgressBar progress={project.progress} />
                <span>{project.progress}%</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const StrategicTable = () => (
  <div>
    <h2 className="text-xl font-bold mb-4">Strategic Themes</h2>
    {strategicThemes.map((theme, index) => (
      <div key={index} className="mb-8">
        <h3 className="text-lg font-semibold mb-2">{theme.projectName}</h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border-b">Business Goal</th>
                <th className="p-2 border-b">Progress</th>
              </tr>
            </thead>
            <tbody>
              {theme.businessGoal.map((goal, idx) => (
                <React.Fragment key={idx}>
                  <tr className="hover:bg-gray-50">
                    <td className="p-2 border-b">{goal.title}</td>
                    <td className="p-2 border-b">
                      <ProgressBar progress={goal.progress} />
                      <span>{goal.progress}%</span>
                    </td>
                  </tr>
                  {goal.objectives &&
                    goal.objectives.map((objective, objIdx) => (
                      <tr key={objIdx} className="hover:bg-gray-50">
                        <td className="p-2 pl-8 border-b text-gray-600">
                          - {objective.title}
                        </td>
                        <td className="p-2 border-b">
                          <ProgressBar progress={objective.progress} />
                          <span>{objective.progress}%</span>
                        </td>
                      </tr>
                    ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ))}
  </div>
);

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-8">Project Progress Chart</h1>
      <ProjectTable />
      <StrategicTable />
    </div>
  );
}

export default App;
