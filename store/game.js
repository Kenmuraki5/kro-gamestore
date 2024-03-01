import { defineStore } from "pinia";
export const useGameStore = defineStore("game", {
    state:()=>({
        game: []
    }),
    actions:{
        add(item){
            this.game.push(item);
        },
        remove(index){
            this.game.splice(index, 1);
        },
        edit(index, item){
            this.game[index] = item;
        },
        async fetchGame(){
            // this.game = await fetch('https://fakestoreapi.com/products').then(res => res.json());
            // mock data
            this.game = [
                {   
                    id:3,
                    name: "Fifa 24",
                    description: "FIFA 24 is a football simulation video game published by Electronic Arts as part of the FIFA series. It is the 27th installment in the FIFA series, and was released on 9 October 2021 for Microsoft Windows, Nintendo Switch, PlayStation 4 and Xbox One.",
                    price: 59.99,
                    imageUrl: [
                        "https://www.ea.com/games/fifa/fifa-24",
                    ],
                    type: "game",
                    
                },
                {
                    id:4,
                    name: "NBA 2k24",
                    description: "NBA 2K24 is a basketball simulation video game developed by Visual Concepts and published by 2K Sports, based on the National Basketball Association (NBA). It is the 23rd installment in the NBA 2K franchise and the successor to NBA 2K23.",
                    price: 59.99,
                    imageUrl: [
                        "https://www.2k.com/games/nba-2k24",
                    ],
                    type: "game",

                }
             ,
            ];
        }

    }
});
