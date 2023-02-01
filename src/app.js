/* @jsx createElement */

import { Component, createElement, render } from "./react";
// 실제 코드상에서는 createElemnt를 사용하진 않지만 런타임에선 bundle.js에서 사용하기 때문에 import 해야한다.
// 구조적에 기인한 제약 사항

class Title extends Component {
  render() {
    return <h1>{this.props.children}</h1>;
  }
}

function Item(props) {
  return <li style={`color:${props.color}`}>{props.children}</li>;
}

const App = () => (
  <p>
    <Title label="React">React</Title>
    <ul>
      <Item color="red">첫 번째 아이템</Item>
      <Item color="blue">두 번째 아이템</Item>
      <Item color="green">세 번째 아이템</Item>
    </ul>
  </p>
);

render(<App />, document.querySelector("#root"));
