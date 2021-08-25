import React from 'react';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/src/integration/react';
import AppContainer from './src/navigation';

import {store, persistor} from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContainer />
      </PersistGate>
    </Provider>
  );
};

export default App;
