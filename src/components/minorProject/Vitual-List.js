import React from 'react';
import { VariableSizeList as List } from 'react-window';

const data = Array.from({ length: 10000 }, (_, index) => ({
  label: `Item ${index + 1}`,
  height: Math.floor(Math.random() * 50) + 30, // Random height between 30 and 80px
}));

const VirtualizedList = () => {
  // Function to return the height of an item based on its index
  const getItemHeight = index => data[index].height;

  const Row = ({ index, style }) => (
    <div style={style}>
      {data[index].label}
      ||
      {data[index].label}
    </div>
  );

  return (
    <div>
      <h3>React Window Dynamic List Example</h3>
      <List
        height={700} // Height of the container
        itemCount={data.length} // Total number of items
        itemSize={getItemHeight} // Function to get height for each item
        // width={300} // Width of the container
      >
        {Row}
      </List>
    </div>
  );
};

export default VirtualizedList;
