import Button from './style'
const BasicButton = ({ size, shape, variant, children, ...rest }) => {
	return (
		<Button size={size} shape={shape} variant={variant} {...rest}>
			{children}
		</Button>
	)
}

export default BasicButton
// 함수형 컴포넌트는 함수이기 때문에 매개변수를 전달 받을 수 있고
// 매개변수는 컴포넌트에 설정한 속성과 속성값의 형태가 `객체로 전달`

/*
  <BasicButton>
    ... children
  </BasicButton>

--------------------------------------------------------------------

나머지 매개변수 (...rest)
ex) function printn(name, ...rest) {
      console.log(name, ...rest);
    }
    printn("김성용",20,190);

--------------------------------------------------------------------

💡 key point !!
1. 함수형 컴포넌트는 매개변수로 전달된 `속성값`을 객체 형태로 받는다.
2. styled-component는 속성으로 전달된 값을 콜백함수의 인자로 꺼내쓸 수 있다
3. 이를 이용하여 유동적인 css 변경이 가능하며 이를 통해 유동적인 공통 컴포넌트를 만들 수 있다.
4. 나머지 매개변수를 통해 props를 통해 명시하지 않은 key값도 전달 받을 수 있다.

--------------------------------------------------------------------
*/
