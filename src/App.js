import React from 'react';
import Navbar from './components/Navbar'
import QuoteCards from './components/QuoteCard'

const NelsonMuntz = {
  author: {
    character: "Nelson Muntz",
    image: "https://pm1.narvii.com/7070/aeaeadea89d89327a8e5f4f83d10272dc337425fr1-1200-1200v2_128.jpg"
  },
  quote: "Shoplifting is a victimless crime, like punching someone in the dark."
}

const ComicBookGuy = {
  author: {
    character: "Comic Book Guy",
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FComicBookGuy.png?1497567511970"
  },
  quote: "Last night's 'Itchy and Scratchy' was, without a doubt, the worst episode ever. Rest assured that I was on the Internet within minutes, registering my disgust throughout the world."
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <QuoteCards user={NelsonMuntz}/>
      <QuoteCards user={ComicBookGuy} />
    </div>
  );
}

export default App;
