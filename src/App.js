import Accordion from "./AccordionClass";
import DataGrid from "./DataGrid2";
import DatePicker from "./DatePicker";
import { HooksApp1 } from "./HooksApp";
import "./styles.css";
//import Tabs from "./Tabs2"; // styled-componets
import TreeView from "./TreeView3";
import DoubleSelect from "./doubleSelect";
import AutoComplete from "./AutoComplete";
import { lazy, Suspense, useState } from "react";
import Loading from "./Loading";

const delayForDemo = (promise) => {
  return new Promise((resolve) => {
    setTimeout(resolve, 1111);
  }).then(() => promise);
};
// const delayForDemoMy = (promise) => {
//   setTimeout(() => {
//     return promise;
//   }, 200);
// };

//lazy(load) is fn// load is fn, return a promise, no parameter//
//const Tabs = lazy(() => import("./Tabs2"));
const Tabs = lazy(() => delayForDemo(import("./Tabs2")));
export default function App() {
  const [isShowLazy, setisShowLazy] = useState(false);
  return (
    <div className="App">
      <AutoComplete />
      <button onClick={() => setisShowLazy(!isShowLazy)}>
        Show lazy(load)
      </button>
      {isShowLazy && (
        <Suspense fallback={<Loading />}>
          <Tabs />
        </Suspense>
      )}
      <DoubleSelect />
      <HooksApp1 />
      <TreeView />
      <DatePicker />
      <DataGrid />
      <Accordion />
    </div>
  );
}
