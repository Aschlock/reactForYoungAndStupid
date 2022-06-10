import {useState} from 'react';


export default function Footer() {
  let [d6, setD6] = useState(1)
  function roll(min, max) {
      setD6(Math.floor(Math.random() * (max - min + 1)) + min);
  }

  return (
    <>
      <footer className="d-flex justify-content-center text-white bg-dark p-2">
        <i class={'bi user-select-none bi-dice-' + d6} onClick={() => roll(1,6)}></i>
      </footer>
    </>
  )
}
