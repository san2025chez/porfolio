import { makeStyles } from "@material-ui/core";
import Navbar from "./components/Navbar";
import MyWork from './components/MyWork';
import Contact from './components/Contact';
import About from './components/About'
import Skills from "./components/Skills";

function App() {


  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Navbar></Navbar>
      <About title="About Me" id="about" dark={true} />
      <Skills title="My Skills" id="skill" dark={false}/>
      <MyWork title="My Work" id="work" dark={true}/>
      <Contact title="Contact" id="contact" dark={false}/>
    </div>
  );
}


const useStyles = makeStyles((theme) => ({
  root: {

  }

}))

export default App;
