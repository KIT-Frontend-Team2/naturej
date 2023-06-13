import styled from 'styled-components'
import { flexCenter } from '../../../styles/common'

/* signin과 signup 같이 쓸 것이기 때문에 모듈화 */
export const Form = styled.form`
	width: 360px;
	background-color: #fff;
	${flexCenter}
	flex-direction: column;
	padding-top: 32px;
`

export const InputBox = styled.div`
	position: relative;
	width: 88%; // 원래 퍼센트는 별로 ..
	height: 48px; // 4의 배수여야 빠르게 랜더링
	${flexCenter}
	margin-bottom: 16px;

	input {
		width: 100%;
		border: 1px solid #999;
		border-radius: 4px;
		height: 100%;
		text-align: center;
	}

	label {
		position: absolute;
		left: 16px;
		top: -8px;
		background-color: ${({ theme }) => theme.PALETTE.background.white};
		font-size: ${({ theme }) => theme.FONT_SIZE.small};
		z-index: 1;
		padding: 0 4px;
	}
`
