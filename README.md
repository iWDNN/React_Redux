# React

1-1. 소프트웨어의 가장 큰 특징

- 변한다.
- 현실의 문제를 해결하는 솔루션, 항상 문제도 다르기에 소프트웨어도 항상 바뀐다.
- 변경 용이성
- 안전하게 변경할수 있을까

1-2. 강의의 핵심

- 변경용이성에 대한 해결책을 어떻게 냈는가 하는, React에 대한 강의

2-1. 문제점의 중심

- 웹 어플리케이션 개발에 있어 가장 많은 문제점, DOM (웹 앱이 핸들링 UI를 핸들링 하기위해 사용할수 밖에 없는) 애초에 웹앱개발을 위해 만들어진 구조가 아니기때문에 웹 페이지일 뿐, 웹 앱으로의 사용성은 나오기 힘듬 (ajax가 나오고 앱처럼 구현은 시작됨)
- 웹 앱으로 만들수록 DOM API는 더 큰 문제만 야기함
- HTML Collection 은 라이브 오브젝트 참조형, NodeList는 참조형이 아님 DOM API는 일관성이 없음, 브라우저에서 호환되는게 모두 달라서 크로스 브라우징이슈도 있음
- 규모는 커져도 복잡도는 낮은, 비슷한것 끼리 모아서 복잡도를 낮춰보자
- MVC패턴(모델-뷰-컨트롤러) 뷰:UI 컨트롤러 : 모델과 뷰 사이의 로직들을 관리하는 컨트롤러
- 클라이언트 앱같은 경우가 로직들이 많아지고 뷰들도 굉장히 많아지다 보니, mvc패턴은 서버의 모델과 종속성이 커서 서버가 바뀌면 클라이언트도 굉장히 많이 바뀌는 단점을 가지고 있어서 MVM(모델-뷰-뷰모델) 패턴이 나옴. 클라이언트 쪽에서 독립적 상태를 관리할 수있는 패턴
- 패턴같은것들이 나온 이유는 클라이언트 앱 규모가 커지지만 복잡도는 일정수준으로 유지하기 위한 시도들 중 하나다. 이게 모두 DOM API 자체 문제점을 개선시켜주지 않았지만, 가장 성공적인건 React가 있다고 생각한다.
- React는 DOM API를 쓰지 말자라는 컨셉으로 안착

3-1. 어떻게 만들것인가

- MVP, 최소 기능 제품, minimum viable product, 많은 기능을 담으면 그 가치의 선명도가 떨어지기 때문에 핵심적인 부분만 초기에 담는게 좋다.

3-2. React의 mvp

- DOM의 문제를 해결 하기 위한, 세 가지 컨셉
- 선언적 : 선언적인 코드를
- 효율적 : DOM과 인터렉션을 최소화 DOM의 모의 표현을 사용하여 DOM을 처리한다.
- 유연성 : 우리가 알고 있는 라이브러리나 혹은 프레임워크와 같이 사용 할 수 있다. 라이브러리라 불리는 이유 : 모든 문제를 해결해주기 위함이 아닌 ui만 해결해주고싶었던
- 초기버전을 보는게 많은 도움이 된다. 0.3.0

4-1. 가장 안전한 코드

- 기존의 코드 제거, 추가, 삭제 된다는 일들이 빈번하게 일어나서 추가와 변경만 두고 봤을때, 아예 안바꾸는, 안 바뀌는 곳과 바뀌는 부분을 두고 개발하는 방법 플러그인, 미들웨어
- 플러그인 : 크롬자체가 변경되지 않지만 크롬을 사용하여 확장프로그램을 사용하는, ex) 크롬의 웹스토어 확장 프로그램
- 미들웨어 : 운영체제와 응용 소프트웨어의 중간에서 조정과 중계의 역할을 수행하는 소프트웨어, 기존은 바뀌지 않지만 새로운 기능은 추가할 수 있는 환경인 컨셉 ex) express
- 컴포넌트 아키텍쳐 : 변경되지 않는 단단한 컴포넌트안에서 새로운것만 변경시키는 컨셉

