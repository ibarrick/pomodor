import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer as authReducer } from './data/auth/reducer'
import { reducer as settingsReducer } from './data/settings/reducer'
import { reducer as labelsReducer } from './data/labels/reducer'
import { reducer as sessionsReducer } from './data/sessions/reducer'
import { reducer as progressReducer } from './data/progress/reducer'
import { reducer as timerReducer } from './scenes/Timer/data/timer/reducer'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	storage
};

const appReducer = combineReducers({
  auth: authReducer,
  settings: settingsReducer,
  labels: labelsReducer,
  timer: timerReducer,
  sessions: sessionsReducer,
  progress: progressReducer,
})

const persistedReducer = persistReducer(persistConfig, appReducer);

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 })

export default () => {
  const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
  )
  const persistor = persistStore(store);
  return { store, persistor };
}
