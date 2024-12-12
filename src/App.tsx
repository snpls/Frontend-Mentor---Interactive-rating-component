import { useState } from "react";
import { FaStar } from "react-icons/fa";

interface Props {
  number: string,
}

interface Props2 {
  item: string,
  isSubmitted: boolean,
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>,
}

const App = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [item, setItem] = useState("");

  const Button = ({number}:Props) => (
    <button onClick={() => setItem(number)} className="bg-gray-600 size-10 rounded-full text-gray-200 transition-all duration-300 hover:bg-orange-500 hover:text-gray-900 focus:bg-gray-400">{number}</button>
  )

  return (
    <main>
      {!isSubmitted && <div className="container h-screen flex items-center justify-center">
          <div className="bg-gray-700 rounded-xl p-5 min-w-[280px] max-w-[400px] space-y-5">
            <div className="bg-gray-600 rounded-full size-10 flex justify-center items-center text-orange-500"><FaStar /></div>
            <h4 className="text-white">How did we do?</h4>
            <p className="text-gray-900">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem quod molestias, quidem magni cupiditate minus!</p>
            <ul className="flex justify-between">
              <li><Button number = {'1'}/></li>
              <li><Button number = {'2'}/></li>
              <li><Button number = {'3'}/></li>
              <li><Button number = {'4'}/></li>
              <li><Button number = {'5'}/></li>
            </ul>
            <button onClick={() => setIsSubmitted(!isSubmitted)} className="bg-orange-500 rounded-full w-full py-3 transition-all duration-300 hover:bg-gray-200 hover:text-gray-900">Sumbit</button>
        </div>
      </div>}

      {isSubmitted && <ThankYou setIsSubmitted={setIsSubmitted} isSubmitted={isSubmitted} item={item} />}
    </main>
  )
}

const ThankYou = ({isSubmitted,setIsSubmitted,item} : Props2) => {
  return (
      <div className="container h-screen flex items-center justify-center">
          <div className="bg-gray-700 rounded-xl p-5 min-w-[280px] max-w-[400px] space-y-5 text-center">
            <img className="mx-auto" src="/images/illustration-thank-you.svg" alt="" />
            <p className="bg-gray-800 text-orange-400 inline-block p-2 rounded-xl">You have selected {item} of 5</p>
            <h4 className="text-white text-2xl">Thank you</h4>
            <p className="text-gray-900">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem quod molestias, quidem magni cupiditate minus!</p>
            <button onClick={() => setIsSubmitted(!isSubmitted)} className="bg-orange-500 rounded-full w-full py-3 transition-all duration-300 hover:bg-gray-200 hover:text-gray-900">Rate Again</button>
        </div>
      </div>
  )
}

export default App