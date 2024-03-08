<template>
  <div class="flex h-fit">
    <aside
      class="flex flex-col min-w-40 w-40 h-screen min-h-screen px-5 py-8 bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700"
    >
      <div class="flex flex-col justify-between flex-1 mt-6">
        <nav class="-mx-3 space-y-6">
          <div class="space-y-3">
            <label
              class="px-3 text-xs text-gray-500 font-['kanit'] uppercase dark:text-gray-400"
              >Admin Page</label
            >

            <div
              @click="selectedSide = 'addProduct'"
              class="flex items-center px-3 py-2 text-gray-600 font-['kanit'] transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            >
              <PlusCircleIcon class="h-6 w-6" aria-hidden="true" />
              <span class="mx-2 text-sm font-['kanit'] font-medium"
                >เพิ่มสินค้า</span
              >
            </div>
            <div
              @click="selectedSide = 'productList', fetchProduct()"
              class="flex items-center px-3 py-2 text-gray-600 font-['kanit'] transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            >
              <ListBulletIcon class="h-6 w-6" aria-hidden="true" />
              <span class="mx-2 text-sm font-['kanit'] font-medium"
                >รายการสินค้า</span
              >
            </div>
            <div
              @click="selectedSide = 'orderList'"
              class="flex items-center px-3 py-2 text-gray-600 font-['kanit'] transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            >
              <TruckIcon class="h-6 w-6" aria-hidden="true" />
              <span class="mx-2 text-sm font-['kanit'] font-medium"
                >รายการสั่งซื้อ</span
              >
            </div>
            <div
              @click="selectedSide = 'userList'"
              class="flex items-center px-3 py-2 text-gray-600 font-['kanit'] transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            >
              <UserGroupIcon class="h-6 w-6" aria-hidden="true" />
              <span class="mx-2 text-sm font-['kanit'] font-medium"
                >รายชื้อผู้ใช้</span
              >
            </div>
          </div>
        </nav>
      </div>
    </aside>
    <div class="h-screen min-h-screen overflow-y-auto">
      <table v-if="selectedSide == 'productList'">
        <thead>
          <tr class="sticky top-0 bg-white">
            <th class="font-['kanit'] border px-4 py-2">Product ID</th>
            <th class="font-['kanit'] border px-4 py-2">รูป</th>
            <th class="font-['kanit'] border px-4 py-2">ชื่อสินค้า</th>
            <th class="font-['kanit'] border px-4 py-2">รายละเอียดสินค้า</th>
            <th class="font-['kanit'] border px-4 py-2">ประเภท</th>
            <th class="font-['kanit'] border px-4 py-2">เครื่องที่รองรับ</th>
            <th class="font-['kanit'] border px-4 py-2">เเนวเกม</th>
            <th class="font-['kanit'] border px-4 py-2">ราคา</th>
            <th class="font-['kanit'] border px-4 py-2">คงเหลือ</th>
            <th class="font-['kanit'] border px-4 py-2">วันที่วางขาย</th>
            <th class="font-['kanit'] border px-4 py-2">แก้ไข</th>
            <th class="font-['kanit'] border px-4 py-2">ลบ</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.Id">
            <td class="font-['kanit'] border px-4 py-2">{{ item.Id }}</td>
            <td class="font-['kanit'] border px-4 py-2">
              <img :src="item.images[0]" alt="" class="h-16 w-16 object-cover" />
            </td>
            <td class="font-['kanit'] border px-4 py-2">{{ item.name }}</td>
            <td class="font-['kanit'] border px-4 py-2">
              {{ item.description }}
            </td>
            <td class="font-['kanit'] border px-4 py-2">{{ item.type }}</td>

            <template v-if="(item.type = 'game')">
              <td class="font-['kanit'] border px-4 py-2">{{ item.genre }}</td>
              <td class="font-['kanit'] border px-4 py-2">
                {{ item.supDevice }}
              </td>
            </template>

            <td class="font-['kanit'] border px-4 py-2">{{ item.price }}</td>
            <td class="font-['kanit'] border px-4 py-2">{{ item.stock }}</td>
            <td class="font-['kanit'] border px-4 py-2">
              {{ item.releaseDate }}
            </td>
            <td class="font-['kanit'] border px-4 py-2">
              <PencilSquareIcon class="h-6 w-6" aria-hidden="true" />
            </td>
            <td class="font-['kanit'] border px-4 py-2">
              <button>
                <TrashIcon
                  @click="deleteProductById(item.type, item.Id)"
                  class="h-6 w-6"
                  aria-hidden="true"
                />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="selectedSide == 'addProduct'">
        {{products}}
        <div class="m-10 flex flex-col space-y-4">
          <div>
            <label class="text-lg font-['kanit'] text-gray-500"
              >ชื่อสินค้า</label
            >
            <input
              id="name"
              name="name"
              v-model="newProduct.name"
              class="block w-full rounded font-['kanit'] border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-base text-gray-500 placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-gray-300"
            />
          </div>
          <div class="relative">
            <label
              for="description"
              class="text-lg font-['kanit'] text-gray-500 mt-5"
              >รายละเอียดสินค้า</label
            >
            <textarea
              id="description"
              name="description"
              v-model="newProduct.description"
              class="block w-full rounded font-['kanit'] border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-base text-gray-500 placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-gray-300"
            />
          </div>
          <div>
            <label for="type" class="text-lg font-['kanit'] text-gray-500"
              >ประเภท</label
            >
            <select
              v-model="newProduct.type"
              name="type"
              id="type"
              class="block w-full rounded font-['kanit'] border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-base text-gray-500 placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-gray-300"
            >
              <option value="" selected disabled>ประเภท</option>
              <option value="Game">เกม</option>
              <option value="Console">เครื่องคอนโซล</option>
            </select>
          </div>

          <div v-if="newProduct.type == 'Game'" class="mr-6 flex flex-wrap">
            <div class="mr-5 flex flex-col">
              <label for="price" class="text-lg font-['kanit'] text-gray-500"
                >เเนวเกม</label
              >
              <select
                v-model="newProduct.genre"
                data-placeholder="Begin typing a name to filter..."
                multiple
                class="block w-full rounded font-['kanit'] border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-base text-gray-500 placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-gray-300"
                name="test"
              >
                <option
                  v-for="item in genre.options"
                  :key="item.value"
                  :value="item.value"
                >
                  {{ item.value }}
                </option>
              </select>
            </div>
            <div class="mr-5">
              <label for="stock" class="text-lg font-['kanit'] text-gray-500"
                >เครื่องที่รองรับ</label
              >
              <select
                v-model="newProduct.supDevice"
                name="type"
                id="type"
                data-placeholder="Begin typing a name to filter..."
                multiple
                class="block w-full rounded font-['kanit'] border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-base text-gray-500 placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-gray-300"
              >
                <option
                  v-for="item in supDevice.options"
                  :key="item.value"
                  :value="item.value"
                >
                  {{ item.value }}
                </option>
              </select>
            </div>
          </div>
          <div class="mr-6 flex flex-wrap">
            <div class="mr-5">
              <label for="price" class="text-lg font-['kanit'] text-gray-500"
                >เเบรนด์</label
              >
              <input
                id="price"
                name="price"
                type="text"
                v-model="newProduct.brand"
                class="block w-64 rounded font-['kanit'] border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-base text-gray-500 placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-gray-300"
              />
            </div>
            <div class="mr-5">
              <label for="price" class="text-lg font-['kanit'] text-gray-500"
                >ราคา</label
              >
              <input
                id="price"
                name="price"
                type="number"
                placeholder="100"
                v-model="newProduct.price"
                class="block w-32 rounded font-['kanit'] border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-base text-gray-500 placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-gray-300"
              />
            </div>
            <div class="mr-5">
              <label for="stock" class="text-lg font-['kanit'] text-gray-500"
                >จำนวน</label
              >
              <input
                id="stock"
                name="stock"
                type="number"
                placeholder="25"
                v-model="newProduct.stock"
                class="block w-32 rounded font-['kanit'] border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-base text-gray-500 placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-gray-300"
              />
            </div>
            <div class="mr-6 flex flex-col">
              <label for="images" class="text-lg font-['kanit'] text-gray-500"
                >Upload Images</label
              >
              <input
                id="images"
                name="images"
                type="file"
                accept="image/*"
                multiple
                @change="onFileChange"
                class="block w-full rounded font-['kanit'] border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-base text-gray-500 placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-gray-300"
              />
            </div>
          </div>
        </div>
        <button @click="addProduct()">เพิ่มสินค้า</button>
        {{ newProduct }}
      </div>
      <table v-if="selectedSide == 'orderList'">
        <thead>
          <tr class="sticky top-0 bg-white">
            <th class="font-['kanit'] border px-4 py-2">Order Id</th>
            <th class="font-['kanit'] border px-4 py-2">User Id</th>
            <th class="font-['kanit'] border px-4 py-2">รายการสินค้า</th>
            <th class="font-['kanit'] border px-4 py-2">ราคารวม</th>
            <th class="font-['kanit'] border px-4 py-2">สถานะ</th>
            <th class="font-['kanit'] border px-4 py-2">ประเภทการจัดส่ง</th>
            <th class="font-['kanit'] border px-4 py-2">วันที่สั่งซื้อ</th>
            <th class="font-['kanit'] border px-4 py-2">ที่อยู่</th>
            <th class="font-['kanit'] border px-4 py-2">แก้ไข</th>
            <th class="font-['kanit'] border px-4 py-2">ลบ</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in groupedData" :key="item.productId">
            <td class="font-['kanit'] border px-4 py-2">{{ item.orderId }}</td>
            <td class="font-['kanit'] border px-4 py-2">{{ item.customer }}</td>
            <td class="font-['kanit'] border px-4 py-2">{{ item.detail }}</td>
            <td class="font-['kanit'] border px-4 py-2">
              {{ item.totalPrice }}
            </td>
            <td class="font-['kanit'] border px-4 py-2">{{ item.status }}</td>
            <td class="font-['kanit'] border px-4 py-2">
              {{ item.shippingMethod }}
            </td>
            <td class="font-['kanit'] border px-4 py-2">
              {{ item.orderDate }}
            </td>
            <td class="font-['kanit'] border px-4 py-2">{{ item.address }}</td>
            <td class="font-['kanit'] border px-4 py-2">
              <PencilSquareIcon class="h-6 w-6" aria-hidden="true" />
            </td>
            <td class="font-['kanit'] border px-4 py-2">
              <TrashIcon class="h-6 w-6" aria-hidden="true" />
            </td>
          </tr>
        </tbody>
      </table>
      <table v-if="selectedSide == 'userList'">
        <thead>
          <tr class="sticky top-0 bg-white">
            <th class="font-['kanit'] border px-4 py-2">User Id</th>
            <th class="font-['kanit'] border px-4 py-2">รป</th>
            <th class="font-['kanit'] border px-4 py-2">ชื่อจริง</th>
            <th class="font-['kanit'] border px-4 py-2">อีเมล</th>
            <th class="font-['kanit'] border px-4 py-2">ที่อยู่</th>
            <th class="font-['kanit'] border px-4 py-2">เบอร์โทรศัพท์</th>
            <th class="font-['kanit'] border px-4 py-2">ลบ</th>
          </tr>
        </thead>
        <tbody>
          <!-- <tr v-for="item in productStore.products" :key="item.productId">
                        <td class="font-['kanit'] border px-4 py-2">{{ item.userId }}</td>
                        <td class="font-['kanit'] border px-4 py-2">{{ item.image }}</td>
                        <td class="font-['kanit'] border px-4 py-2">{{ item.fullname }}</td>
                        <td class="font-['kanit'] border px-4 py-2">{{ item.email }}</td>
                        <td class="font-['kanit'] border px-4 py-2">{{ item.address }}</td>
                        <td class="font-['kanit'] border px-4 py-2">{{ item.phoneNumebr }}</td>
                        <td class="font-['kanit'] border px-4 py-2">{{ item.shippingMethod }}</td>
                        <td class="font-['kanit'] border px-4 py-2">
                            <TrashIcon class="h-6 w-6" aria-hidden="true" />
                        </td>
                    </tr> -->
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import {
  TrashIcon,
  PencilSquareIcon,
  ListBulletIcon,
  PlusCircleIcon,
  UserGroupIcon,
  TruckIcon,
} from "@heroicons/vue/24/outline";
import { useAuth } from "~/store/user";
const authStore = useAuth();
const config = useRuntimeConfig();
const selectedSide = ref(null);
const { $api } = useNuxtApp();

