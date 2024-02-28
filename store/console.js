import { defineStore } from "pinia";
export const useGameConsoleStore = defineStore("gameConsole", {
  state: () => ({
    gameConsole: [],
  }),
  actions: {
    add(item) {
      this.gameConsole.push(item);
    },
    remove(index) {
      this.gameConsole.splice(index, 1);
    },
    edit(index, item) {
      this.gameConsole[index] = item;
    },
    async fetchGameConsole() {
      // this.gameConsole = await fetch('https://fakestoreapi.com/products').then(res => res.json());

      //mock data
      this.gameConsole = [
        {
          id: 1,
          name: "Playstation 5",
          description:
            "The PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020, in Australia, Japan, New Zealand, North America, and South Korea, with worldwide release following a week later.",
          price: 499.99,
          imageUrl: [
            "https://dl.lnwfile.com/thzz3y.webp",
            "https://media-cdn.bnn.in.th/266271/Sony-PlayStation-5-Standard-(C-Chassis)-5.1-square_medium.jpg",
          ],
        },
        {
          id: 2,
          name: "Xbox Series X",
          description:
            "Xbox Series X is a home video game console developed by Microsoft. It was announced during E3 2019 as Project Scarlett and was released on November 10, 2020, as the fourth generation of the Xbox console family, succeeding Xbox One.",
          price: 499.99,
          imageUrl: ["https://www.xbox.com/en-US/consoles/xbox-series-x"],
        },
      ];
    },
  },
});
