<template>

  
  <div class="m-10">
    <h1 class="hot-deals-title text-center md:text-left">Top Game Hot deals</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 m-5 gap-4">
      <div v-for="(game, index) in gameStore.games" :key="index" class="hover:-translate-y-6 duration-300 ease-in-out">
        <NuxtLink :to="'CD-game/'+game.Id"><img class="w-full h-auto rounded game-img" :src="game.images[0]" v-if="game.images[0] !== ''" alt="Game Image"></NuxtLink>
        <h1 class="game-name" v-if="game.images[0] !== ''">{{ game.name }}</h1>
      </div>
    </div>
  </div>

  <div class="m-4">
    <h1 class="hot-deals-title ml-10"> Nintendo</h1>
    <div class=" ml-10 mr-10">
      <Carousel :items-to-show="2">
        <Slide v-for="(game, index) in gameStore.games" :key="index">
          <div class="grid grid-rows-1.5 m-5 gap-4 carousel__item2 rounded" v-if="index < gameStore.games.length">
            <div>
              <NuxtLink :to="'CD-game/'+game.Id">
              <img :src="game.images[0]" alt="Game Image" v-if="game.src != ''" />
            </NuxtLink>
            </div>

            <div class="h-20">
              <h1 class="game-label text-black text-2xl">{{ game.name }}</h1>
              <h2 style="color: #555;">{{ game.genre[0] }}</h2>
            </div>
          </div>
        </Slide>
        <!-- viewMore -->
        <Slide v-if="game_types.length > 0" :key="'extra_slide'">
          <NuxtLink to="CD-game">
            <h1 class="game-label view-more m-2 text-blue-700 text-3xl mb-16"> View More</h1>
          </NuxtLink>
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </div>

  <div class="m-4">
    <h1 class="hot-deals-title ml-10"> Console </h1>
    <div class=" ml-10 mr-10">
      <Carousel :items-to-show="2">
        <Slide v-for="(console, index) in gameConsoleStore.gameConsoles" :key="index">
          <div class="grid grid-rows-1.5 m-5 gap-4 carousel__item2 rounded" v-if="index < gameConsoleStore.gameConsoles.length">
            <div>
              <NuxtLink :to="'game-console/'+ console.Id">
              <img :src="console.images[0]" alt="Game Image" v-if="console.images[0] != ''" />
            </NuxtLink>
            </div>

            <div class="h-20">
              <h1 class="game-label text-black text-2xl">{{ console.name }}</h1>
              <h2 style="color: #555;">console device</h2>
            </div>
          </div>
        </Slide>
        <!-- viewMore -->
        <Slide v-if="game_types.length > 0" :key="'extra_slide'">
          <NuxtLink to="game-console">
            <h1 class="game-label view-more m-2 text-blue-700 text-3xl mb-16"> View More</h1>
          </NuxtLink>
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </div>



</template>

<script setup>
import { useGameStore } from "@/store/game";
const gameStore = useGameStore();
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import { useGameConsoleStore } from "@/store/console";

const gameConsoleStore = useGameConsoleStore();


