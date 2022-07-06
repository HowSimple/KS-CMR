import {reducer} from './rootSlice'
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from "react-redux";
import MainForm from "./pages/MainForm";
import { StylesProvider } from '@material-ui/core/styles';
const store = configureStore({reducer});

function App() {
  return (<StylesProvider injectFirst>
      <Provider store={store}>
              <MainForm></MainForm>
      </Provider>
</StylesProvider>
  );
}
export default App;
