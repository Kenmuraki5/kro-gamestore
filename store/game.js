import { defineStore } from "pinia";
export const useGameStore = defineStore("game", {
    state: () => ({
        games: [],
    }),
    actions: {
        add(item) {
            this.games.push(item);
        },
        remove(index) {
            this.games.splice(index, 1);
        },
        edit(index, item) {
            this.games[index] = item;
        },
        async fetchGame() {
            try {
                const { $api } = useNuxtApp()
                this.games = await $api("games", {
                    method: 'GET',
                });
            } catch (error) {
                console.error('Fetch user failed:', error);
            }
        }
    }
});
