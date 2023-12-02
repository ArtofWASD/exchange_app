import Input from "./components/input/input";
import ListBox from "./components/listBox/listBox";
import Title from "./components/title/title";
import { ArrowsRightLeftIcon } from "@heroicons/react/24/solid";

function App() {
  return (
    <div className="grid justify-items-center mt-56">
      <div className="grid grid-rows-3 justify-items-start">
        <Title />
        <div className="my-4 flex gap-4 items-center">
          <ListBox />
          <ArrowsRightLeftIcon
            className="h-6 w-6 text-blue-500 hover:text-blue-600"
            aria-hidden="true"
          />
          <ListBox />
        </div>
        <div>
          <p className="text-base font-roboto font-normal">
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
