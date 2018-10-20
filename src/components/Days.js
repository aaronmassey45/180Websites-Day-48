import React from 'react';

const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const Days = ({ days, selectDay }) => {
  return (
    <div className="col-md-4 col-xs-12">
      <div className="card">
        <ul className="list-group">
          {Object.keys(days).map((day, i) => {
            return (
              <li
                key={day}
                className="list-group-item"
                onClick={() => selectDay(daysOfWeek[i], day)}
              >
                {daysOfWeek[i]} - {days[day].length} shows
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Days;