const formData = new FormData();
const onFileChange = (event) => {
  const files = event.target.files;
  for (let i = 0; i < files.length; i++) {
    formData.append("files", files[i]);
  }
};

const genre = {
  id: "genreId",
  name: "genre",
  options: [
    { value: "Action", checked: false },
    { value: "Adventure", checked: false },
    { value: "Anime", checked: false },
    { value: "Battle Royal", checked: false },
    { value: "Family", checked: false },
    { value: "Music", checked: false },
    { value: "Mystery", checked: false },
    { value: "Racing", checked: false },
    { value: "Rpg", checked: false },
    { value: "Strategy", checked: false },
    { value: "Sport", checked: false },
    { value: "Puzzle", checked: false },
    { value: "Horror", checked: false },
    { value: "Survival", checked: false },
    { value: "Open World", checked: false },
  ],
};

const supDevice = {
  id: "supDeviceId",
  name: "supDevice",
  options: [
    { value: "Playstation5", checked: false },
    { value: "Playstation4", checked: false },
    { value: "Playstation3", checked: false },
    { value: "Nintendo Switch – OLED Model", checked: false },
    { value: "Nintendo Switch", checked: false },
    { value: "Nintendo Switch Lite", checked: false },
    { value: "XBOX SERIES X", checked: false },
    { value: "XBOX SERIES S", checked: false },
  ],
};

