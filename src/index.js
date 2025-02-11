import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'typeface-roboto'
import * as serviceWorker from './serviceWorker'
import App from './App'
import configureStore from './store'
import { PersistGate } from 'redux-persist/integration/react';

const { store, persistor } = configureStore()

ReactDOM.render(
  <Provider store={store}>
	<PersistGate loading={null} persistor={persistor}>
			<App />
	</PersistGate>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.register()
