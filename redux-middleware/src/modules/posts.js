import * as postAPI from "../api/posts";
import {
  handleAsyncActions,
  handleAsyncActionsById,
  reducerUtils,
  createPromiseSaga,
  createPromiseSagaById,
} from "../lib/asyncUtils";
import { takeEvery, getContext, select } from "redux-saga/effects";

const GET_POSTS = "GET_POSTS";
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
const GET_POSTS_ERROR = "GET_POSTS_ERROR";

const GET_POST = "GET_POST";
const GET_POST_SUCCESS = "GET_POST_SUCCESS";
const GET_POST_ERROR = "GET_POST_ERROR";

const GO_TO_HOME = "GO_TO_HOME";
const PRINT_STATE = "PRINT_STATE";

export const getPosts = () => ({ type: GET_POSTS });
export const getPost = (id) => ({ type: GET_POST, payload: id, meta: id });
export const printState = () => ({ type: PRINT_STATE });

function* goToHomeSaga() {
  const history = yield getContext("history");
  history.push("/");
}

function* printStateSaga() {
  const state = yield select((state) => state.posts);
  console.log(state);
}

const getPostsSaga = createPromiseSaga(GET_POSTS, postAPI.getPosts);
const getPostSaga = createPromiseSagaById(GET_POST, postAPI.getPostById);

export function* postsSaga() {
  yield takeEvery(GET_POSTS, getPostsSaga);
  yield takeEvery(GET_POST, getPostSaga);
  yield takeEvery(GO_TO_HOME, goToHomeSaga);
  yield takeEvery(PRINT_STATE, printStateSaga);
}

export const goToHome = () => ({ type: GO_TO_HOME });

const initialState = {
  posts: reducerUtils.initial(),
  post: {},
};

const getPostsReducer = handleAsyncActions(GET_POSTS, "posts", true);
const getPostReducer = handleAsyncActionsById(GET_POST, "post", true);

export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      return getPostsReducer(state, action);
    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
      return getPostReducer(state, action);
    default:
      return state;
  }
}