const newProduct = ref({
  name: "",
  description: "",
  type: "",
  brand: "",
  genre: [],
  scale: "",
  supDevice: [],
  price: 0,
  stock: 0,
  images: [],
});

const Order = ref([]);

const fetchAllOrder = async () => {
  try {
    const response = await $api("orders", {
      method: "GET",
    });
    if (response == null) {
      return (Order.value = []);
    }
    Order.value = response;
  } catch (error) {
    console.log(error.message);
  }
};
// Define a computed property for groupedData
const groupedData = computed(() => {
  return Order.value.reduce((acc, order) => {
    const key = order.orderId;

    if (!acc[key]) {
      acc[key] = {
        orderId: key,
        orderDate: order.orderDate,
        shippingMethod: order.shippingMethod,
        totalPrice: 0,
        customer: order.email,
        detail: [],
        status: order.status,
        address: order.shippingAddress,
      };
    }

    acc[key].totalPrice += order.subtotal;

    acc[key].detail.push({
      productId: order.productId,
      quantity: order.quantity,
      customerId: order.customerId,
      status: order.status,
      subtotal: order.subtotal,
      shippingAddress: order.shippingAddress,
      type: order.type,
    });

    return acc;
  }, {});
});

const products = ref([]);
const addProduct = async () => {
  try {
    const config = useRuntimeConfig();
    const response = await $fetch(config.public.baseURL + "s3/upload-image", {
      body: formData,
      header: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
    });
    newProduct.value.images = response.imageUrls;
    if (newProduct.value.type == "Game") {
      try {
        await $api("games/addGame", {
          method: "POST",
          body: newProduct.value,
        });
        fetchProduct()
      } catch (error) {
        console.log(error.message);
      }
    } else if (newProduct.value.type == "Console") {
      try {
        await $api("consoles/addConsole", {
          method: "POST",
          body: newProduct.value,
        });
        fetchProduct()
      } catch (error) {
        console.log(error.message);
      }
    }
  } catch (error) {
    console.log(error.message);
  }
};

