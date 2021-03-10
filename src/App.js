import './fonts/styelsheet.css';
import './App.css';
import { Text } from './components/Text/Text';
import { TextList } from './components/TextList/TextList';
import { Header } from './components/Header/Header';
import { store } from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Route path="/" exact component={TextList} />
          <Route path="/new" exact component={Text} />
          <Route path="/note/:id" exact component={Text} />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;