import React from 'react';
import NavBar from './components/NavBar';
import Grafico from './components/Grafico';
import Tabla from './components/Tabla';
//import moment from 'moment';
import Button from './components/button';
import Form from './components/Form'
import swal from "sweetalert";

import './App.css';

class App extends React.Component {
  componentDidMount(){
    const registros = JSON.parse(localStorage.getItem('registros'));
    if(registros){
      this.setState({registros})
    }
    
  }
  state = {
   
    registros: [],
    modal: false
    // registros: [0,1,2,3,4,5,6,7].map(dia =>
   //[+moment().add(dia,'days'), Math.random()*200])
  
  }
   buttonOnClick = () =>{
     this.setState({modal:!this.state.modal})
    
   }
  addRegistro =  (date,gasto) =>{
    //los signos + formatean los datos
   const newRegistro =    [ +date,+gasto]
   const registrosState = [...this.state.registros, newRegistro];
   localStorage.setItem('registros',JSON.stringify(registrosState))
   this.setState({
     registros: registrosState
   })
   //const newRegistro = await   [ Date.parse(date),parseFloat(gasto)]
     //const newRegistro2 = await [+moment(), Math.random()*200]
    /*this.setState((prevState, props)=>({
      registros: [...prevState.registros,newRegistro]
    }))
    const {registros} = this.state
   this.setState({
      registros: [...this.state.registros,newRegistro]
    })*/
    
  }
  limpiarStorage = ()=>{
    if(this.state.registros.length>0){
   
    swal({
      title: "Estas seguro de eliminar los datos?",
      text: "Una vez eliminados, no podrás recuperar los registros",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Registros eliminados", {
          icon: "success",
        });
        localStorage.removeItem('registros')
        this.setState({registros:[]})
      } 
    });
  }}
  render(){
    const { registros, modal } = this.state;
    
    return (
      <div className="App">
         <NavBar/>
         <Form addRegistro={this.addRegistro} visible={modal} buttonOnClick={this.buttonOnClick}/>
         <div className="valign-wrapper"><h1> {registros.length} Registros</h1></div>
         <div className="row ">
           <div className="col s12 m12 l6 ">
           <Grafico registros={registros}/>
           <button className="btn red"  onClick={this.limpiarStorage}>Limpiar Datos</button>
           </div>
           <div className="col s12 m12 l6">
              <Tabla registros={registros}/>
           </div>  
         </div>
         <Button buttonOnClick={this.buttonOnClick}/>
      </div>
    );
  }
    
  //  <Grafico registros={registros}/>
  
}

export default App;
