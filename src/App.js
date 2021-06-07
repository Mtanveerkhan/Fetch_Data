import React, { Component } from 'react'
// import { Button } from '@material-ui/core';
import Table from 'react-bootstrap/Table'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fetched_data: []
    }
  };

  componentDidMount() {
    const url = 'http://142.93.6.122:8000/integration'
    const param = {
      method: 'GET', headers: {
        'Content-Type': 'application/json',
        'Authorization': 'token 8926bed745d458b22bc6a140b0362a8fc2aeae7b'
      },
    }
    fetch(url, param)
      .then(response => response.json())
      .then(data =>

        // console.log(data.results),
        this.setState({ fetched_data: data.results })
      );
  }

  render() {
    console.log("Aya k nhe aya = " + this.state.fetched_data)
    return (
      
      <div className={'main_container'}>
          <p>Fetch Data From Rest Api</p>
        <div className={'sec_container'}>
          <table className={'table_container'} >
            
              <tr className={'table_row'}>
                <th className={'table_column_head'}>ID</th>
                <th className={'table_column_head'}>NAME</th>
                <th className={'table_column_head'}>START AT</th>
                <th className={'table_column_head'}>END AT</th>
                <th className={'table_column_head'}>CREATED AT</th>
                <th className={'table_column_head'}>UPDATED AT</th>
                <th className={'table_column_head'}>STATUS</th>
                <th className={'table_column_head'}>NEXT EXECUTED AT</th>
                <th className={'table_column_head'}>LAST EXECUTED AT</th>
                <th className={'table_column_head'}>FREQUENCY</th>
                <th className={'table_column_head'}>BATCH PROCEESSED</th>
                <th className={'table_column_head'}>PIPELINE PROCEESSED</th>
                <th className={'table_column_head'}>RECORD PROCESSED</th>
                <th className={'table_column_head'}>SOURCE ID</th>
                <th className={'table_column_head'}>TARGET ID</th>
              </tr>
        
              {this.state.fetched_data.length > 0 && this.state.fetched_data.map((value, index) => {
                
                return (
                  
                  <tr className={'table_row'}>
                    <td className={'table_column'}>{value.id}</td>
                    <td className={'table_column'}>{value.name}</td>
                    <td className={'table_column'}>{value.startAt}</td>
                    <td className={'table_column'}>{value.endAt}</td>
                    <td className={'table_column'}>{value.created_at}</td>
                    <td className={'table_column'}>{value.updated_at}</td>
                    <td className={'table_column'}>{value.status}</td>
                    <td className={'table_column'}>{value.nextExecuteAt}</td>
                    <td className={'table_column'}>{value.lastExecuteAt}</td>
                    <td className={'table_column'}>{value.frequency}</td>
                    <td className={'table_column'}>{value.batchprocessed}</td>
                    <td className={'table_column'}>{value.pipelineprocessed}</td>
                    <td className={'table_column'}>{value.recordprocessed}</td>
                    <td className={'table_column'}>{value.sourceId}</td>
                    <td className={'table_column'}>{value.targetId}</td>
                    {/* <td >{value.id}</td>
                    <td >{value.name}</td>
                    <td >{value.startAt}</td>
                    <td  >{value.endAt}</td>
                    <td >{value.created_at}</td>
                    <td >{value.updated_at}</td>
                    <td >{value.status}</td>
                    <td >{value.nextExecuteAt}</td>
                    <td >{value.lastExecuteAt}</td>
                    <td >{value.frequency}</td>
                    <td >{value.batchprocessed}</td>
                    <td >{value.pipelineprocessed}</td>
                    <td >{value.recordprocessed}</td>
                    <td >{value.sourceId}</td>
                    <td >{value.targetId}</td> */}

                  </tr>
            
                )
              })}

          </table>


          {/* <div className={'list'} key={index}>
            <span>{value.id}
              - {value.created_by.ID} 
            </span> 
          </div> */}
        </div>
        </div>
      
    )
  }
}
