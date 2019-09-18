import React, { Component } from 'react';
import highcharts from 'highcharts';



export default class Grafico extends Component {
    
    componentDidMount(){
       
        this.renderGrafica(this.props.registros);
    }
    UNSAFE_componentWillReceiveProps(nextProps){
      
        this.renderGrafica(nextProps);
    }
    renderGrafica = ({registros}) => {
       
        highcharts.chart('grafico',{
            title: {
                text: "Mi registros de gastos"
            },
            xAxis:{
                type:"datetime"
            },
            series: [
                {
                    name:"test",
                    data: registros   
                }
            ]
        })
    }
    render(){
        return(
            <div id="grafico"/>
                
        )
    }
}