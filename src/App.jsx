import './App.css'
import quotes from './assets/quotes.json'
import QuoteBox from './assets/components/QuoteBox'
import { useState } from 'react'

function App() {

  const getRandomNumber = ()=>{
    setRandomNumber(Math.floor(Math.random() * 101))
  }

  const [randomNumber , setRandomNumber] = useState(Math.floor(Math.random() * 101))


  const colors = [
  "#CFFFDD","#B4DEC1","#5C5863","#A85163","#FF1F4C","#75616B","#BFCFF7","#DCE4F7","#F8F3BF","#D34017","#382F32","#FFEAF2","#FCD9E5","#FBC5D8","#F1396D",
  "#B6D8C0","#C8D9BF","#DADABD","#ECDBBC","#FEDCBA","#E3DFBA","#C8D6BF","#93CCC6","#6CBDB5","#1A1F1E","#A7C5BD","#E5DDCB","#EB7B59","#CF4647","#524656",
  "#9DC9AC","#FFFEC7","#F56218","#FF9D2E","#919167","#413D3D","#040004","#C8FF00","#FA023C","#4B000F","#EDF6EE","#D1C089","#B3204D","#412E28","#151101",
  "#A8A7A7","#CC527A","#E8175D","#474747","#363636","#7E5686","#A5AAD9","#E8F9A2","#F8A13F","#BA3C3D","#FFEDBF","#F7803C","#F54828","#2E0D23","#F8E4C1",
  "#5E9FA3","#DCD1B4","#FAB87F","#F87E7B","#B05574","#951F2B","#F5F4D7","#E0DFB1","#A5A36C","#535233","#FFFBB7","#A6F6AF","#66B6AB","#5B7C8D","#4F2958",
  "#000000","#9F111B","#B11623","#292C37","#CCCCCC","#9CDDC8","#BFD8AD","#DDD9AB","#F7AF63","#633D2E","#EFF3CD","#B2D5BA","#61ADA0","#248F8D","#605063",
  "#84B295","#ECCF8D","#BB8138","#AC2005","#2C1507","#FCFEF5","#E9FFE1","#CDCFB7","#D6E6C3","#FAFBE3","#0CA5B0"]


  console.log(quotes[0])


  document.body.style = `Background: ${colors[randomNumber]}`



  return (
    <div className="App">
      <QuoteBox 
        getRandomNumber={getRandomNumber}
        randomNumber={randomNumber}
        colors={colors}
        ></QuoteBox>
    </div>
  )
}

export default App
