import "../cart/toggleCart.js";
import "../toggleSidebar.js";
import "../cart/setupCart.js";

import display from "../displayProducts.js";
import fetchProducts from "../fetchProducts.js";
import setupCompanies from "../filters/companies.js";
import setupSearch from "../filters/search.js";
import setupPrice from "../filters/price.js";

import { setupStore, store } from "../store.js";
import { getElement } from "../utils.js";

// 비동기 요청을 위해 async/await를 사용
const init = async () => {
  const loadingEl = getElement(".page-loading");
  store;

  // 상품 데이터 가져오기
  const products = await fetchProducts();
  setupStore(products);

  // 상품들 보여주기
  display(store, getElement(".products-container"));

  setupSearch(store);
  setupCompanies(store);
  setupPrice(store);

  loadingEl.style.display = "none";
};

init();
