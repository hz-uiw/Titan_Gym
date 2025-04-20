import { Global } from '@emotion/react'
import { global } from './styles/global'
import { Route, Routes } from 'react-router-dom'
import UserRoute from './routes/UserRoute'

function App() {

	return (
		<>
			<Global styles={global} />
			<Routes>
				<Route path='/*' element={<UserRoute />}/>
				
			</Routes>
		</>
	)
}

export default App
