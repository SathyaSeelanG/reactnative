import { Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function Index() {
  const [number, setNumber] = useState('0');
  const [savedNumber, setSavedNumber] = useState('');
  const [operation, setOperation] = useState('');

  const pressNumber = (num: string) => {
    if (number === '0') {
      setNumber(num);
    } else {
      setNumber(number + num);
    }
  };

  const pressOperator = (op: string) => {
    setSavedNumber(number);
    setOperation(op);
    setNumber('0');
  };

  const calculate = () => {
    const num1 = parseFloat(savedNumber);
    const num2 = parseFloat(number);
    let result = 0;

    if (operation === '+') result = num1 + num2;
    if (operation === '-') result = num1 - num2;
    if (operation === '×') result = num1 * num2;
    if (operation === '÷') result = num1 / num2;

    setNumber(result.toString());
    setSavedNumber('');
    setOperation('');
  };

  const clear = () => {
    setNumber('0');
    setSavedNumber('');
    setOperation('');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' }}>
      <View style={{ width: 300, backgroundColor: '#222', padding: 20, borderRadius: 10 }}>
        <Text style={{ fontSize: 40, color: 'white', textAlign: 'right', marginBottom: 10 }}>{number}</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
          {[ '7', '8', '9', '÷' ].map((item) => (
            <TouchableOpacity key={item} onPress={() => item === '÷' ? pressOperator(item) : pressNumber(item)} style={{ flex: 1, padding: 15, margin: 5, backgroundColor: item === '÷' ? '#ff9500' : '#333', alignItems: 'center', borderRadius: 5 }}>
              <Text style={{ color: 'white', fontSize: 20 }}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
          {[ '4', '5', '6', '×' ].map((item) => (
            <TouchableOpacity key={item} onPress={() => item === '×' ? pressOperator(item) : pressNumber(item)} style={{ flex: 1, padding: 15, margin: 5, backgroundColor: item === '×' ? '#ff9500' : '#333', alignItems: 'center', borderRadius: 5 }}>
              <Text style={{ color: 'white', fontSize: 20 }}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
          {[ '1', '2', '3', '-' ].map((item) => (
            <TouchableOpacity key={item} onPress={() => item === '-' ? pressOperator(item) : pressNumber(item)} style={{ flex: 1, padding: 15, margin: 5, backgroundColor: item === '-' ? '#ff9500' : '#333', alignItems: 'center', borderRadius: 5 }}>
              <Text style={{ color: 'white', fontSize: 20 }}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity onPress={() => clear()} style={{ flex: 1, padding: 15, margin: 5, backgroundColor: '#ff3b30', alignItems: 'center', borderRadius: 5 }}>
            <Text style={{ color: 'white', fontSize: 20 }}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => pressNumber('0')} style={{ flex: 1, padding: 15, margin: 5, backgroundColor: '#333', alignItems: 'center', borderRadius: 5 }}>
            <Text style={{ color: 'white', fontSize: 20 }}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => calculate()} style={{ flex: 1, padding: 15, margin: 5, backgroundColor: '#4cd964', alignItems: 'center', borderRadius: 5 }}>
            <Text style={{ color: 'white', fontSize: 20 }}>=</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => pressOperator('+')} style={{ flex: 1, padding: 15, margin: 5, backgroundColor: '#ff9500', alignItems: 'center', borderRadius: 5 }}>
            <Text style={{ color: 'white', fontSize: 20 }}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}