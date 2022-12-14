import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    isAuth: false,
    cars: [],
    currentCar: {},
    limit: null,
    isAuth: false,
  },
  getters: {},
  methods: {},
  mutations: {
    setCurrentCar(state, value) {
      state.currentCar = value;
    },
    setLimit(state,value){
      state.limit=value
    },
    setAuthTrue(state) {
      state.isAuth = true;
    },
    setAuthFalse(state) {
      state.isAuth = false;
    },
    setCars(state, cars) {
      state.cars = cars;
    },
  },
  actions: {
    setCurrentCar({ commit, value }) {
      commit("setCurrentCar", value);
    },
    setAuthTrue({ commit }) {
      commit("setAuthTrue");
    },
    setAuthFalse({ commit }) {
      commit("setAuthFalse");
    },
    async getAllCars({ commit }) {
      const res = await axios.get("http://localhost:5000/cars/getAll");
      commit("setCars", res.data);
    },
    clientRequest({ commit, clientName, phoneNumber }) {
      commit("clientRequest", clientName, phoneNumber);
    },
    setFiltersValues({ commit }) {
      commit("setFiltersValues");
    },
    clientRequest(state, clientData) {
      const [clientName, phoneNumber] = clientData;
      let tg = {
        token: "5640775860:AAHGUG0ktr91Y6bjj8knbP7nkIdHCX89cNo", // Your bot's token that got from @BotFather
        chat_id: "676402625", // The user's(that you want to send a message) telegram chat id
      };
      const url = `https://api.telegram.org/bot${tg.token}/sendMessage`; // The url to request
      const obj = {
        chat_id: tg.chat_id, // Telegram chat id
        text: "Имя: \n" + clientName + "\n" + "Номер телефона:\n" + phoneNumber,
      };
      const xht = new XMLHttpRequest();
      xht.open("POST", url, true);
      xht.setRequestHeader("Content-type", "application/json; charset=UTF-8");
      xht.send(JSON.stringify(obj));
    },
  },
  modules: {},
});