const deleteProductById = async (type, id) => {
  try {
    if (type === "game") {
      const res = await $api("games/deleteGame/" + id, {
        method: "DELETE",
      });
      products.value = products.value.filter(
        (item) => !(item.type === "game" && item.Id === id)
      );
      console.log(res);
      alert("Delete gameProduct Id: " + id + " success");
    } else if (type === "console") {
      const res = await $api("consoles/deleteConsole/" + id, {
        method: "DELETE",
      });
      products.value = products.value.filter(
        (item) => !(item.type === "console" && item.Id === id)
      );
      console.log(res);
      alert("Delete consoleProduct Id: " + id + " success");
    }
  } catch (error) {
    console.log(error.message);
  }
};

const fetchProduct = async () => {
  try {
    var games = await $api("games", {
      method: "GET",
    });
    var consoles = await $api("consoles", {
      method: "GET",
    });
    if (games == null) {
      games = [];
    }
    else if (consoles == null) {
      consoles = [];
    }
    games = games.map((item) => ({
      ...item,
      type: "game",
    }));
    consoles = consoles.map((item) => ({
      ...item,
      type: "console",
    }));

    products.value = [...games, ...consoles];
    console.log(products.value)
  } catch (error) {
    console.log(error.message);
  }
};
fetchProduct();
fetchAllOrder();
</script>