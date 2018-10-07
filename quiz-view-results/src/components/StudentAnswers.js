import React from 'react';

const statusClassMap = {
  correct: 'text-success font-weight-bold',
  incorrect: 'text-danger',
  missing: 'text-info',
  neutral: ''
}

const StudentAnswers = ({student}) => (
  <div style={{ height: '400px', overflowY: 'scroll' }}>
    <h6>Légende</h6>
    <ul>
      <li className="text-success">réponse correcte</li>
      <li className="text-info">réponse correcte manquante</li>
      <li className="text-danger">réponse incorrecte</li>
    </ul>
  {
    student.tests.map(({ questionText, statuses }, qIdx) => (
      <div key={qIdx}>
        <h6>Q{qIdx + 1}. {questionText}</h6>
        <ol style={{ listStyleType: 'lower-latin' }}>
          {
            statuses.map(({ nom, status }, ansIdx) => (
              <li key={ansIdx} className={statusClassMap[status]}>{nom}</li>
            ))
          }
        </ol>
      </div>
    ))
  }
  </div>
);

export default StudentAnswers;
