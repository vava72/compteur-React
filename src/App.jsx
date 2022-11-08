import './App.css';
import { Component } from "react";
import Compteur from './compteur';
import logo from './assets/images/logo-iut.png';
import { PropTypes } from 'prop-types';
import  sonnerie from "./assets/sons/sonnerie.mp3";


class App extends Component {
  static propTypes = {
    titre:PropTypes.string,
    onClick:PropTypes.func
  }
  static defaultProps = {
    titre:"Le titre h1",
    onClick:()=>{}
  }
  constructor(props){
    super(props);
    this.state={
      compteursVisible:false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    this.setState({compteursVisible:true})
    this.props.onClick();
  }
  componentDidMount(){
    console.log("APP est monté");
  }
  componentWillUnmount(){
    console.log("App est supprimé");
  }
  playSound() {
    new Audio(sonnerie).play();
  }
  render() {
    if(!this.state.compteursVisible){
      return (
        <button onClick={this.handleClick}>Voir les compteurs</button>
      )
    }else{
    const {titre} = this.props;
    return (
      <section className="app-compteurs">
        <img alt="coucou" src={logo} width={200}/>
        <h1>{titre}</h1>
        <article>
          <h2>Compteur avec des valeurs par défaut</h2>
          <Compteur />
        </article>
        <article>
          <h2>Compteur allant de 5 à 10</h2>
          <Compteur valueStart={5} valueEnd={10} onStop={this.playSound}/>
        </article>
        <article>
          <h2>Compteur sans autoplay  allant de 1 à 20</h2>
          <Compteur valueStart={1} valueEnd={20} autoPlay={false}/>
        </article>
      </section>
    )
  }
}
}

export default App;
