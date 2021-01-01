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
// import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheets from './components/StyleSheets'
import Inline from './components/Inline';
import './components/appStyles.css'
import styles from './components/appStyles.module.css'
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './AdvancedComponents/Table';
import { PureComponent } from 'react';
import ParentComponent from './AdvancedComponents/ParentComponent';
import RefsDemo from './AdvancedComponents/RefsDemo';
import PortalDemo from './AdvancedComponents/PortalDemo';
import Hero from './AdvancedComponents/Hero';
import ErrorBoundary from './AdvancedComponents/ErrorBoundary';
import ClickCounter from './AdvancedComponents/ClickCounter';
import HoverCounter from './AdvancedComponents/HoverCounter';
import ClickCounterTwo from './AdvancedComponents/ClickCounterTwo';
import HoverCounterTwo from './AdvancedComponents/HoverCounterTwo';
import Users from './AdvancedComponents/Users';
import CounterProps from './AdvancedComponents/CounterProps';
import ComponentC from './contextComponents/ComponentC';
import { UserProvider } from './contextComponents/userContext';
import PostList from './http/PostList';
import PostForm from './http/PostForm';
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import Home from './routerTest/Home';
import About from './routerTest/About';
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
//Check FragmentDemo.js and part 13 for fragments.Check Advanced components for the rest regarding fragments.
//Check Part 14 and PureComponent.js,RegulaCoponent.js in Advanced Components for Pure Components.
//Check part 15 and RefsDemo.js for refs.
//Check part 16 and PortalDemo.js in advanced Components for Portals
//Check part 17 and Hero.js,ErrorBoundary for error handling
//Check part 18 and ClickCounter.js,withCounter.js,HoverCounter.js for higher order components.
//Check part 19 and ClickCounterTwo.js,HoverCOunterTwo.js,CounterProps.js for rendering props.
//Check part 20 and ComponentC.js, ComponentF.js, ComponentE.js for React Context
//Check part 21 and http.PostList.js for HttpGet and axios.
//Check part 22 and PostForm.js for HttpPost.
function App() {
  return (
    //To use Router we have to first install it using npm install react-router-dom, then import above and then sorround the whole paragraph we want with the <Router> tags.Inside the router we can now create new Routes.These components have 2 parameters first is the url path and the second is the component it needs to render.Once we run the server we can access the component by entering that specific route.
    //Next we have Switch. We can use this component to group all our routes inside.Each time a request is made to a specific route, that specifi one is choosen by react.Next we can also create Link.In order to make them work we first have to define the routes to specific paths.Once they are defined, Links can be added everywhere and that specifi route will proc.
    //Links do client side routing which mean we are not reloading the whole application but only changing the page by refreshing it.Links "to" has to match with Route "path".
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
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
        {/* <LifeCycleA /> */}

        {/* Part 13 */}
        {/* <FragmentDemo /> */}
        {/* <Table /> */}
        {/* Part 14 */}
        {/* <PureComponent /> */}
        {/* <ParentComponent /> */}
        {/* Part 15 */}
        {/* <RefsDemo /> */}
        {/* Part 16 */}
        {/* <PortalDemo /> */}
        {/* Part 17 */}
        {/* <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary> */}
        {/* Part 18 */}
        {/* <ClickCounter name="Tudi" />
      <HoverCounter /> */}
        {/* Part 19 */}
        {/* <ClickCounterTwo />
      <HoverCounterTwo /> */}
        {/* Version one */}
        {/* <Users name={(isLoggedIn) => isLoggedIn ? "Welcome Tudor" : "Please Login"} /> */}
        {/* Version two */}
        {/* <Users render={(isLoggedIn) => isLoggedIn ? "Welcome Tudor" : "Please Login"} /> */}

        {/* <CounterProps render={(count, incrementCount) => (<ClickCounterTwo count={count} incrementCount={incrementCount} />)} />
      <CounterProps render={(count, incrementCount) => (<HoverCounterTwo count={count} incrementCount={incrementCount} />)} /> */}

        {/* Variation of render props that doesn't use the children prop instead of the render prop. */}

        {/* <CounterProps>
        {(count, incrementCount) => (<ClickCounterTwo count={count} incrementCount={incrementCount} />)}
      </CounterProps>
      <CounterProps>
        {(count, incrementCount) => (<HoverCounterTwo count={count} incrementCount={incrementCount} />)}
      </CounterProps> */}

        {/* Part 20 */}
        {/* With custom value */}
        {/* <UserProvider value="Tudor" >
        <ComponentC />
      </UserProvider> */}

        {/* With default value */}
        {/* <ComponentC /> */}

        {/* Part 21 */}
        {/* <PostList /> */}

        {/* Part 22 */}
        <PostForm />
      </div>

    </Router>
  );

}

export default App;
