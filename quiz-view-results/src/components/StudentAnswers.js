import React from 'react';

const statusClassMap = {
  correct: 'text-success font-weight-bold',
  incorrect: 'text-danger',
  missing: 'text-info',
  neutral: ''
}

const StudentAnswers = ({student}) => (
  <div style={{ height: '400px', overflowY: 'scroll' }}>
  {
    student.tests.map(({ questionText, statuses }, qIdx) => (
      <div key={qIdx}>
        <h6>Q{qIdx + 1}. {questionText}</h6>
        <ol>
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
