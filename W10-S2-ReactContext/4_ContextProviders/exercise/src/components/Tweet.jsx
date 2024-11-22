import React, { useContext} from 'react';
import { UserContext } from '../contexts/UserContext';

function Tweet({ content }) {

  const { userName } = useContext(UserContext);

  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px 0', borderRadius: '5px' }}>
      <h4>@{userName}</h4>
      <p>{content}</p>
    </div>
  );
}

export default Tweet;
