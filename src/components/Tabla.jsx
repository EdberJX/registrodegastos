import React from "react";
import moment from "moment";
//moment(registro[0]).format('LLLL')
export default ({ registros }) => {
  const renderBody = (registro)=>{
      return (
          <tr key={registro[0]}>
            <td>{moment(registro[0]).format('LLLL')}</td>
            <td>${registro[1]}</td>
          </tr>
    )
  };
  return (
    <table className="z-depth-2 hoverable s6 m12 l12 ">
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Gastos ($)</th>
        </tr>
      </thead>

      <tbody>
        {registros.map(registro =>(
            renderBody(registro)
        ))}
      </tbody>
    </table>
  );
};
