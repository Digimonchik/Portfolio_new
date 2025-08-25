import React, { useState, useContext, useEffect } from "react";
import { observer } from "mobx-react";
import TopBar from "../../Components/TopBar/TopBar";
import Footer from "../../Components/Footer/Footer";
import { wordsContext } from "../../index";

const WordDefPage = () => {
  const [isOpen, setOpen] = useState(false);
  const [isEmpty, setEmpty] = useState(true);
  const [word, setWord] = useState("");
  const [wordObj, setObj] = useState([]);

  const { wordsStore } = useContext(wordsContext);

  const handleClick = () => {
    wordsStore.getinfo(word);
  };

  useEffect(() => {
    setObj(wordsStore.wordInfo);
  }, [wordsStore.wordInfo]);
  useEffect(
    () => (wordObj.length > 0 ? setEmpty(false) : setEmpty(true)),
    [wordObj.length]
  );

  console.log(isEmpty);

  return (
    <div className="word-page">
      <TopBar />

      <div className="word-page__container">
        <div className="word-page__description">
          Hi! This app is only aimed at showing the ability to use open source
          API. All data is taken from{" "}
          <a
            style={{ textDecoration: "none", color: "inherit" }}
            href="https://dictionaryapi.dev/"
          >
            {" "}
            https://dictionaryapi.dev/{" "}
          </a>
        </div>
        <div className="word-page__find">
          <input
            onChange={(event) => setWord(event.target.value)}
            vulue={word}
            className="word-page__find_input"
          ></input>
          <div onClick={() => handleClick()} className="word-page__find_button">
            Find word
          </div>
        </div>
        <div className="word-page__transcript">
          <div className="word-page__transcript_word">
            {" "}
            {!isEmpty ? wordObj[0].word : ""}
          </div>
          <div className="word-page__transcript_letters">
            {!isEmpty ? wordObj[0].phonetic : ""}
          </div>
        </div>
        <div
          className={
            isOpen
              ? `word-page__definitions_button isclosed`
              : `word-page__definitions_button isopen`
          }
          onClick={() => setOpen(!isOpen)}
        >
          open definitions
        </div>
        <div
          className={
            isOpen ? "word-page__definitions" : "word-page__definitions hiden"
          }
        >
          {!isEmpty
            ? wordObj[0].meanings[0].definitions
                .slice(0, 2)
                .map((element) => (
                  <div className="word-page__definitions_definition">
                    {element.definition}
                  </div>
                ))
            : ""}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default observer(WordDefPage);
