import { useEffect, useState } from "react";
import Input from "./components/input/input";
import ListBox from "./components/listBox/listBox";
import Title from "./components/title/title";
import { ArrowsRightLeftIcon } from "@heroicons/react/24/solid";
import { getMinimalExchangeAmount } from "./utils/handlers";
interface CoinProps {
  name: string;
  ticker: string;
  network: string;
}
function App() {
  const [firstCoin, setFirstCoin] = useState<CoinProps | null>(null);
  const [secondCoin, setSecondCoin] = useState<CoinProps | null>(null);
  const [minAmountToExchange, setMinAmountToExchange] = useState<string | null>(
    null
  );

  const handelFirstCoin = (value: CoinProps) => {
    setFirstCoin(value);
  };
  const handelSecondCoin = (value: CoinProps) => {
    setSecondCoin(value);
  };

  useEffect(() => {
    if (firstCoin && secondCoin) {
      getMinimalExchangeAmount(firstCoin, secondCoin).then((data) =>
        setMinAmountToExchange(data.minAmount)
      );
    }
  }, [firstCoin, secondCoin]);

  return (
    <div className="grid justify-items-center mt-56">
      <div className="grid grid-rows-3 justify-items-start">
        <Title />
        <div className="my-5 flex gap-4 items-center">
          <ListBox onChange={handelFirstCoin} data={minAmountToExchange} />
          <ArrowsRightLeftIcon
            className="h-6 w-6 text-blue-500 hover:text-blue-600"
            aria-hidden="true"
          />
          <ListBox onChange={handelSecondCoin} data={minAmountToExchange} />
        </div>
        <div>
          <p className="text-base font-roboto font-normal mt-2">
            Your Ethereum address
          </p>
          <div className="flex gap-4">
            <Input />
            <input
              className="w-52 h-12 bg-blue-500 text-white text-xl hover:bg-blue-600 rounded"
              type="button"
              value="Exchange"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
