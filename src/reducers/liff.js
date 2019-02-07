// import store from "../store";

const liff = window.liff;

export const LIFF_INIT = "IS_INIT";

export const setLiff = data => ({
  type: LIFF_INIT,
  payload: data
});

export const initLiff = () => {
  //   console.log("I am called");
  liff.init(data => {
    // console.log("I am liff Init");
    setLiff(data);
  });
  //   console.log("I am after liff init");
};

const initialState = {
  data: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  if (type === LIFF_INIT) return { ...state, data: payload.data };
  else return state;
};

// export const getProfile = () => {
//   console.log(store.getState());
// };

export const openWindow = (url, external) => {
  console.log("I am called eiei");
  liff.openWindow({ url, external });
};

// openWindow(url, external) {
//     liff.openWindow({ url, external });
