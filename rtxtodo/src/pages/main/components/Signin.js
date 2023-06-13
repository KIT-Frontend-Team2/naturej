import BasicButton from 'components/Button/Button'
import * as S from './style'
import { useNavigate } from 'react-router-dom'
// styled-component를 구분하기 위해 S를 붙인다.이렇게 하면 메모리 낭비도 없음.

const SignInForm = () => {
	// const [email, onChangeEmail] = useInput(); // [value, onChange, setValue];
	// const [password, onChangePassword] = useInput(); // [value, onChange, setValue];

	const navigation = useNavigate()

	const onPressSignIn = e => {
		e.preventDefault()
		console.log(e.target.email.value, e.target.password.value)
		const email = e.target.email.value
		const password = e.target.password.value
		if (email === 'test' && password === 'testtest') {
			return navigation('/todo/1')
			// 이렇게 하면 이전 페이지 값 가져올 수 있음 (권장되지 않는 방법)
			// navigation("todo/1", {
			//   state: {
			//     email,
			//     password,
			//   },
			// });
		}
		return alert('아이디와 비밀번호를 확인해주세요.')
	}

	/*
    email은 email 양식을 지켜야하며 (@ 포함)
    password는 8글자 이상 작성 되어야한다.

    password - passwordConfirm이 달라졌을 때 실시간으로
    비밀번호와 비밀번호 확인이 다르지 않은지 확인하라는 에러 메세지

    BasicButton은 
    데이터가 모두 채워져있지 않으면 disabled
    유효성이 검사되지 않으면 disabled --> 아이디와 비밀번호 양식을 확인해주세요 에러 메세지
    비밀번호와 비밀번호 확인이 다르면 disabled --> css 속성도 변경 (회색)

    login의 email 로직에도 똑같이 useInputs를 적용하고 유용성 적용 후
    커스텀 훅으로 함수 재사용 할 것

    고민해 볼 점
    (1) state 최적화
    (2) custom hook 작성법 (모듈화)

    +
    심화)
    react-hook-form 이용하여 랜더링
    단, 장단점을 작성하고 원하는대로 효과를 거뒀는지 작성할 것
    구현을 목표로 하지 말고 실무에서 자주 사용하는 라이브러리이므로 확실하게 이해하는 것이 중요
    * control, register
  */

	return (
		<S.Form onSubmit={onPressSignIn}>
			<S.InputBox>
				<label>이메일</label>
				<input name="email" />
			</S.InputBox>
			<S.InputBox>
				<label>비밀번호</label>
				<input name="password" />
			</S.InputBox>
			<BasicButton size={'full'} shape={'default'} variant={'primary'}>
				로그인
			</BasicButton>
		</S.Form>
	)
}

export default SignInForm
