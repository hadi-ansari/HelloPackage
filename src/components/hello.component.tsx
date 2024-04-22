import { useCallback } from 'react'


export const Hello = () => {

    const handleOnHelloClick = useCallback(()=>{
        window.alert("Hello there!")
    },[])
  return (
    <div>
        <button onClick={handleOnHelloClick}>Hello</button>
    </div>
  )
}