import { useEffect, useState } from 'react'
import BasicButton from '../../../components/Button/Button'
import useInputs from '../../../hooks/use-inputs'
import * as S from './style'
const SignUpForm = ({ setIsFormLogin }) => {
	const [{ email, password, passwordConfirm }, onChangeForm] = useInputs({
		email: '',
		password: '',
		passwordConfirm: '',
	})

	const [isPasswordConfirm, setIsPasswordConfirm] = useState(false)

	useEffect(() => {
		if (password !== passwordConfirm) {
			// 일치하지 않았을 때 실행문
			return setIsPasswordConfirm(false)
		}
		return setIsPasswordConfirm(true) // 일치 했을 때 실행문
	}, [password, passwordConfirm])

	const handleSignUpSubmit = e => {
		e.preventDefault()
		if (!email || !password) return
		if (!isPasswordConfirm) return
		alert('축하합니다. 회원가입이 완료되었습니다')
		setIsFormLogin(true)
	}

	// hint
	// 유효성 검사 커스텀 훅
	// const { disabled, errors } = useSignValidation(password, email);
	/*
    errors : {
      email: {message: 이메일 양식을 지켜주세요}
      password: {message: 비밀번호 양식을 지켜주세요}
    }
  */

	return (
		<S.Form>
			<S.InputBox>
				<label>이메일</label>
				<input onChange={onChangeForm} name="email" />
			</S.InputBox>
			<S.InputBox>
				<label>비밀번호</label>
				<input onChange={onChangeForm} name="password" />
			</S.InputBox>
			<S.InputBox>
				<label>비밀번호 확인</label>
				<input onChange={onChangeForm} name="passwordConfirm" />
			</S.InputBox>
			<BasicButton
				size="full"
				shape="default"
				variant={'primary'}
				onClick={handleSignUpSubmit}
			>
				회원가입
			</BasicButton>
		</S.Form>
	)
}

export default SignUpForm
