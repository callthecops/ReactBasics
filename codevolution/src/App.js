import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheets from './components/StyleSheets'
import Inline from './components/Inline';
import './components/appStyles.css'
import styles from './components/appStyles.module.css'
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
//Check Greet.js for clarification regarding stateless component(WITH PROPS)
//Check Welcome.js for clarification regarding statefull component(WITH PROPS)
//Check Message.js for clarification regarding STATE(WITH STATE)
//Check Counter.js for setState describtion
//Check FunctionClick.js for event handling in functions
//Check ClassClick.js for event handling in class components.
//Check Parent and ChildComponent.js in order to see how to includ a Child COmponent into a parent.
//Check UserGreeting.js and part 8 for conditional rendering
//Check NameList for Array operations
//Check StyleList.js,Inline.js and myStyle.css for styling components and part 10.
//Check Form.js for forms
//Check LifeCycleA.js,LifeCycleB.js and part 10 for lifecyle methods.
function App() {
  return (
    <div className="App">

      {/*first part}
      {/* <Welcome name="Marin" heroName="Batman" />
      <Welcome name="Babuin" heroName="Superman" />
      <Welcome name="Cartonar" heroName="Aquaman" />
      <br />
      <Greet />
      <Greet name="Marin" heroName="Batman" >
        <p>This is children props</p>
      </Greet>
      <Greet name="Babuin" heroName="Superman" >
        <button>Action</button>
      </Greet>
      <Greet name="Cartonar" heroName="Aquaman" />
      <Hello /> */}

      {/*Second part*/}
      {/* <Message /> */}

      {/*third part*/}
      {/* <Counter /> */}

      {/*fourth part*/}
      {/* <FunctionClick />
      <ClassClick /> */}

      {/*fifth part*/}
      {/* <EventBind /> */}

      {/*seventh part*/}
      {/* <ParentComponent /> */}

      {/*eight part*/}
      {/* <UserGreeting /> */}

      {/*ninth part*/}
      {/* <NameList /> */}

      {/*10 part*/}
      {/* <StyleSheets /> */}

      {/*we can also add conditional color change by adding a boolean attribute*/}
      {/* <StyleSheets primary={false} />
      <Inline />

      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1> */}

      {/*11 part*/}
      {/* <Form /> */}

      {/*12 part*/}
      <LifeCycleA />
    </div>
  );
}

export default App;
