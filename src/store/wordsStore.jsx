import {makeAutoObservable} from "mobx";
import axios from 'axios'


export default class WordsStore {
    
wordInfo = []

    constructor() {
        makeAutoObservable(this);
    }


    async getinfo(word) {
        try {
            const response = await axios.get(
              `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
            
            );
           this.wordInfo = response.data

          } catch (error) {
          }
    }
}