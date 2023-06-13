import { createBrowserRouter } from 'react-router-dom'
import MainPage from '../pages/main'
import TodoPage from '../pages/todo'
import Layout from '../components/Layout'
// 구조 분해 할당!

const router = createBrowserRouter([
	{
		// path: "/",
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <MainPage />,
			},
			{
				path: '/todo/:todoId',
				element: <TodoPage />,
			},
		],
	},
])

/* default : 기본값 1개만 export */
/* 
  default 키워드를 붙이면 기본값으로 하나만 export하여 
  받아오는 쪽에서 찾을 필요가 없기 때문에 {} 생략 가능. 변수명 자유롭게 지정 가능
  default 키워드를 붙이지 않는 경우에는 객체로 export 되어, 
  받아오는 쪽에서 {}를 써야하고, key값으로 가져와야하기 때문에 이름을 동일하게 써야한다.
*/
export default router
