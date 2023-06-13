import { useState } from 'react'

const useInputs = initialValue => {
	const [values, setValues] = useState(initialValue)

	const onChange = event => {
		setValues(prev => ({
			...prev,
			[event.target.name]: event.target.value,
		}))
	}

	return [values, onChange, setValues]
}
export default useInputs

/**
 * hint
 * 콜스택, 힙
 * 깊은 복사, 얕은 복사
 * form Event
 */

/**
 * state의 불변성
 * state가 바뀌는 조건?
 * setValues(prev=>prev[event.target.name]: event.target.value)
 *
 * state가 객체일 때, state는 deep equal을 통해 객체 내 키값의 데이터가 변화가 있는지 확인하고 상태를 업데이트
 *
 * 그러나 이러한 과정에서 새로운 객체를 선언하여 새로운 참조 메모리 주소값을 할당하면
 * 리액트는 deep equal을 하지 않고 메모리 주소값이 달라졌으므로 상태를 업데이트함
 *
 * 따라서 데이터가 객체일 때 깊은 복사를 통해 새로운 객체를 만들어주어 상태 업데이트 최적화를 진행
 *
 * +
 * 원본 데이터의 훼손이 일어나면 하나의 state는 다양한 컴포넌트에서 구독하고 있을 가능성이 있음
 * 참조 데이터가 수정되면 현재 이 데이터를 참조하고 있는 컴포넌트에서 예외 상황이 발생할 수 있음
 * 사이드 이팩트의 배제
 */
