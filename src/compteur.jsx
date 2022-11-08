import './compteur.css';
import { Component } from "react";
import { PropTypes } from 'prop-types';

class Compteur extends Component {
    static propTypes = {
        valueStart:PropTypes.number,
        valueEnd:PropTypes.number,
        autoPlay:PropTypes.bool,
        onStop:PropTypes.func
      }
      static defaultProps = {
        valueStart:1,
        valueEnd:10,
        autoPlay: true,
        onStop:()=>{}
      }
      constructor(props){
        super(props);
        this.state={
            value:this.props.valueStart
        }
        this.handleClick = this.handleClick.bind(this);
        this.count = this.count.bind(this);
        this.timer = null;
      }
      count() {
        let {value}=this.state;
        value++;
        this.setState({value: value})
        if(value===this.props.valueEnd) {
            window.clearInterval(this.timer);
            this.timer=null;
            this.props.onStop();
        }
    }
    handleClick() {
        if (this.timer) {
            window.clearInterval(this.timer);
            this.timer=null;
        }else {
            this.timer = window.setInterval(this.count, 1000);
        }
    }
    componentDidMount(){
        if(this.props.autoPlay){
            this.timer = window.setInterval(this.count, 1000);
        }
      }
      componentWillUnmount(){
        if(this.timer){
            window.clearInterval(this.timer);
        }
      }
    render() {
        const {value} = this.state;
        const {valueEnd} = this.props;
        return (
          <section>
              <p className="compteur" onClick={value===valueEnd?null:this.handleClick}>{ this.state.value }</p>
          </section>
        )
      }
}

export default Compteur;