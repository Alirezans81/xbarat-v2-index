function getNumber(_str: string) {
  var arr: string[] = (_str + "").split("");
  var out = [];
  for (var cnt: number = 0; cnt < arr.length; cnt++) {
    if (isNaN(+arr[cnt]) === false) {
      out.push(arr[cnt]);
    }
  }
  return Number(out.join(""));
}
function getIntegerPart(number: number) {
  let str = number + "";
  return str.split(".")[0];
}
function getFloatPart(number: number) {
  let str = number + "";
  return str.split(".")[1];
}
function addComma(number: number, returnsZero?: boolean) {
  if (+number < 1000) {
    return number;
  } else {
    var num = getNumber(getIntegerPart(number));
    if (num === 0) {
      return returnsZero ? 0 : "";
    } else {
      return (
        num.toLocaleString() +
        (getFloatPart(number) ? "." + getFloatPart(number) : "")
      );
    }
  }
}

const useAddComma = () => {
  return addComma;
};

const isNumberFloat = (number: number) => {
  const result = getFloatPart(number);
  if (result) {
    return true;
  } else {
    return false;
  }
};
const useIsNumberFloat = () => {
  return isNumberFloat;
};

const reverseRate = (number: number) => {
  const convertedNumber =
    !number || number === 0 ? "" : (1 / number).toFixed(4);
  return convertedNumber;
};
const useReverseRate = () => {
  return reverseRate;
};

const removeComma = (string: string) => {
  if (string.length >= 3) {
    return +string.replaceAll(",", "");
  } else {
    return string;
  }
};
const useRemoveComma = () => {
  return removeComma;
};

const calculateNotReversedRate = (
  rate: number,
  rate_multiplier: number,
  floating_number: number
) => {
  return rate === 0
    ? 0
    : +(1 / (+rate / +rate_multiplier)).toFixed(floating_number);
};
const useCalculateNotReverseRate = () => {
  return calculateNotReversedRate;
};

const roundDown = (number: number, floating_number: number) => {
  if (floating_number === 0) {
    return Math.floor(number);
  } else {
    const aaa = 10 ** floating_number;
    return Math.floor(number * aaa) / aaa;
  }
};

export {
  useAddComma,
  useIsNumberFloat,
  useReverseRate,
  useRemoveComma,
  useCalculateNotReverseRate,
  roundDown,
};
