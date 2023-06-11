import { useCallback, useEffect, useMemo, useRef, useState } from "react";
const fetchCounter = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(100);
    }, 1000);
  });
};
function HooksApp() {
  const [counter, setCounter] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const counterRef = useRef(counter);
  counterRef.current = counter;
  useEffect(() => {
    setIsLoading(true);
    fetchCounter()
      .then((val) => {
        setCounter(val);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <h4>hooks App</h4>
      <div>
        {isLoading ? <h5>loading......</h5> : counter}
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          Add 1
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setTimeout(() => {
              alert(counterRef.current);
            }, 3000);
          }}
        >
          alert in 3s
        </button>
      </div>
    </>
  );
}

const useCounter = (initCounter = 0) => {
  const [counter, setCounter] = useState(initCounter);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetchCounter()
      .then((val) => {
        setCounter(val);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return [counter, isLoading, setCounter];
};

function HooksApp1() {
  const [counter, isLoading, setCounter] = useCounter(1);
  const counterRef = useRef(counter);
  counterRef.current = counter;

  const fn = useCallback(function foo() {
    //loops 99999
  }, []);
  const fnRef = useRef(fn);
  // console.log("fnRef.current", fnRef.current === fn);

  const val = useMemo(() => [999], []);
  const valRef = useRef(val);
  //console.log("valRef.current===val", valRef.current === val);

  return (
    <>
      <div>
        {isLoading ? <h5>loading......</h5> : counter}
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          Add 1
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setTimeout(() => {
              alert(counterRef.current);
            }, 3000);
          }}
        >
          alert in 3s
        </button>
      </div>
    </>
  );
}

export { HooksApp1, HooksApp };
