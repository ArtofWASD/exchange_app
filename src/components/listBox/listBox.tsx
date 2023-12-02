import { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import {ChevronDownIcon} from "@heroicons/react/24/solid"

const people = [
  { id: 1, name: "Durward Reynolds", unavailable: false },
  { id: 2, name: "Kenton Towne", unavailable: false },
  { id: 3, name: "Therese Wunsch", unavailable: false },
  { id: 4, name: "Benedict Kessler", unavailable: true },
  { id: 5, name: "Katelyn Rohan", unavailable: false },
];


const ListBox = () => {
  const [selectedCyrrency, setSelectedCyrrency] = useState(people[0]);
  return (
    <div className="w-128">
      <Listbox value={selectedCyrrency} onChange={setSelectedCyrrency}>
        <div className="relative mt-1">
          <Listbox.Button className="font-roboto border-2 w-full cursor-default rounded-lg bg-slate-100 py-3 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
          <span className="block truncate">{selectedCyrrency.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
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
            <Listbox.Options className="absolute font-roboto mt-1 max-h-60 w-full overflow-auto bg-slate-100 py-3 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {people.map((person) => (
                <Listbox.Option
                  key={person.id}
                  value={person}
                  disabled={person.unavailable}
                >
                  {person.name}
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
