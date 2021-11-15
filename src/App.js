import React , {useState} from 'react';

const  App = () => {
  const [count,setCount] = useState(0)
  
  const increment = () => setCount(count+1)
  const decrement = () => setCount(count-1)
  const increment2 = () => setCount(previousCount => previousCount + 1 )
  const reset = () => setCount(0)
  const double = () =>setCount(count*2)
  const three1 = () => setCount(previousCount => {
    return previousCount % 3 === 0 ? previousCount/3 : previousCount 
  })
  const three = () =>setCount(previousCount => {
    if(previousCount % 3 === 0){
      return previousCount / 3
    }else{
      return previousCount
    }
  }



  )
  

  return (
    <>
    <div>count: {count} </div>
    <button onClick={increment}>+1</button>
    <button onClick={decrement}>-1</button>
    <div>
     <button onClick={increment2}>+1</button>
    </div>
    <div>
      <button onClick={reset}>Reset</button>
    </div>
    <div>
      <button onClick={double}>x2</button>
    </div>
    <div>
      <button onClick={three}>3の倍数の時だけ3で割る</button>
    </div>
    <div>
      <button onClick={three1}>3の倍数の時だけ3で割る</button>
    </div>
    </>
  );
}

export default App;
