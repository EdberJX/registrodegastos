import React, { Component } from "react";
import "./form.css";

import DatePicker from "react-datepicker";
import sweetalert from "sweetalert";
import "react-datepicker/dist/react-datepicker.min.css";

export default class Form extends Component {
  state = {
    date: new Date(),
    gasto: "",
    
  };
  handleSubmit = e => {
    e.preventDefault();
    const { gasto, date } = this.state;

    if (!gasto || gasto < 0 || isNaN(gasto)) {
      sweetalert(
        "Argumento Invalido",
        "El registro de gasto es invalido",
          "error"
      );
      this.setState({ gasto: "" });
    } else {
      this.setState({ gasto: "" });
      this.props.addRegistro(date, gasto);
      sweetalert(
        "Registro guardado",
        "El Gasto se guardó correctamente",
          "success"
      );
      this.props.buttonOnClick();
    }
  };
  onChangeDate = date => {
    this.setState({ date });
  };
  handleInputChange = e => {
    const gasto = e.target.value;
    this.setState({ gasto });
  };
  render() {
    const { gasto, date } = this.state;
    return (
      <div className="row ">
        <div className={`form-container scale-transition scale-out ${this.props.visible ? "scale-in":""} col s4  offset-s4 z-depth-4  hoverable purple darken-4`}>
          <form visible={this.props.modal}>
            
              <label htmlFor="fecha"  className="input-field ">
                Fecha
                <DatePicker selected={date} onChange={this.onChangeDate} />
              </label>
            
          
              <label htmlFor="peso" className="input-field ">
                Gasto 
                <input
                  type="text"
                
                  value={gasto}
                  onChange={this.handleInputChange}
                  name="gasto"
                  id="gasto"
                />
              </label>
          

            <input type="button" value="Aceptar" className="btn purple" onClick={this.handleSubmit} />
            <input type="button" value="Cancelar" className="btn red"
            onClick={this.props.buttonOnClick}
            />
          </form>
        </div>
      </div>
    );
  }
}
// <label > <input id="gasto" type="text" class="validate" />Gasto</label>
//<input onChange={this.handleChange} type="date" name="fecha" id="fecha" />
//<input type="submit" value="Aceptar" onClick={this.handleSubmit} />
/*
<button
              onClick={this.handleSubmit} 
              className="btn waves-effect waves-light purple" 
              type="submit" 
              >
              <i 
                className="material-icons right">send</i>
            </button>    
            <button 
              className="btn waves-effect  red" 
              type="submit" 
              >
              <i 
                className="material-icons right">close</i>
            </button>  */
