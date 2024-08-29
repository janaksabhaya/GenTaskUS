import React from 'react';
import ReactWordcloud from 'react-wordcloud';
import WordCloud from 'react-wordcloud';
// Define the words to be displayed in the word cloud
const words = [
    { text: 'Thank', value: 64 },
    { text: 'patience', value: 30 },
    { text: 'help', value: 25 },
    { text: 'appreciate', value: 20 },
    { text: 'understanding', value: 15 },
    { text: 'choosing', value: 10 },
    { text: 'value', value: 10 },
    { text: 'us', value: 10 },
    { text: 'business', value: 10 },
    { text: 'Unresolved', value: 50 },
    { text: 'issue', value: 30 },
    { text: 'Poor', value: 25 },
    { text: 'service', value: 20 },
    { text: 'Billing', value: 15 },
    { text: 'Rude', value: 10 },
    { text: 'errors', value: 10 },
    { text: 'behavior', value: 10 },
    { text: 'response', value: 10 },
  ];
  
  // Define callbacks for interacting with the word cloud
  const callbacks = {
    getWordColor: (word) => (word.value > 50 ? 'green' : 'purple'),
    onWordClick: (word) => alert(`You clicked on the word: ${word.text}`),
    onWordMouseOver: (word) => console.log(`Hovered over word: ${word.text}`),
    getWordTooltip: (word) =>
      `${word.text} (${word.value}) [${word.value > 50 ? 'positive' : 'negative'}]`,
  };
  
  // Define options for word cloud layout
  const options = {
    rotations: 2,
    rotationAngles: [-90, 0],
    fontSizes: [10, 60],
    scale: 'sqrt',
    spiral: 'archimedean',
    transitionDuration: 1000,
  };
  
  // Set size for the word cloud
  const size = [700, 500];
  
  // Word cloud component
  function WordCloudPhases() {
    return (
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2 p-4 bg-blue-100 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Top 5 Phrases (Positive & Negative)</h2>
          <ReactWordcloud callbacks={callbacks} options={options} size={size} words={words} />
        </div>
      </div>
    );
  }
export default WordCloudPhases;
