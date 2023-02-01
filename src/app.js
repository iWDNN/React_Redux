/* @jsx createElement */

import { createElement, render } from "./react";
// 실제 코드상에서는 createElemnt를 사용하진 않지만 런타임에선 bundle.js에서 사용하기 때문에 import 해야한다.
// 구조적에 기인한 제약 사항
const vdom = (
  <p>
    <h1>React 만들기</h1>
    <ul>
      <li style="color:red">첫 번째 아이템</li>
      <li style="color:blue">두 번째 아이템</li>
      <li style="color:green">세 번째 아이템</li>
    </ul>
  </p>
);

render(vdom, document.querySelector("#root"));
