import React from 'react';
import classNames from 'classnames';
import StudentAnswers from './StudentAnswers';

const DetailsModal = ({ student, onModalClose }) => {
  const showClass = student ? 'show' : '';
  const modalStyle = { display: (student ? 'block' : '') };
  const modalClass = classNames('modal', 'fade', showClass);
  return (
    <div className={modalClass} id="exampleModal" tabIndex="-1" role="dialog" style={modalStyle}>
      <div className="modal-dialog" role="document" style={{ maxWidth: '700px' }}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">{student && student.branchName}</h5>
            <button onClick={onModalClose} type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            { student && <StudentAnswers student={student} /> }
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">Save changes</button>
            <button onClick={onModalClose} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsModal;
