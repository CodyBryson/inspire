//TODO create methods to retrieve data and update the State
import { ProxyState } from "../AppState.js";
import Quote from "../Models/Quote.js";
import { api } from "./AxiosService.js";
class QuoteService {
  async getQuote() {
    console.log("Getting Inspired");
    let res = await api.get('quotes');
    console.log(res.data)
    ProxyState.quotes = new Quote(res.data);
  }
}

const quoteService = new QuoteService();
export default quoteService;