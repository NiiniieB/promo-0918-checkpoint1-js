import React, { Fragment } from 'react';

const ResultsLine = ({ branchName, onClickName, tests }) => (
  <tr>
    <th scope="row" onClick={onClickName}>{branchName}</th>
    {
      tests.map(({ correct, incorrect, missing, score }, index) => (
        <Fragment key={index}>
          <td className={ correct ? 'bg-success' : ''}>{correct}</td>
          <td className={ incorrect ? 'bg-danger' : ''}>{incorrect}</td>
          <td className={ missing ? 'bg-info' : ''}>{missing}</td>
          <td className={'bg-light'}>{score}</td>
        </Fragment>
      ))
    }
  </tr>
);

export default ResultsLine;
