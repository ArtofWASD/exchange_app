import { useState, Fragment, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon, MinusIcon } from "@heroicons/react/24/solid";
import { getListOfAvailableCurrencies } from "../../utils/handlers";
interface currencyData {
  ticker: string;
  name: string;
  network: string;
  image: string;
}

const ListBox = () => {
  const [currencyData, setCurrencyData] = useState<Array<currencyData>>();
  const [selectedCyrrency, setSelectedCyrrency] = useState<currencyData>();
  useEffect(() => {
    const data = getListOfAvailableCurrencies().then((data) =>
      setCurrencyData(data.slice(0, 50))
    );
  }, []);

  return (
    <div className="w-128">
      <Listbox value={selectedCyrrency} onChange={setSelectedCyrrency}>
        <div className="relative mt-1">
          <Listbox.Button className="font-roboto border-2 w-full cursor-default rounded bg-slate-100 py-3 pl-3 pr-16 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncrate h-5 w-36">
              {selectedCyrrency ? selectedCyrrency?.name : "Выберите монету"}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center gap-2 pr-4">
              {selectedCyrrency ? (
                <span className="text-slate-200 ">|</span>
              ) : (
                ""
              )}
              <span>
                {selectedCyrrency ? (
                  <img
                    src={selectedCyrrency?.image}
                    className="h-8 w-8 pr-2"
                  />
                ) : (
                  ""
                )}
              </span>
              <span>
                {selectedCyrrency ? selectedCyrrency.ticker.toUpperCase() : ""}
              </span>
              <ChevronDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute font-roboto mt-1 max-h-60 w-full overflow-auto bg-slate-100 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm ">
              {currencyData?.map((item: currencyData) => (
                <Listbox.Option
                  className=" pl-3 bg-white hover:border-2 hover:border-blue-500 py-2 hover:bg-slate-100"
                  key={item.ticker + `${item.network}`}
                  value={item}
                >
                  {item.name}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default ListBox;
