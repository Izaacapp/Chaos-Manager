import React, { useEffect, useState } from 'react';
import { getEnhancedTabs } from '../services/api';

const AiEnhancedTree = () => {
  const [enhancedTabs, setEnhancedTabs] = useState([]);

  useEffect(() => {
    getEnhancedTabs().then(setEnhancedTabs);
  }, []);

  return (
    <div>
      <h2>AI-Enhanced Tabs</h2>
      <ul>
        {enhancedTabs.map(tab => (
          <li key={tab.id}>{tab.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default AiEnhancedTree;
