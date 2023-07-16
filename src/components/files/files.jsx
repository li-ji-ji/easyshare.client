'use client';
import React, { useEffect, useState } from 'react';

function Files() {
  const [tabSelected, setTabSelected] = useState('lately');

  useEffect(() => {}, [tabSelected]);

  return (
    <div className="tabs tabs-boxed">
      <button
        className={`tab ${tabSelected == 'lately' ? 'tab-active' : ''}`}
        onClick={() => setTabSelected('lately')}
      >
        最近文件
      </button>
      <button
        className={`tab ${tabSelected == 'all' ? 'tab-active' : ''}`}
        onClick={() => setTabSelected('all')}
      >
        所有文件
      </button>
    </div>
  );
}

export default Files;
