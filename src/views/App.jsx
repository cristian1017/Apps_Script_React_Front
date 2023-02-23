import {useState, useEffect} from 'react'

export const App = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    google.script.run
      .withSuccessHandler((resp) => {
        setData(JSON.parse(resp));
      })
      .getDataJSON();
  }, [])

  return (
    <div>
      <h1>Hola como estas el dia de hoy ?</h1>
      {data.map((e)=> {
        console.log(e)
      })}
    </div>
  );
}
