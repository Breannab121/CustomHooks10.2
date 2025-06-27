import React, { useState, useEffect } from 'react';

function DebounceDemo() {
  // State to hold the live input value
  const [inputValue, setInputValue] = useState('');

  // State to control debounce delay in milliseconds
  const [delay, setDelay] = useState(500);

  // State to hold the debounced value (after delay)
  const [debouncedValue, setDebouncedValue] = useState('');

  // State to store simulated search results
  const [results, setResults] = useState([]);

  // Debounce effect: updates debouncedValue after delay
  useEffect(() => {
    // Set a timeout to update debounced value
    const handler = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, delay);

    // Cleanup timeout if inputValue or delay changes before timer completes
    return () => clearTimeout(handler);
  }, [inputValue, delay]);

  // Effect to simulate search when debouncedValue changes
  useEffect(() => {
    if (debouncedValue.trim() !== '') {
      // Simulate search results based on debounced input
      const simulatedResults = [
        `Result for "${debouncedValue}": Item 1`,
        `Result for "${debouncedValue}": Item 2`,
        `Result for "${debouncedValue}": Item 3`,
      ];
      setResults(simulatedResults);
    } else {
      // Clear results if input is empty
      setResults([]);
    }
  }, [debouncedValue]);

  return (
    <div className="container2">
      <h2>Debounce Demo</h2>

      {/* Input field for user to type */}
      <label>
        Type something:
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ marginLeft: '8px' }}
        />
      </label>

      {/* Display current and debounced values */}
      <p>Live Input Value: {inputValue}</p>
      <p>Debounced Value: {debouncedValue}</p>

      {/* Input for adjusting debounce delay */}
      <label>
        Delay (ms):
        <input
          type="number"
          value={delay}
          onChange={(e) => setDelay(Number(e.target.value))}
          style={{ marginLeft: '8px' }}
        />
      </label>

      {/* Display simulated search results */}
      {results.length > 0 && (
        <div>
          <h3>Simulated Search Results:</h3>
          <ul>
            {results.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DebounceDemo;