5. 웹프론트엔드 개발환경

- 번들러 웹팩, 로더 바벨, 에디터 Vs code
- 웹팩도 변하는 부분과 변하지 않는 곳을 구분한 플러그인 구조를 가지고 있다. 플러그인, 로더 - babel

# React 만들기

1.

- DOM API를 이용해서 만들면 구조적으로 이해하기도 힘들고 단점이 많다. 효율적이지 않다.
- DOM을 쓰지 말고 버려보자, 개발자에게는 DOM이 없는것처럼 사용하게 하고, 리엑트 자체에서만 제어하게 만드는. 이런 식의 컨셉
- DOM 자체도 그런 컨셉, html 문자열을 객체로 바꿔주자 자유도가 너무 높아서, 쉬운 포맷을 위해
- DOM 객체를 간단한 객체로 바꾸고 다시 복잡한 DOM객체로 바꿔주자. 사용자에게는 편리하게 만들어주는 경험
- 복잡한 DOM을 간단한 객체로 그 단순한 객체를 입력값으로 복잡한 DOM을 만드는,

2. 개발환경

- 현대적인 구조 , 번들링과 로더, 빌드가 되는 구조

  - webpack-cli : webpack은 웹팩의 핵심 패키지이며 webpack-cli는 터미널에서 webpack 커맨드를 실행할 수 있게 해주는 커맨드라인 도구
  - webpack-dev-server : 개발 환경 서버
  - babel-loader : 트랜스파일러
  - @babel/core : 바벨의 핵심파일
  - @babbel/preset-env : 바벨 개발 프리셋
  - @bable/preset-react
  - html-webpack-plugin : html 파일을 만들고 템플릿화 해서 번들링때 사용할 수 있는 도구

- 번들링 파일 설정
  - webpack.config.js : webpack에 입력값으로 config 파일을 제공해 주는 역할(파일설정은 내부파일에 주석)
  ```json
  module.export = {
  mode: "development", // 모드
  entry: "./app.js", // 입력정보
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  }, // 출력정보
  devServer: {
    compress: true,
    port: 9999,
  },
  module: {
    rules: [
      {
        test: /\.js$/, // js파일로 끝나는 친구들만
        exclude: /node_modules/, // 노드 모듈 제외
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  }, //
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack & babel",
      template: "index.html",
    }),
  ],
  };
  ```

// entry - module(트랜스파일) - plugin - output
// es6 이상 파일 - moudle es5 트랜스 파일러 - plugin 주석제거

```
- 스크립트에 webpack(번들링만), webpack serve(개발 서버로 확인하게 해주는)로 실행시킬수있다.
```

3. @jsx

- createElment로 만들었지만 함수 호출은 불편함을 느낄수밖에 없어서, 마크업 문법처럼 createELement를 태그형태로 바꿨다.
- 바벨의 플러그인 중에 하나인 @babel/preset-react 마크업은 아니지만 jsx파일의 마크업 문법을 리엑트 함수인 createElement로 변환해준다.

- DOM으로 변환될 간단한 객체를 만들기 위해, createElement라는 헬퍼 함수를 만들었는데 그걸 함수호출식으로 사용하면 사용자들이 아무도 안쓸테니, 편리함을 추구하기 위해 html의 마크업구조의 표현 방법을 개발한 것, (태그를 createElement로 변환해서 호출하는 방법) 사용자가 큰 어려움 없이 마크업 구조로 만들게 되었다. DOM보다 훨씬 간단한 구조물을 만드는데 성공했다는 장점, 그것을 생성하는데에 있어서 객체 리터럴, createElement 같은 함수로 호출했을 때 ui구조도 파악하기도 힘들고 작성하기도 힘든 형태를 마크업형태로 구조도 파악하기 쉽고 작성도 쉬운 두 마리의 토끼를 모두 잡은 상황
