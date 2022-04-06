import { useEffect, useState } from "react";
import axios from "axios";

import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Select } from "./components/Select";

function App() {
  const [USD, setUSD] = useState(0);
  const [UAH, setUAH] = useState(0);
  const [EURO, setEURO] = useState(0);
  const [initialСurrency, setInitialСurrency] = useState("");
  const [finalСurrency, setFinalСurrency] = useState("");
  const [firstСurrency, setFirstСurrency] = useState("UAH");
  const [secondСurrency, setSecondСurrency] = useState("USD");

  useEffect(() => {
    axios
      .get(`https://api.exchangerate.host/convert?from=EUR&to=UAH`)
      .then(({ data }) => {
        setEURO(Math.round(data.result * 10) / 10);
      });
    axios
      .get(`https://api.exchangerate.host/convert?from=USD&to=UAH`)
      .then(({ data }) => {
        setUAH(Math.round(data.result * 10) / 10);
      });
    axios
      .get(`https://api.exchangerate.host/convert?from=USD&to=EUR`)
      .then(({ data }) => {
        setUSD(Math.round(data.result * 10) / 10);
      });
  }, []);

  const resolveInitialInput = (e) => {
    if (
      (firstСurrency === "UAH" && secondСurrency === "UAH") ||
      (firstСurrency === "USD" && secondСurrency === "USD") ||
      (firstСurrency === "EURO" && secondСurrency === "EURO")
    ) {
      setFinalСurrency(e.target.value * 1);
    } else if (firstСurrency === "UAH" && secondСurrency === "USD") {
      setFinalСurrency(e.target.value / UAH);
    } else if (firstСurrency === "UAH" && secondСurrency === "EURO") {
      setFinalСurrency(e.target.value / EURO);
    } else if (firstСurrency === "USD" && secondСurrency === "EURO") {
      setFinalСurrency(e.target.value * USD);
    } else if (firstСurrency === "USD" && secondСurrency === "UAH") {
      setFinalСurrency(e.target.value * UAH);
    } else if (firstСurrency === "EURO" && secondСurrency === "UAH") {
      setFinalСurrency(e.target.value * EURO);
    } else if (firstСurrency === "EURO" && secondСurrency === "USD") {
      setFinalСurrency(e.target.value / USD);
    }
  };
  const resolveFinalInput = (e) => {
    if (
      (firstСurrency === "UAH" && secondСurrency === "UAH") ||
      (firstСurrency === "USD" && secondСurrency === "USD") ||
      (firstСurrency === "EURO" && secondСurrency === "EURO")
    ) {
      setInitialСurrency(e.target.value * 1);
    } else if (firstСurrency === "UAH" && secondСurrency === "USD") {
      setInitialСurrency(e.target.value * UAH);
    } else if (firstСurrency === "UAH" && secondСurrency === "EURO") {
      setInitialСurrency(e.target.value * EURO);
    } else if (firstСurrency === "USD" && secondСurrency === "EURO") {
      setInitialСurrency(e.target.value * USD);
    } else if (firstСurrency === "USD" && secondСurrency === "UAH") {
      setInitialСurrency(e.target.value / UAH);
    } else if (firstСurrency === "EURO" && secondСurrency === "UAH") {
      setInitialСurrency(e.target.value / EURO);
    } else if (firstСurrency === "EURO" && secondСurrency === "USD") {
      setInitialСurrency(e.target.value * USD);
    }
  };

  return (
    <div className="grid">
      <Header USD={USD} UAH={UAH} EURO={EURO} />
      <div className="flex gap-[10px] mx-auto mt-[20px]">
        <Select
          setCurrency={setFirstСurrency}
          currency={firstСurrency}
          setInitialСurrency={setInitialСurrency}
          setFinalСurrency={setFinalСurrency}
        />
        <Input
          value={initialСurrency}
          resolveInputValue={resolveInitialInput}
          setInputValue={setInitialСurrency}
        />
      </div>
      <div className="text-center mt-[20px]">TO</div>
      <div className="flex gap-[10px] mx-auto mt-[20px]">
        <Select
          setCurrency={setSecondСurrency}
          currency={secondСurrency}
          setInitialСurrency={setInitialСurrency}
          setFinalСurrency={setFinalСurrency}
        />
        <Input
          value={finalСurrency}
          resolveInputValue={resolveFinalInput}
          setInputValue={setFinalСurrency}
        />
      </div>
    </div>
  );
}

export default App;
