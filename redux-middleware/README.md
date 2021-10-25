- json-server 실행: `npx json-server ./data.json --port 4000`

### Generator 문법

#### 기본 사용법

```javascript
> function* generatorFunction() {
    console.log('안녕하세요');
    yield 1;
    console.log('제너레이터 함수');
    yield 2;
    console.log('function*');
    yield 3;
    return 4;
}

> const generator = generatorFunction()

> generator
generatorFunction {<suspended>}

> generator.next()
안녕하세요
{value: 1, done: false}

> generator.next()
제너레이터 함수
{value: 2, done: false}

> generator.next()
function*
{value: 3, done: false}

> generator.next()
{value: 4, done: true}

> generator
generatorFunction {<closed>}
```

- `function` 키워드 뒤에 `*`를 붙이면 `generator` 함수가 된다.
- `yield` 키워드를 통해 return 값을 여러 개 설정 가능하다.
- generatorFunction 의 `next()` 함수를 통해서 다음 결과를 출력할 수 있다.
- 함수 호출이 종료되면 `done` 값이 `true`가 된다.

##### 예시) 계속 입력받을 수 있는 SumGenerator

```javascript
function* sumGenerator() {
  let result = 0;
  while (true) {
    result += yield result;
  }
}
```

- 호출하기

```javascript
> const sum = sumGenerator();

> sum
sumGenerator {<suspended>}

> sum.next()
{value: 0, done: false}

> sum.next(10)
{value: 10, done: false}

> sum.next(20)
{value: 30, done: false}
```

### redux-saga

```javascript
import {
  delay,
  put,
  takeEvery,
  takeLatest,
  takeLeading,
} from "redux-saga/effects";

const INCREASE_ASYNC = "INCREASE_ASYNC";
const DECREASE_ASYNC = "DECREASE_ASYNC";

export const increaseAsync = () => ({ type: INCREASE_ASYNC });
export const decreaseAsync = () => ({ type: DECREASE_ASYNC });

function* increaseSaga() {
  yield delay(1000);
  yield put(increase());
}

function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease());
}

export function* counterSaga() {
  yield takeEvery(INCREASE_ASYNC, increaseSaga);
  yield takeLeading(DECREASE_ASYNC, decreaseSaga);
}
```

- `delay` : `delay` 주기
  ```javascript
  yield delay(1000); //delay 1초
  ```
- `put` : `dispatch`와 비슷
  ```javascript
  yield put(increase()); //increase 액션 객체 생성 후 dispatch 하도록 redux-saga에게 명령
  ```
- `takeEvery` : `Action`이 `dispatch` 될 때마다 함수 실행해줌
  ```javascript
  yield takeEvery(INCREASE_ASYNC, increaseSaga);
  ```
- `takeLatest` : 가장 마지막에 `Action`이 `dispatch` 된 함수만 실행해줌
  ```javascript
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
  ```
- `takeLeading` : 가장 먼저 들어온 `Action`이 `dispatch` 된 함수만 실행해줌, 사전에 실행중인게 있을 때 들어오는 건 무시
  ```javascript
  yield takeLeading(DECREASE_ASYNC, decreaseSaga);
  ```

#### export 한 함수 rootSaga에 등록해주기

```javascript
import { counterSaga } from "./counter";
import { all } from "redux-saga/effects";

export function* rootSaga() {
  yield all([counterSaga()]);
}
```

#### store에 등록 후 run 함수 호출 시 rootSaga 파라미터 전달해주기

```javascript
import React from "react";
import { createStore, applyMiddleware } from "redux";
import { rootSaga } from "./modules";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
```
