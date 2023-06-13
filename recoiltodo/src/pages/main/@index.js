import { Link, useNavigate, useSearchParams } from 'react-router-dom'

const MainPage = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	console.log(searchParams.get('todoId'))
	const navigate = useNavigate()

	const onClickNavigateTodo = () => {
		// window.location.href = "/todo/3";
		// 뒤로가기 : navigate(-1);
		navigate('/todo/3')
		// setSearchParams({
		//   todoId: 3,
		// });
	}

	return (
		<>
			{/** 태그명이 없는 태그를 Fragment 라고 부른다.
			 * 만약 해당 Fragment에 속성을 줄 경우 <React.Fragment> 태그로 이름을 변경
			 */}
			<h1>Main Page</h1>
			<div>Hello, nature :)</div>
			<button onClick={onClickNavigateTodo}>Todo Page로 이동</button>
			<a href="/todo/3">TODOPAGE</a> {/* 새로고침 이동 */}
			<Link to="/todo/5">TODOPAGE</Link> {/* 새로고침 없이 이동 */}
		</>
	)
}

export default MainPage

/*
  function MainPage() {}
  const MainPage = () => {}
  일반 함수 표기법, 화살표 함수 표기법 상관없다. 코딩 컨벤션에 맞게
  ex. Component -> function, custom hook -> arrow function 로 쓰는 곳도...
*/
