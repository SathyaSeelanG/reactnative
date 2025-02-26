import { Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function Index() {
  // Store the number shown on calculator screen
  const [number, setNumber] = useState('0');
  // Store the previous number when an operator is pressed
  const [savedNumber, setSavedNumber] = useState('');
  // Store the operator (+, -, ×, ÷)
  const [operation, setOperation] = useState('');

  // Handle when a number is pressed
  const pressNumber = (num: string) => {
    if (number === '0') {
      setNumber(num);
    } else {
      setNumber(number + num);
    }
  };

  // Handle when an operator is pressed
  const pressOperator = (op: string) => {
    setSavedNumber(number);
    setOperation(op);
    setNumber('0');
  };

  // Handle when equals (=) is pressed
  const calculate = () => {
    const num1 = parseFloat(savedNumber);
    const num2 = parseFloat(number);
    let result = 0;

    // Do the math based on which operator was chosen
    if (operation === '+') result = num1 + num2;
    if (operation === '-') result = num1 - num2;
    if (operation === '×') result = num1 * num2;
    if (operation === '÷') result = num1 / num2;

    setNumber(result.toString());
    setSavedNumber('');
    setOperation('');
  };

  // Clear everything when C is pressed
  const clear = () => {
    setNumber('0');
    setSavedNumber('');
    setOperation('');
  };

  return (
    <View>
      {/* Calculator display */}
      <Text>{number}</Text>

      {/* Number buttons */}
      <View>
        <TouchableOpacity onPress={() => pressNumber('7')}>
          <Text>7</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => pressNumber('8')}>
          <Text>8</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => pressNumber('9')}>
          <Text>9</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => pressOperator('÷')}>
          <Text>÷</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={() => pressNumber('4')}>
          <Text>4</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => pressNumber('5')}>
          <Text>5</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => pressNumber('6')}>
          <Text>6</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => pressOperator('×')}>
          <Text>×</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={() => pressNumber('1')}>
          <Text>1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => pressNumber('2')}>
          <Text>2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => pressNumber('3')}>
          <Text>3</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => pressOperator('-')}>
          <Text>-</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={() => clear()}>
          <Text>C</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => pressNumber('0')}>
          <Text>0</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => calculate()}>
          <Text>=</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => pressOperator('+')}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
