import styled from 'styled-components'
import SignInForm from './components/Signin'
import SignUpForm from './components/Signup'
import { flexCenter } from 'styles/common'
import { PALETTE } from 'styles/theme'
import { useState } from 'react'

const MainPage = () => {
	// let isFormLogin = true;
	const [isFormLogin, setIsFormLogin] = useState(true)

	const onClickFormHeader = e => {
		const { innerText } = e.target
		// isFormLogin = innerText === "LOGIN" ? true : false;
		innerText === 'LOGIN' ? setIsFormLogin(true) : setIsFormLogin(false)
		// console.log(isFormLogin);
	}

	return (
		<S.Container>
			<S.Header>
				<S.LoginHeader isFormLogin={isFormLogin} onClick={onClickFormHeader}>
					LOGIN
				</S.LoginHeader>
				<S.SignUpHeader isFormLogin={isFormLogin} onClick={onClickFormHeader}>
					SIGN
				</S.SignUpHeader>
			</S.Header>
			{isFormLogin ? (
				<SignInForm />
			) : (
				<SignUpForm setIsFormLogin={setIsFormLogin} />
			)}
		</S.Container>
	)
}

export default MainPage

const Container = styled.div`
	width: 100%;
	height: calc(100vh - 60px);
	${flexCenter}
	flex-direction: column;
`

const Header = styled.div`
	width: 360px;
	height: 48px;
	display: flex;
	background-color: ${PALETTE.primary[100]};
	background-color: ${({ theme }) => theme.PALETTE.primary[300]}; //
	// prop.theme.PALETTE.primary 라고 하는것을 구조분해할당한 것

	div {
		${flexCenter}
		width:50%;
		cursor: pointer;

		:hover {
			opacity: 0.7;
		}
	}
`

const LoginHeader = styled.div`
	background-color: ${({ theme, isFormLogin }) =>
		isFormLogin ? '#e0e0e0' : '#f6f6f6'};
`

const SignUpHeader = styled.div`
	background-color: ${({ theme, isFormLogin }) =>
		isFormLogin ? '#f6f6f6' : '#e5e5e5'};
`
// styled-components는 변수를 속성으로 전달받아
// 해당 변수 값에 따라서 스타일을 조정할 수 있다. = style 변경을 위해 DOM API에 접근할 필요가 없다.

// styled-component와 일반 컴포넌트의 구분을 위해 객체 생성
// 메모리가 더 들수는 있으나 가독성 좋다.
const S = {
	Container,
	Header,
	LoginHeader,
	SignUpHeader,
}
