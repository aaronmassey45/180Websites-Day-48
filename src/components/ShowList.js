import React, { Fragment } from 'react';
import TVShow from './TVShow';

const ShowList = ({ day, shows, handleDelete }) => {
  let body = null;
  if (!day) {
    body = 'Please select a day!';
  } else {
    body =
      shows.length > 0 ? (
        <Fragment>
          <h3 className="card-title">{day}</h3>
          <ul className="list-group list-group-flush">
            {shows.map(show => {
              return (
                <TVShow
                  key={show.id}
                  day={day}
                  handleDelete={handleDelete}
                  show={show}
                />
              );
            })}
          </ul>
        </Fragment>
      ) : (
        'No Shows Set'
      );
  }

  return (
    <div className="col-md-8 col-xs-12">
      <div>
        <div className="card">
          <div className="card-body">{body}</div>
        </div>
      </div>
    </div>
  );
};

export default ShowList;
