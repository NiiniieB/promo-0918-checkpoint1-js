import React, { Component } from 'react';
import ResultsLine from './ResultsLine';
import DetailsModal from './DetailsModal';
import allStudentsResults from '../results.json';

class ResultsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentIndex: -1
    };
    this.showStudentDetails = this.showStudentDetails.bind(this);
  }

  showStudentDetails(studentIndex) {
    this.setState({
      studentIndex
    });
  }

  render() {
    const { studentIndex } = this.state;
    const student = studentIndex !== -1 ? allStudentsResults[studentIndex] : null;
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th className="text-center" scope="col">Branch</th>
              {allStudentsResults[0].tests.map((r, index) => (
                <th
                  className="text-center"
                  colSpan="4"
                  key={index}
                  scope="col"
                  title={ `${r.questionText}` }
                >
                  { `Q${index + 1}` }
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
          {
            allStudentsResults.map((studentRes, index) => (
                <ResultsLine
                  key={index}
                  onClickName={() => this.showStudentDetails(index)}
                  {...studentRes}
                />
            ))
          }
          </tbody>
        </table>
        <DetailsModal student={student} onModalClose={() => this.showStudentDetails(-1)} />
        {student && <div className="modal-backdrop fade show"></div>}
      </div>
    );
  }
};

export default ResultsTable;
