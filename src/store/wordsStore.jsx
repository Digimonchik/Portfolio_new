import { makeAutoObservable } from "mobx";
import axios from "axios";

export default class WordsStore {
  wordInfo = [];
  searchHistory = [];

  constructor() {
    makeAutoObservable(this);
  }

  async getinfo(word) {
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      this.wordInfo = response.data;
    } catch (error) {}
  }
  updateHistory(word) {
    this.searchHistory.push(word);
    console.log(this.searchHistory);
  }
}
