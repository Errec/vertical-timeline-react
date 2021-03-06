import React, { Component } from 'react';
import moment from 'moment'
import "../styles/components/ResultCard.sass";

class ResultCard extends Component {

  createHeader = () => {
    const storeName = this.props.groupData[0].store;
    for (var fieldIndex = 0; fieldIndex < this.props.groupData.length; fieldIndex++) {
      const data = this.props.groupData[fieldIndex];
      if (data.event && data.event === "comprou") {
        return <ul className="result-card__list">
            <li className="result-card__time">
              <p>{moment(data.timestamp).format("DD/MM/YYYY HH:MM")}</p>
            </li>
            <li className="result-card__value">
              <p>R$ {data.revenue}</p>
            </li>
            <li className="result-card__store">
              <p> {storeName} </p>
            </li>
          </ul>;
      }
    }
  }

  createBody = () => {
    let resultBody = [];
    for (var fieldIndex = 0; fieldIndex < this.props.groupData.length; fieldIndex++) {
      const data = this.props.groupData[fieldIndex];
      if (data.event && data.event === "comprou-produto") {
        resultBody.push(<tr key={fieldIndex}>
            <td>
              <span>
                {
                  data.custom_data.map(custom => {
                    if (custom.key === 'product_name'){
                      return custom.value
                    }
                  })
                }
              </span>
            </td>
            <td>
              <span> R$ {' '}
                {
                  data.custom_data.map(custom => {
                    if (custom.key === 'product_price') {
                      return custom.value;
                    }
                  })
                }
              </span>
            </td>
          </tr>);
      }
    }
    return resultBody
  }

  render() {
    return(
      <div className="result-card">
        <div className="result-card__header">
          {this.createHeader()}
        </div>
        <div className="result-card__table-wrapper">
          <table className="result-card__table">
            <thead className="result-card__table-head">
              <tr>
                <th>Produto</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody className="result-card__table-body">
              {this.createBody()}
            </tbody>
          </table>
        </div>
      </div>)
  }
}

export default ResultCard