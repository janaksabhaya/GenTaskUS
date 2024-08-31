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
  getWordColor: (word) => (word.value > 25 ? 'green' : 'purple'),
  onWordClick: (word) => alert(`You clicked on the word: ${word.text}`),
  onWordMouseOver: (word) => console.log(`Hovered over word: ${word.text}`),
  getWordTooltip: (word) =>
    `${word.text} (${word.value}) [${word.value > 25 ? 'positive' : 'negative'}]`,
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
const size = [648, 338];

// Word cloud component
const WordCloudPhases = ({words, title}) => {
  return (
    <div className="flex gap-4 mt-3 w-full">
      <div className="w-full p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
        <div className='flex justify-center'>
        <ReactWordcloud callbacks={callbacks} options={options} size={size} words={words} />
        </div>
      </div>
    </div>
  );
}
export default WordCloudPhases;
