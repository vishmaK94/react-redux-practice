import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import HooksIceCreamContainer from "./components/HooksIceCreamContainer";
import SconeContainer from "./components/SconeContainer";
import HooksSconeContainer from "./components/HooksSconeContainer";
import NewSconeContainer from "./components/NewSconeContainer";
import HooksNewSconeContainer from "./components/HooksNewSconeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div style={{ 'border': '5px solid black', 'padding': '1rem', backgroundColor: '#c2ffea', margin: '1rem', borderRadius: '1rem' }}>
          <UserContainer />
        </div>
        {/* <div style={{ 'border': '5px solid black', 'padding': '1rem', backgroundColor: '#c2ffea', margin: '1rem', borderRadius: '1rem' }}>
          <ItemContainer cake />
          <ItemContainer />
        </div>
        <div style={{ 'border': '5px solid black', 'padding': '1rem', backgroundColor: '#c2ffea', margin: '1rem', borderRadius: '1rem' }}>
          <HooksSconeContainer />
          <SconeContainer />
          <HooksIceCreamContainer />
          <IceCreamContainer />
          <HooksCakeContainer />
          <CakeContainer />
          <HooksNewSconeContainer />
          <NewSconeContainer />
        </div> */}
      </div>
    </Provider>
  );
}

export default App;
