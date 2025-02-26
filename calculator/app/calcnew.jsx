import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";

export default function Index() {
  // Store the number currently displayed on the calculator screen
  const [number, setNumber] = useState('0');
  // Store the first number entered before an operation
  const [savedNumber, setSavedNumber] = useState('');
  // Store the selected operator (+, -, ×, ÷)
  const [operation, setOperation] = useState('');

  // Function to handle when a number button is pressed
  const pressNumber = (num: string) => {
    if (number === '0') {
      setNumber(num); // Replace '0' with the new number
    } else {
      setNumber(number + num); // Append the new number
    }
  };

  // Function to handle when an operator (+, -, ×, ÷) is pressed
  const pressOperator = (op: string) => {
    setSavedNumber(number); // Save the current number before operation
    setOperation(op); // Set the selected operation
    setNumber('0'); // Reset the display for the next number input
  };

  // Function to perform the calculation when '=' is pressed
  const calculate = () => {
    const num1 = parseFloat(savedNumber); // Convert saved number to a float
    const num2 = parseFloat(number); // Convert current number to a float
    let result = 0;

    // Perform the operation based on the selected operator
    if (operation === '+') result = num1 + num2;
    if (operation === '-') result = num1 - num2;
    if (operation === '×') result = num1 * num2;
    if (operation === '÷') result = num1 / num2;

    setNumber(result.toString()); // Display the result
    setSavedNumber(''); // Clear saved number
    setOperation(''); // Clear operation
  };

  // Function to clear the calculator screen when 'C' is pressed
  const clear = () => {
    setNumber('0');
    setSavedNumber('');
    setOperation('');
  };

  return (
    <View style={styles.container}>
      {/* Display the current number on screen */}
      <Text style={styles.display}>{number}</Text>

      {/* Number and Operator Buttons */}
      {/* Each row contains numbers and an operator button */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => pressNumber('7')}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => pressNumber('8')}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => pressNumber('9')}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operatorButton} onPress={() => pressOperator('÷')}>
          <Text style={styles.buttonText}>÷</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => pressNumber('4')}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => pressNumber('5')}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => pressNumber('6')}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operatorButton} onPress={() => pressOperator('×')}>
          <Text style={styles.buttonText}>×</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => pressNumber('1')}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => pressNumber('2')}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => pressNumber('3')}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operatorButton} onPress={() => pressOperator('-')}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => clear()}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => pressNumber('0')}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => calculate()}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operatorButton} onPress={() => pressOperator('+')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Styles for calculator layout
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  display: {
    fontSize: 40,
    textAlign: 'right',
    padding: 20,
    backgroundColor: 'white',
    marginBottom: 20,
    borderRadius: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '23%',
    alignItems: 'center',
  },
  operatorButton: {
    backgroundColor: 'orange',
    padding: 20,
    borderRadius: 10,
    width: '23%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
