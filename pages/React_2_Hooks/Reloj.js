import { useState, useEffect } from 'react';

export default function Reloj(){
  
  const [date, setDate] = useState(new Date());
  
  function actualizaReloj() {
      setDate(new Date());
  }
  
  useEffect(() => {
    const timerId = setInterval(actualizaReloj, 1000);
      return function cleanup() {
        
        clearInterval(timerId);
    };
  }, []);
  
  return (
      
      <div>
        <h3>Reloj</h3>
          {date.toLocaleTimeString()}
      
      </div>
  );
}