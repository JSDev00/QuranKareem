import React, {useState} from 'react';
import {FaUserCircle} from 'react-icons/fa';
const reciters = ({reciters, reciterHandler}) => {
  const [activateId, setActivateId] = useState ('');
  return (
    <div className="min-vh-100 shadow-lg p-3 bg-card">
      <h1 className="fs-5 fw-bold text-center">reciters</h1><hr />
      <ul className="text-center list-group">
        {reciters && reciters.length > 0
          ? reciters.map (reciter => (
              <div>
                <li
                  onClick={e => {
                    reciterHandler (reciter);
                    setActivateId (reciter.id);
                  }}
                  className={`list-group-item bg-transparent border-0 text-light cursor fs-6 ps-0 ${reciter.id === activateId && 'active'}`}
                >
                  <FaUserCircle className="fs-6" />{' '}
                  <span className="fs-6 active reads">{reciter.name}</span><br />
                </li>
                <hr />
              </div>
            ))
          : <div className="text-center">
              <span className="spinner-border" />
            </div>}

      </ul>
    </div>
  );
};

export default reciters;
