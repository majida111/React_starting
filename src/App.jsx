import {useState} from 'react';

import { CORE_CONCEPTS } from './data.js'
import { EXAMPLES } from './data.js';

import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';



function App() {

const [selectTopics,setSelectTopics]=useState('components');

    function handlerSelect(selectedButton){
      //selectedButton ==> 'components','jsx','props','state'
      setSelectTopics(selectedButton);
      console.log(selectTopics);
      
    }
    console.log('APP COMPONENT EXECUTING');
    
  return (
    <>
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept 
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}/>
            <CoreConcept {...CORE_CONCEPTS[1]}
            />
            <CoreConcept {...CORE_CONCEPTS[2]}
            />
            <CoreConcept {...CORE_CONCEPTS[3]}
            />
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
           <TabButton onSelect={()=>handlerSelect('components')}>Components</TabButton>
           <TabButton onSelect={()=>handlerSelect('jsx')}>Jsx</TabButton>
           <TabButton onSelect={()=>handlerSelect('props')}>Props</TabButton>
           <TabButton onSelect={()=>handlerSelect('state')}>State</TabButton>
          </menu>
          <div id='tab-content'>
            <h3>{EXAMPLES[selectTopics].title}</h3>
            <p>{EXAMPLES[selectTopics].description}</p>
            <pre>
              <code>{EXAMPLES[selectTopics].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
    </>
  );
}
export default App;