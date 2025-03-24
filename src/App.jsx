import "./App.css";
import CryptoDashboard from "./pages/dashboard/Crypto-dashboard";
import MarketOverviewChart from "./pages/dashboard/MarketOverviewChart";
import MiniChart from "./pages/dashboard/MiniChart";
import PriceChart from "./pages/dashboard/PriceChart";

function App() {
  return (
    <div>
      <CryptoDashboard></CryptoDashboard>
      {/* <PriceChart></PriceChart> */}
      {/* <MiniChart></MiniChart> */}
      <MarketOverviewChart></MarketOverviewChart>
    </div>
  );
}

export default App;
