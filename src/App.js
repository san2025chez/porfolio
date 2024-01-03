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
      <About title="Inicio" id="about"/>
      <Skills title="Sobre Mi" id="skill" dark={"#00BFA5"}/>
      <MyWork title="Trabajos" id="work" dark={false}/>
      <Contact title="Contactos" id="contact" dark={true} />
    </div>
  );
}


const useStyles = makeStyles((theme) => ({
  root: {

  }

}))

export default App;
