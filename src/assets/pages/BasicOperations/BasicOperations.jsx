import { useState } from 'react';

export const BasicOperations = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(null);

  const handleSum = () => setResult(num1 + num2);
  const handleSubtract = () => setResult(num1 - num2);
  const handleMultiply = () => setResult(num1 * num2);
  const handleDivide = () => {
    if (num2 !== 0) {
      setResult(num1 / num2);
    } else {
      setResult('Error: División por cero');
    }
  };

  return (
    <>
        <div>
            <h1 className='text-5xl font-bold text-teal-500 m-2 text-center'>Calculadora</h1>
            <div className='w-120 p-8 m-4 h-80 flex flex-col justify-center items-center bg-gradient-to-b from-teal-600 via-emerald-500 to-teal-600 rounded-xl'>
      <input 
        onChange={(e) => setNum1(parseFloat(e.target.value))} 
        className='w-80 text-xl rounded-xl p-2 mb-2' 
        type="number" 
        placeholder='Ingrese el primer número' 
      />
      <input 
        onChange={(e) => setNum2(parseFloat(e.target.value))} 
        className='w-80 text-xl rounded-xl p-2 mb-2' 
        type="number" 
        placeholder='Ingrese el segundo número' 
      />
      <div className='flex space-x-2 mb-4'>
        <button onClick={handleSum} className='bg-blue-500 p-2 text-white rounded-xl font-bold'>
          Sumar
        </button>
        <button onClick={handleSubtract} className='bg-red-500 p-2 text-white rounded-xl font-bold'>
          Restar
        </button>
        <button onClick={handleMultiply} className='bg-green-500 p-2 text-white rounded-xl font-bold'>
          Multiplicar
        </button>
        <button onClick={handleDivide} className='bg-yellow-500 p-2 text-white rounded-xl font-bold'>
          Dividir
        </button>
      </div>
      <h2 className='text-white text-2xl font-bold'>
        Resultado: {result !== null ? result : '0'}
      </h2>
    </div>
        </div>
    </>
  );
};
