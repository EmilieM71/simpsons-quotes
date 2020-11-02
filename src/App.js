import React from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import QuoteCards from "./components/QuoteCard";

const NelsonMuntz = {
  character: "Nelson Muntz",
  image:
    "https://pm1.narvii.com/7070/aeaeadea89d89327a8e5f4f83d10272dc337425fr1-1200-1200v2_128.jpg",
  quote:
    "Shoplifting is a victimless crime, like punching someone in the dark.",
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: NelsonMuntz,
    };
    this.getQuotes = this.getQuotes.bind(this);
  }

  getQuotes() {
    axios
      .get("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then((response) => response.data)
      .then((data) => {
        console.log(data[0]);
        this.setState({ quotes: data[0] });
      });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <QuoteCards quotes={this.state.quotes} />
        <button type="button" onClick={this.getQuotes}>
          Get quotes
        </button>
      </div>
    );
  }
}

export default App;
