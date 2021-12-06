import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Greet from './component/Greet';
import Welcome from './component/Welcome';
import Message from './component/Message';
import Counter from './component/Counter';
import Click from './component/Click';
import ClassClick from './component/ClassClick';
import EventBind from './component/EventBind';
import ParentComponent from './component/ParentComponent';
import UserGreeting from './component/UserGreeting';
import UserGreeting1 from './component/UserGreeting1';
import UserGreeting2 from './component/UserGreeting2';
import UserGreeting3 from './component/UserGreeting3';
import NameList from './NameList';
import NameList1 from './NameList1';
import StyleSheet from './component/StyleSheet';
import Inline from './component/Inline';
import './appStyle.css'
import styles from './appStyle.module.css'
import Form from './component/Form';
import LifeCycleA from './component/LifeCycleA';
import FragmentDemo from './component/FragmentDemo';
import Columns from './component/Columns';
import PureComp from './PureComp';
import ParentComp from './ParentComp';
import RefsDemo from './RefsDemo';
import FocusInput from './FocusInput';
import FRInput from './FRInput';
import FRParentInput from './FRParentInput';
import Hero from './Hero';
import ErrorBoundry from './ErrorBoundry';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';
import ClickCounter2 from './ClickCounter2';
import HoverCouter2 from './component/HoverCounter2';
import User from './component/User';
import Counter2 from './component/Counter2';



class App extends Component {
  render() {
  return (
    <div className="App">
    {/* <h1 className="error">Error</h1>
    <h1 className={styles.success}>Success</h1> */}
      {/* <Greet name= "Sayali" nickname="sau" emailid="saya@gmail.com" />
      <Greet name= "Pritam" nickname="prit" emailid="sprit@gmail.com"/> */}
   

     {/* <Welcome name= "Sayali" nickname="sau" emailid="saya@gmail.com"/>
     <Welcome name= "Pritam" nickname="Prit" emailid="saya@gmail.com"/> */}

     {/* <Message/> */}
     {/* <Counter/> */}
     {/* <Click/> */}
     {/* <ClassClick/> */}
     {/* <EventBind/> */}
     {/* <ParentComponent/> */}
     {/* <UserGreeting/> */}
     {/* <UserGreeting1/> */}
     {/* <UserGreeting2/> */}
     {/* <UserGreeting3/> */}
     {/* <NameList/> */}
     {/* <NameList1/> */}
     {/* <StyleSheet primary={true}/> */}
     {/* <Inline/> */}
     {/* <Form/> */}
     {/* <LifeCycleA/> */}
     {/* <FragmentDemo/> */}
     {/* <Columns/> */}
    {/* <ParentComp/> */}
    {/* <RefsDemo/> */}
    {/* <FocusInput/> */}
     {/* <FRParentInput/> */}
    
     {/* <ErrorBoundry>
    <Hero heroName = "batman"/>
    </ErrorBoundry>
    <ErrorBoundry>
    <Hero heroName = "superman"/>
    </ErrorBoundry>
    <ErrorBoundry>
    <Hero heroName = "jokar"/>
    </ErrorBoundry> */}
    {/* <ClickCounter/>  */}
     {/* <HoverCounter/> */}
     {/* <ClickCounter2/>
     <HoverCouter2/>
     <User render = { (isLoggedIn) => isLoggedIn? "Sayali" : 'Guest'}/> */}
     <Counter2 
     render= {(count, incrementCount) => (
     <ClickCounter2 count={count} incrementCount={incrementCount}/>
     )}
     />
     <Counter2 
     render= {(count, incrementCount) => (
     <HoverCouter2 count={count} incrementCount={incrementCount}/>
     )}
     />

    </div>
  );
}
}
export default App;
