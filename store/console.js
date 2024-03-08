import { defineStore } from "pinia";
export const useGameConsoleStore = defineStore("gameConsole", {
  state: () => ({
    gameConsoles: [],
  }),
  actions: {
    add(item) {
      this.gameConsoles.push(item);
    },
    remove(index) {
      this.gameConsoles.splice(index, 1);
    },
    edit(index, item) {
      this.gameConsoles[index] = item;
    },
    async fetchGameConsole() {
      try {
        const { $api } = useNuxtApp()
        const gameConsoles = await $api('consoles', {
          method: 'GET',
        });
        if (gameConsoles == null){
          return this.gameConsoles = [];
        }
        this.gameConsoles = gameConsoles.map(gameConsole => {
          return {
              type: 'Console',
              ...gameConsole
          };
      });
      } catch (error) {
        console.log(error)
      }

      //mock data
      // this.gameConsoles = [
      //   {
      //     id: 1,
      //     name: "Playstation 5",
      //     description:
      //       "The PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020, in Australia, Japan, New Zealand, North America, and South Korea, with worldwide release following a week later.",
      //     price: 499.99,
      //     imageUrl: [
      //       "https://dl.lnwfile.com/thzz3y.webp",
      //       "https://media-cdn.bnn.in.th/266271/Sony-PlayStation-5-Standard-(C-Chassis)-5.1-square_medium.jpg",
      //     ],
      //     type: "console",

      //   },
      //   {
      //     id: 2,
      //     name: "Xbox Series X",
      //     description:
      //       "Xbox Series X is a home video game console developed by Microsoft. It was announced during E3 2019 as Project Scarlett and was released on November 10, 2020, as the fourth generation of the Xbox console family, succeeding Xbox One.",
      //     price: 499.99,
      //     imageUrl: ["https://www.xbox.com/en-US/consoles/xbox-series-x"],
      //     type: "console",

      //   },
      // ];
    },
  },
});
