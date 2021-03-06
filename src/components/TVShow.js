import React from 'react';

const TVShow = ({
  show: { title, hour, min, meridiem, id },
  day,
  handleDelete,
}) => {
  return (
    <div className="list-group-item">
      <h5>
        <b>{title}</b>
      </h5>
      <div className="row">
        <div className="col-8">
          Airs at {hour}:{min} {meridiem}.
        </div>
        <div className="col-4">
          <button
            className="btn btn-sm btn-danger"
            onClick={() => handleDelete(day.toLowerCase().substr(0, 3), id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TVShow;
