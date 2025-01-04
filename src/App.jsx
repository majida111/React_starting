import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';


function App() {
  return (
    <>
      <Header />
      <main>
       <CoreConcepts />
       <Examples />
      </main>
    </>//this tag is used alternatives of fragment -fragment will help to avoid unneccessary div  for wrapping the other objects 
  );
}
export default App;