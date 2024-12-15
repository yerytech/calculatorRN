import { useEffect, useRef, useState } from "react";

enum Operator {
  add = "+",
  subtract = "-",
  multiply = "x",
  divide = "/",
}
export const useCalculator = () => {
  const [formula, setFomula] = useState("");
  const [number, setNumber] = useState("0");
  const [prevNumber, setPrevNumber] = useState("");
  const lastOperation = useRef<Operator>();

  useEffect(() => {
    if (lastOperation.current) {
      const formulaPart = formula.split("").at(0);
      setFomula(`${formulaPart} ${lastOperation.current}${number}`);
    } else {
      setFomula(number);
    }
    setFomula(number);
  }, [number]);

  const handleAC = () => {
    setNumber("0");
    setPrevNumber("");
  };

  const deletelast = () => {
    if (number.length === 1 || number === "-") return setNumber("0");
    let newNumber = number.slice(0, -1);
    if (newNumber === "-") {
      return setNumber("0");
    } else {
      return setNumber(newNumber);
    }
  };

  const toglePlusMinus = () => {
    if (number.includes("-")) {
      return setNumber(number.replace("-", ""));
    }
    setNumber("-" + number);
  };

  const buildNumber = (numberString: string) => {
    if (number.includes(".") && numberString === ".") return;
    if (number.startsWith("0") || number.startsWith("-0")) {
      // punto decimal
      if (numberString === ".") {
        return setNumber(number + numberString);
      }
      // evalua si es otro cero y no hay numero
      if (numberString === "0" && number.includes(".")) {
        return setNumber(number + numberString);
      }
      // evalua si no es cero y no hay punto debe ser el primer number
      if (numberString !== "0" && !number.includes(".")) {
        return setNumber(numberString);
      }
      if (numberString === "0" && !number.includes(".")) return;
    }
    setNumber(number + numberString);
  };

  const setLastNumber = () => {
    if (number.endsWith(".")) {
      setPrevNumber(number.slice(0 - 1));
    } else {
      setPrevNumber(number);
    }
    setNumber("0");
  };

  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.divide;
  };
  const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.multiply;
  };
  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.add;
  };
  const subtractOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.subtract;
  };

  const calculateResult = () => {
    const n1 = Number(number);
    const n2 = Number(prevNumber);
    switch (lastOperation.current) {
      case Operator.add:
        setNumber(`${n1 + n2}`);
        break;
      case Operator.multiply:
        setNumber(`${n1 * n2}`);
        break;
      case Operator.subtract:
        setNumber(`${n2 - n1}`);
        break;
      case Operator.divide:
        setNumber(`${n2 / n1}`);
        break;

      default:
        throw new Error("Not Implement Operation ");
    }

    setPrevNumber("");
  };

  return {
    // properties
    number,
    prevNumber,
    formula,
    // methods
    buildNumber,
    handleAC,
    toglePlusMinus,
    deletelast,
    divideOperation,
    multiplyOperation,
    addOperation,
    subtractOperation,
    calculateResult,
  };
};