const games = [
  {
    src: "https://gmedia.playstation.com/is/image/SIEPDC/ea-sports-fc-store-art-01-en-27sept23?$1200px$"
    , name: 'EA Sports FIFA 24'
  },
  {
    src: "https://gmedia.playstation.com/is/image/SIEPDC/hogwarts-packshot-thumb-01-en-12jan21.jpg?$1200px$"
    , name: "Hogwarts Legacy"
  },
  { src: "https://gmedia.playstation.com/is/image/SIEPDC/alan-wake-pack-01-en-30oct23?$1200px$", name: "Hogwarts Legacy" },
  { src: "https://gmedia.playstation.com/is/image/SIEPDC/call-of-duty-modern-warfare-3-pack-01-en-22aug23?$1200px$", name: "Hogwarts Legacy" },
  { src: "https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/B2aUYFC0qUAkNnjbTHRyhrg3.png", name: "Hogwarts Legacy" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEiLt4Z7fHkS_UFcP2kd8F0Fogaq31wU195g3Q4RZBFYFaFNog0CGDTejP0wDHF09ibnk&usqp=CAU", name: "Hogwarts Legacy" },
  { src: "https://image.api.playstation.com/vulcan/ap/rnd/202308/0106/1d4e7b816927506b5ccdefb10b365312cc1a69c88335a8b0.png", name: "Hogwarts Legacy" },
  { src: "https://image.api.playstation.com/vulcan/ap/rnd/202308/0106/1d4e7b816927506b5ccdefb10b365312cc1a69c88335a8b0.png", name: "Hogwarts Legacy" },
  { src: "https://image.api.playstation.com/vulcan/ap/rnd/202308/0106/1d4e7b816927506b5ccdefb10b365312cc1a69c88335a8b0.png", name: "Hogwarts Legacy" },
  { src: "https://image.api.playstation.com/vulcan/ap/rnd/202308/0106/1d4e7b816927506b5ccdefb10b365312cc1a69c88335a8b0.png", name: "Last hog" }
  // { src: "", name: "View more" }

]
// games.push({src:"", name:"View more"})


const game_types = [
  {
    name: "CD games",
    games: [
      {
        src: "https://gmedia.playstation.com/is/image/SIEPDC/ea-sports-fc-store-art-01-en-27sept23?$1200px$"
        , name: 'EA Sports FIFA 24'
      },
      {
        src: "https://gmedia.playstation.com/is/image/SIEPDC/hogwarts-packshot-thumb-01-en-12jan21.jpg?$1200px$"
        , name: "Hogwarts Legacy"
      },
      { src: "https://gmedia.playstation.com/is/image/SIEPDC/alan-wake-pack-01-en-30oct23?$1200px$", name: "alan-wake" },
      { src: "https://gmedia.playstation.com/is/image/SIEPDC/call-of-duty-modern-warfare-3-pack-01-en-22aug23?$1200px$", name: "call-of-duty" },
      { src: "https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/B2aUYFC0qUAkNnjbTHRyhrg3.png", name: "Hogwarts Legacy" },
      { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEiLt4Z7fHkS_UFcP2kd8F0Fogaq31wU195g3Q4RZBFYFaFNog0CGDTejP0wDHF09ibnk&usqp=CAU", name: "Hogwarts Legacy" },
      { src: "https://image.api.playstation.com/vulcan/ap/rnd/202308/0106/1d4e7b816927506b5ccdefb10b365312cc1a69c88335a8b0.png", name: "Hogwarts Legacy" },
      { src: "https://image.api.playstation.com/vulcan/ap/rnd/202308/0106/1d4e7b816927506b5ccdefb10b365312cc1a69c88335a8b0.png", name: "Hogwarts Legacy" },
      { src: "https://image.api.playstation.com/vulcan/ap/rnd/202308/0106/1d4e7b816927506b5ccdefb10b365312cc1a69c88335a8b0.png", name: "Hogwarts Legacy" },
      { src: "https://image.api.playstation.com/vulcan/ap/rnd/202308/0106/1d4e7b816927506b5ccdefb10b365312cc1a69c88335a8b0.png", name: "Last hog" }

    ],
    link: "/CD-game"
  },
  {
    name: "Console games",
    games: [
      {
        src: "https://gmedia.playstation.com/is/image/SIEPDC/ea-sports-fc-store-art-01-en-27sept23?$1200px$"
        , name: 'EA Sports FIFA 24'
      },
      {
        src: "https://gmedia.playstation.com/is/image/SIEPDC/hogwarts-packshot-thumb-01-en-12jan21.jpg?$1200px$"
        , name: "Hogwarts Legacy"
      },
      { src: "https://gmedia.playstation.com/is/image/SIEPDC/alan-wake-pack-01-en-30oct23?$1200px$", name: "alan-wake" },
      { src: "https://gmedia.playstation.com/is/image/SIEPDC/call-of-duty-modern-warfare-3-pack-01-en-22aug23?$1200px$", name: "call-of-duty" },
      { src: "https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/B2aUYFC0qUAkNnjbTHRyhrg3.png", name: "Hogwarts Legacy" },
      { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEiLt4Z7fHkS_UFcP2kd8F0Fogaq31wU195g3Q4RZBFYFaFNog0CGDTejP0wDHF09ibnk&usqp=CAU", name: "Hogwarts Legacy" },
      { src: "https://image.api.playstation.com/vulcan/ap/rnd/202308/0106/1d4e7b816927506b5ccdefb10b365312cc1a69c88335a8b0.png", name: "Hogwarts Legacy" },
      { src: "https://image.api.playstation.com/vulcan/ap/rnd/202308/0106/1d4e7b816927506b5ccdefb10b365312cc1a69c88335a8b0.png", name: "Hogwarts Legacy" },
      { src: "https://image.api.playstation.com/vulcan/ap/rnd/202308/0106/1d4e7b816927506b5ccdefb10b365312cc1a69c88335a8b0.png", name: "Hogwarts Legacy" },
      { src: "https://image.api.playstation.com/vulcan/ap/rnd/202308/0106/1d4e7b816927506b5ccdefb10b365312cc1a69c88335a8b0.png", name: "Last hog" }

    ],
    link: "/game-console"
  },
]

const console = [
  { src: "https://dl.lnwfile.com/thzz3y.webp" },
  { src: "https://gmedia.playstation.com/is/image/SIEPDC/dualsense-range-stacked-image-block-01-en-11feb22?$1200px$" },
  { src: "https://images.droidsans.com/wp-content/uploads/2023/08/abd09fe9ea04916658f038e19df8101ff687e287-scaled-1.jpg" },
  { src: "https://static-jaymart.com/ecom/public/2NzQP8mwKYj6Y55Nf57IIF38Nad.jpg" },
  { src: "https://gmedia.playstation.com/is/image/SIEPDC/ps4-product-thumbnail-01-en-14sep21?$facebook$" },
  { src: "data:image/jpeg;base64,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PvSRxOmhHmQfeFbkeRrY9PvX49Rz4cUF5oJBI8ePC9lbeX/w8NCCNdTx14Wt7ir0R7vXnbr6KlpHsf5RcW9UFgyPv3S0+ZHs+HisyKYW1cL89QrDnC1wwg/lAVMZHHLbzAQZm9b1HvCqa6+o1VljgeQ9yrugomGqqhdyR+oWPmsgzLpdWWTAqvMgruiozL1jroK0REEX9uWCPkhiqI25tySHjoCQQT4XFv1KGqvEmSaE2I4X4kePiOC+sZ4Q9pa4XBBBB5gqHtsey+I7wwfuXP1DS0GN5F7Brz3ojqeZHpZblSogzKuixN9PNFURGz4ntkb45Tq0+BFwfAlYtZTSQPMcrHRuGuV4INjwIvxB5HgVm7P4NNXTNgpmF73HU/hjbzfI78LR/wDBckBET52j7aNjwcVFO6zqxjI6c8271t3O8C1mbydZfPMJsF9B7bdnm+wqGkpjmkpGtdDew3xa0te0k6AuuSOVwOAXz2ad4l3BY5smcRmNzSHh5Nspadb35KRauxyAnU26rYfbhI3cxXcXENFtcx5m3Gw+JK6am7JZDYzVUbBzaA57gehAs2/k4qTNh9gaeB+/y7x4taRzGsGgAG7jaLAWHHU+OpWkdDsDhDqWhhieLOsXvHQvN7el7ei6FEXNoREQEREBERAREQEREFJYDxAVDqdp4j4kK6iC2IR1KbrxPwVxEFvdeJVJpweqvIgtCnHj71Vuh/RKrRBRuh/RKpMDenxKuogtfZ29PiV6IR/RKuIgt7kdPmqmMA4CyqRAREQF45oIsRcdCvUQazGdnqWqAFVTxT5ful7AS2/JruIHkruE4PT0rCylgjgaTciNjW5jwu633j4lZyIC1eJbO0k72yT00UkjbFsjmNztsbiz+IsfFbREGNHh8TdRGwHrlF/eslEQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH//2Q==" }
]

</script>


<style>
.game-name {
  text-align: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #71BDC1;
}

.game-img {
  justify-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #71BDC1;
}

.game-lebel {
  text-align: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #86ff16;

}

.hot-deals-title {
  text-align: left;
  font-size: 2rem;
  font-weight: bold;
  /* color: #FF5733; */
  color: #000;

}

.viewMore {
  position: relative;
  color: #000;
  right: 50%;
}
</style>