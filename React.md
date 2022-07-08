# Hooks
- 16.8 이후 도입
- 함수형 컴포넌트에서 상태관리를 위해 제공되는 기능

1. useState
  - 가장 기본 훅
  - 컴포넌트의 상태정보 관리용

2. useEffect
  - 컴포넌트가 렌더링될 때 특정작업을 하도록 설정할 수 있는 훅
  - componentDidMount, componentDidUpdate를 합친것과 유사하게 동작
  - useEffect(콜백함수);
    - 콜백함수 : Mount( 처음 ) 와 Update( 화면 변경발생 ) 될때 실행됨
  - useEffect(콜백함수, []);
    - Mount시에만 콜백함수 호출
  - useEffect(콜백함수, [상태명1, 상태명2, ...]);
    - 상태명의 값이 수정되면 콜백함수 호출
  - useEffect(콜백함수);
    - 반환값을 함수로 정의하면 해당 함수는 Unmount되기전에 호출됨
    - 반환되는 함수 : cleanup 함수

3. useReducer
  - 상태에 대해 다양한 형태의 변경을 수행하기 위해 사용하는 훅
  - useReducer는 useState보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트해 주고 싶을 때 사용하는 Hook
  - 리덕스와 함께 사용하면 도움됨
  - action을 정의해서 사용
    - { type: '더하기' }
  - 새로운 상태를 반영하기 위해서 불변성을 지켜줘야 함
  - const [ 상태명, dispatch함수명 ] = useReducer(리듀서함수, 리듀서기본값)
    - dispatch함수 : action을 발생시키는 함수
      - dispatch함수( action객체 ) -> 리듀서함수를 action객체를 가지고 호출
    - 리듀서함수 : 실제 상태 변경하는 함수

4. useMemo
  - 컴포넌트 내부의 연산작용을 최적화