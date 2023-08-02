import { Tab } from "@headlessui/react";
import { Fragment } from "react";

function App() {
  return (
    <div className="container bg-blue-900 shadow border h-full">
      <div className="container ml-4 mt-4 ">
        <Tab.Group>
          <Tab.List>
            <div className="container mb-3">
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? "bg-teal-700 p-2 text-white rounded mr-1 backdrop-hue-rotate-0"
                        : "bg-teal-900 p-2 text-white rounded mr-1"
                    }
                  >
                    Intro
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? "bg-teal-700 p-2 text-white rounded mr-1 backdrop-hue-rotate-0"
                        : "bg-teal-900 p-2 text-white rounded mr-1"
                    }
                  >
                    Running
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? "bg-teal-700 p-2 text-white rounded mr-1 backdrop-hue-rotate-0"
                        : "bg-teal-900 p-2 text-white rounded mr-1"
                    }
                  >
                    Aiming
                  </button>
                )}
              </Tab>

              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? "bg-teal-700 p-2 text-white rounded mr-1 backdrop-hue-rotate-0"
                        : "bg-teal-900 p-2 text-white rounded mr-1"
                    }
                  >
                    Walls
                  </button>
                )}
              </Tab>

              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? "bg-teal-700 p-2 text-white rounded mr-1 backdrop-hue-rotate-0"
                        : "bg-teal-900 p-2 text-white rounded mr-1"
                    }
                  >
                    Jumping
                  </button>
                )}
              </Tab>
            </div>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <p className="text-white text-lg">Story</p>
            </Tab.Panel>
            <Tab.Panel>
              <p className="text-white text-lg">How to run fast</p>
            </Tab.Panel>
            <Tab.Panel>
              <p className="text-white text-lg">How do you know where to run</p>
            </Tab.Panel>
            <Tab.Panel>
              <p className="text-white text-lg">What kind of walls are there</p>
            </Tab.Panel>
            <Tab.Panel>
              <p className="text-white text-lg">Why you also need to jump</p>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}

export default App;
