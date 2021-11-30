import "./RandomQuote.css";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RandomQuote = (props) => {
  let twitterUrl =
    "https://twitter.com/intent/tweet?text=" +
    props.quote +
    " - " +
    props.author +
    "&url=https://quotequiz.netlify.app";

  return (
    <div className="random-quote">
      <p className="random-quote-text">"{props.quote}"</p>
      {/* just for testing */}
      {/* <h1> {props.author}</h1> */}
      <a class="twitter-share-button" href={twitterUrl}>
        <span> share on twitter </span>
        <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
      </a>
    </div>
  );
};

export default RandomQuote;
