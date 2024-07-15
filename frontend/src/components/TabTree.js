import React, { useEffect, useState } from 'react';
import { getTabs } from '../services/api';
import socket from '../services/socket';

const TabTree = () => {
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    // Initial fetch of tabs from API
    getTabs().then(setTabs);

    // WebSocket for real-time updates
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setTabs(data);
    };
  }, []);

  return (
    <div>
      <h2>Current Tabs</h2>
      <ul>
        {tabs.map(tab => (
          <li key={tab.id}>{tab.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TabTree;
