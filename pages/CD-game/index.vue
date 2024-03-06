<template>
    <div class="bg-white">
        <div>
            <!-- Mobile filter dialog -->
            <TransitionRoot as="template" :show="mobileFiltersOpen">
                <Dialog as="div" class="relative z-40 lg:hidden" @close="mobileFiltersOpen = false">
                    <TransitionChild as="template" enter="transition-opacity ease-linear duration-300"
                        enter-from="opacity-0" enter-to="opacity-100"
                        leave="transition-opacity ease-linear duration-300" leave-from="opacity-100"
                        leave-to="opacity-0">
                        <div class="fixed inset-0 bg-black bg-opacity-25" />
                    </TransitionChild>

                    <div class="fixed inset-0 z-40 flex">
                        <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
                            enter-from="translate-x-full" enter-to="translate-x-0"
                            leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0"
                            leave-to="translate-x-full">
                            <DialogPanel
                                class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                                <div class="flex items-center justify-between px-4">
                                    <h2 class="text-lg font-medium text-gray-900">Filters</h2>
                                    <button type="button"
                                        class="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                        @click="mobileFiltersOpen = false">
                                        <span class="sr-only">Close menu</span>
                                        <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>

                                <!-- Filters -->
                                <div class="mt-4 border-t border-gray-200">
                                    <h3 class="sr-only">Categories</h3>
                                    <ul role="list"
                                        class="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                                        <div v-for="product in subCategories" :key="product.id"
                                            class="flex items-center">
                                            <input type="radio" :id="`filter-${product.id}`" :name="'category'"
                                                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                            <label :for="`filter-${product.id}`" class="ml-3 text-sm text-gray-600">{{
                product.name }}</label>
                                        </div>
                                    </ul>

                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </Dialog>
            </TransitionRoot>

            <main class="mx-auto md:mx-20 px-4 sm:px-6 lg:px-8">
                <div class="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-12">
                    <h1 class="text-4xl font-bold tracking-tight text-gray-900">{{ $route.name }}</h1>

                    <div class="flex items-center">
                        <Menu as="div" class="relative inline-block text-left">
                            <div>
                                <MenuButton
                                    class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                    Sort
                                    <ChevronDownIcon
                                        class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                        aria-hidden="true" />
                                </MenuButton>
                            </div>

                            <transition enter-active-class="transition ease-out duration-100"
                                enter-from-class="transform opacity-0 scale-95"
                                enter-to-class="transform opacity-100 scale-100"
                                leave-active-class="transition ease-in duration-75"
                                leave-from-class="transform opacity-100 scale-100"
                                leave-to-class="transform opacity-0 scale-95">
                                <MenuItems
                                    class="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div class="py-1">
                                        <MenuItem v-for="option in sortOptions" :key="option.name" v-slot="{ active }">
                                        <a @click="selectedSortOption = option"
                                            :class="[option.current ? 'font-medium text-gray-900' : 'text-gray-500', active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm']">{{
                option.name }}</a>
                                        </MenuItem>
                                    </div>
                                </MenuItems>
                            </transition>
                        </Menu>



                        <button type="button" class="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                            <span class="sr-only">View grid</span>
                            <Squares2X2Icon class="h-5 w-5" aria-hidden="true" />
                        </button>
                        <button type="button" class="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                            @click="mobileFiltersOpen = true">
                            <span class="sr-only">Filters</span>
                            <FunnelIcon class="h-5 w-5" aria-hidden="true" />
                        </button>
                    </div>
                </div>

                <section aria-labelledby="products-heading" class="pb-24 pt-6">
                    <h2 id="products-heading" class="sr-only">Products</h2>

                    <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                        <!-- Filters -->
                        <div class="hidden lg:block">
                            <h3 class="sr-only">Categories</h3>
                            <ul role="list"
                                class="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                                <div v-for="product, index in brand" :key="product.id" class="flex items-center">
                                    <input id="radio-group-{{ index }}" name="category" :value="product.name"
                                        type="radio" v-model="selectedBrand"
                                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                    <label :for="`filter-${product.id}`" class="ml-3 text-sm text-gray-600">{{
                product.name }}</label>
                                </div>
                            </ul>

                            <Disclosure as="div" class="border-b border-gray-200 py-6" v-slot="{ open }">
                                <h3 class="-my-3 flow-root">
                                    <DisclosureButton
                                        class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                        <span class="font-medium text-gray-900">Price</span>
                                        <span class="ml-6 flex items-center">
                                            <PlusIcon v-if="!open" class="h-5 w-5" aria-hidden="true" />
                                            <MinusIcon v-else class="h-5 w-5" aria-hidden="true" />
                                        </span>
                                    </DisclosureButton>
                                </h3>
                                <DisclosurePanel class="pt-6">
                                    <div class="space-y-4">
                                        <div v-for="(option, optionIdx) in price.options" :key="option.value"
                                            class="flex items-center">
                                            <input :name="'priceOptions'" :value="option.value" type="checkbox"
                                                v-model="selectedPriceOptions"
                                                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                            <label :for="`filter-${option.id}-${optionIdx}`"
                                                class="ml-3 text-sm text-gray-600">{{ option.label }}</label>
                                        </div>
                                    </div>
                                </DisclosurePanel>
                            </Disclosure>
                            <Disclosure as="div" class="border-b border-gray-200 py-6" v-slot="{ open }">
                                <h3 class="-my-3 flow-root">
                                    <DisclosureButton
                                        class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                        <span class="font-medium text-gray-900">Genre</span>
                                        <span class="ml-6 flex items-center">
                                            <PlusIcon v-if="!open" class="h-5 w-5" aria-hidden="true" />
                                            <MinusIcon v-else class="h-5 w-5" aria-hidden="true" />
                                        </span>
                                    </DisclosureButton>
                                </h3>
                                <DisclosurePanel class="pt-6">
                                    <div class="space-y-4">
                                        <div v-for="(option, optionIdx) in genre.options" :key="option.value"
                                            class="flex items-center">
                                            <input :name="'priceOptions'" :value="option.value" type="checkbox"
                                                v-model="selectedGenreOptions"
                                                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                            <label :for="`filter-${option.id}-${optionIdx}`"
                                                class="ml-3 text-sm text-gray-600">{{ option.label }}</label>
                                        </div>
                                    </div>
                                </DisclosurePanel>
                            </Disclosure>
                        </div>

                        <!-- Product grid -->
                        <div class="lg:col-span-3">
                            <!-- Your content -->
                            <div class="container mx-auto">
                                <GridGame :games="filteredGames"></GridGame>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/vue/20/solid'
