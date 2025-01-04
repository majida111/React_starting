
import { useState } from 'react';
import { EXAMPLES } from '../data.js';
import TabButton from '../components/TabButton.jsx';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx'
export default function Examples(){
    const [selectTopics,setSelectTopics]=useState();
    function handlerSelect(selectedButton){
      //selectedButton ==> 'components','jsx','props','state'
      setSelectTopics(selectedButton);
      console.log(selectTopics);  
    }
    let tabContent=<p>Please select a topic.</p>;
    if(selectTopics){
         tabContent=<div id='tab-content'>
         <h3>{EXAMPLES[selectTopics].title}</h3>
         <p>{EXAMPLES[selectTopics].description}</p>
         <pre>
           <code>{EXAMPLES[selectTopics].code}</code>
         </pre>
       </div>

    }
    return(
        <Section title="Examples" id='examples'>
            <Tabs 
            buttons={<>
                <TabButton isSelected={selectTopics ==='components'} onClick={()=>handlerSelect('components')}>Components</TabButton>
                <TabButton isSelected={selectTopics ==='jsx'} onClick={()=>handlerSelect('jsx')}>Jsx</TabButton>
                <TabButton isSelected={selectTopics ==='props'} onClick={()=>handlerSelect('props')}>Props</TabButton>
                <TabButton isSelected={selectTopics ==='state'} onClick={()=>handlerSelect('state')}>State</TabButton>
                
                </>
            }> {tabContent}   
            </Tabs>
        
      </Section>
    )
}