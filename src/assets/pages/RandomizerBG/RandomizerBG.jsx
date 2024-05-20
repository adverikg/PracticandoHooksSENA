import { useState } from 'react';

export const RandomizerBG = () => {
    const [bgColor, setBgColor] = useState('white')

    const generateRandomColor = () => {
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
      setBgColor(randomColor)
    }
  return (
    <>
        <div>
            <h1 className='text-5xl font-bold p-4  text-center h-38 flex items-center justify-center bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500' style={{ color: bgColor }}>Background Aleatorio</h1>
            <div className='w-100 h-screen p-8 flex flex-col justify-center items-center' style={{ backgroundColor: bgColor }}>
                <button onClick={generateRandomColor} className='bg-emerald-500 p-4 text-white text-2xl rounded-xl font-bold'>Generar Color Aleatorio</button>
            </div>
        </div>
    </>
  )
}
