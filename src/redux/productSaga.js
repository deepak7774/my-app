import { takeEvery, put, call } from "redux-saga/effects";
import axios from "axios"; 

import {
  PRODUCT_LIST,
  SEARCH_PRODUCT,
  SET_PRODUCT_LIST,
  GET_LIST_PRODUCT_ID,
} from "./constant";

function* getProducts() {
  try {
    const response = yield call(
      axios.get,
      "http://ec2-3-19-197-134.us-east-2.compute.amazonaws.com/admin/api/v1/products"
    );

    const productData = response.data.data;
    console.log(productData);
    const updatedProducts = yield Promise.all(
      productData.map(async (product) => {
        const finalLevel = calculateFinalLevel(product.finishLevel);
        const finalMetalType = calculateFinalMetalType(product.metalType);

        const priceResponse = await axios.get(
          `https://www.overnightmountings.com/priceapi/service.php?action=pricecalculation&type=json&level=${finalLevel}&metaltype=${finalMetalType}&metalcolor=${product.metalColor}&stylenumber=${product.sku}&quality=${product.diamondQuality}`
        );

        return {
          name: product.name,
          image: product.default_image_url,
          slug: product.slug,
          price: priceResponse.data.price,
          CenterShape: product.CenterShape,
        };
      })
    );

    yield put({ type: SET_PRODUCT_LIST, data: updatedProducts });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function calculateFinalLevel(level) {
  if (level.indexOf("Complete") !== -1) {
    return "Complete";
  }
  if (level.indexOf("Polished") !== -1) {
    return "Polished";
  }
  if (level.indexOf("Semi-mount") !== -1) {
    return "Semi-mount";
  }
  return "";
}

const calculateFinalMetalType = (metalType) => {
  // Implement your logic for metal type conversion here
  // ...

  return "";
};
function* searchProducts(action) {
  try {
    const result = yield call(
      fetch,
      `http://ec2-3-19-197-134.us-east-2.compute.amazonaws.com/admin/api/v1/products?q=${action.data.query}`
    );
    const data = yield result.json();
    yield put({ type: SET_PRODUCT_LIST, data });
  } catch (error) {
    console.error("Error searching products:", error);
  }
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
  yield takeEvery(SEARCH_PRODUCT, searchProducts);
  // yield takeEvery(GET_LIST_PRODUCT_ID, getProductsId);
}

export default productSaga;
