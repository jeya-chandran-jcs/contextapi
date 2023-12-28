
import './App.css';

import FetchProvider from './component/Provider';
import Header from './component/Header';

function App() {
  return (
    <FetchProvider>
    <div className="App">
      {/* <Input /> */}
      <Header />
    </div>
    </FetchProvider>
  );
}

export default App;