import { useGameStore } from '~/store/game'

const gameStore = useGameStore()

const sortOptions = [
    { name: 'Most Popular', current: false, key: 'popularity' },
    { name: 'Best Rating', current: false, key: 'rating' },
    { name: 'Newest', current: false, key: 'date' },
    { name: 'Price: Low to High', current: false, key: 'priceLow' },
    { name: 'Price: High to Low', current: false, key: 'priceHigh' },
]

const brand = [
    { name: 'All Game' },
    { name: 'Microsoft' },
    { name: 'Sony' },
    { name: 'Nintendo' },
    { name: 'EA' },
    { name: 'Nexon' },
    { name: 'Bandai' },
    { name: 'Konami' },
    { name: 'Capcom' }
]

const price = {
    id: 'price',
    name: 'Price',
    options: [
        { value: '0 99', label: 'less than 100 ฿', checked: false },
        { value: '100 300', label: '100 - 300 ฿', checked: false },
        { value: '300 500', label: '300 - 500 ฿', checked: false },
        { value: '500 700', label: '500 - 700 ฿', checked: false },
        { value: '700 1000', label: '700 - 1000 ฿', checked: false },
        { value: '1001 1000000', label: 'more than 1000 ฿', checked: false },
    ],
}

const genre = {
    id: 'genre',
    name: 'genre',
    options: [
        { value: 'Action', label: 'Action', checked: false },
        { value: 'Sport', label: 'Sport', checked: false },
        { value: 'Shooter Game', label: 'Shooter Game', checked: false },
        { value: 'Survival games', label: 'Survival games', checked: false },
        { value: 'Puzzle', label: 'Puzzle', checked: false },
        { value: 'Anime', label: 'Anime', checked: false },
        { value: 'Rhythm games', label: 'Rhythm games', checked: false },
        { value: 'Battle Royale games', label: 'Battle Royale games', checked: false },
    ],
}
const selectedSortOption = ref(sortOptions[0]); 

const selectedBrand = ref("All Game")
const selectedPriceOptions = ref([])
const selectedGenreOptions = ref([])

const filteredGames = computed(() => {
    let filtered = gameStore.games.filter(game => {
        const categoryMatch = selectedBrand.value === "All Game" || game.brand === selectedBrand.value;

        const priceMatch = selectedPriceOptions.value.length === 0 || selectedPriceOptions.value.some(option => {
            const [min, max] = option.split(' ');
            const gamePrice = parseFloat(game.price);
            return gamePrice >= parseFloat(min) && gamePrice <= parseFloat(max);
        });

        const genreMatch = selectedGenreOptions.value.length === 0 || selectedGenreOptions.value.some(option => {
            return game.genre.includes(option);
        });

        return categoryMatch && priceMatch && genreMatch;
    });

    // Sorting the filtered games based on the selected sort option
    if (selectedSortOption.value.key === 'popularity') {
        filtered.sort((a, b) => b.popularity - a.popularity);
    } else if (selectedSortOption.value.key === 'rating') {
        filtered.sort((a, b) => b.rating - a.rating);
    } else if (selectedSortOption.value.key === 'date') {
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (selectedSortOption.value.key === 'priceLow') {
        filtered.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (selectedSortOption.value.key === 'priceHigh') {
        filtered.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }

    return filtered;
})

const mobileFiltersOpen = ref(false)
</script>