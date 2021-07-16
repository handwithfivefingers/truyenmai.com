import React, { useState, useEffect } from 'react';

function AdminPages(props) {
  const [state, setState] = useState('');

  useEffect(() => {
    return () => {};
  }, []);
  const renderTask = (val) => {
    let xhtml = [];
    for (let i = 1; i < val; i++) {
      xhtml.push(
        <div className="col-4 mt-2">
          <div className="dashboard component">
            <h4>Task {i} </h4>
          </div>
        </div>
      );
    }
    return xhtml;
  };
  return (
    <>
      <div className="row task">{renderTask(5)}</div>
    </>
  );
}

export default AdminPages;
