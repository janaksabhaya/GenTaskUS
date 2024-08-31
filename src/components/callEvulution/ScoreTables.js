import React from 'react';

const data = {
  topScores: [
    { name: 'Anthony Blinken', score: 100, recordingId: '0349485' },
    { name: 'Samantha Jones', score: 99, recordingId: '4958583' },
    { name: 'Heather Moore', score: 98, recordingId: '5958374' },
    { name: 'Dave Matthews', score: 98, recordingId: '5958382' },
    { name: 'Fred Quimby', score: 97, recordingId: '9495837' },
  ],
  lowestScores: [
    { name: 'Johnny Joe', score: 40, recordingId: '5588384' },
    { name: 'Kimberly Smith', score: 42, recordingId: '9472624' },
    { name: 'Maria Esther', score: 46, recordingId: '5827264' },
    { name: 'Jake Sully', score: 48, recordingId: '6873626' },
    { name: 'Christopher Jones', score: 51, recordingId: '4857362' },
  ],
};

const ScoreTable = ({ title, scores }) => (
  <div className="w-full p-4 rounded-lg shadow-md bg-white">
    <h2 className="text-lg font-semibold mb-4">{title}</h2>
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2 px-4 border text-left border-gray-200">Agent Name</th>
          <th className="py-2 px-4 border text-left border-gray-200">Score</th>
          <th className="py-2 px-4 border text-left border-gray-200">Recording ID</th>
          {/* <th className="py-2 px-4 border text-left border-gray-200"></th> */}
        </tr>
      </thead>
      <tbody>
        {scores.map((score, index) => (
          <tr key={index}>
            <td className="py-2 px-4 border border-gray-200">{score.name}</td>
            <td className="py-2 px-4 border border-gray-200">{score.score}</td>
            <td className="py-2 px-4 border border-gray-200">{score.recordingId}</td>
            {/* <td className="py-2 px-4 border border-gray-200">
              <button className="text-blue-500 hover:text-blue-700">
                ▶️
              </button>
            </td> */}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const ScoreTables = () => (
  <div className="flex flex-col md:flex-row gap-3">
    <ScoreTable title="Alpha's Top 5 Scores" scores={data.topScores} />
    <ScoreTable title="Alpha's Lowest 5 Scores" scores={data.lowestScores} />
  </div>
);

export default ScoreTables;
