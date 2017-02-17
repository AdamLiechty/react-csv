import React from 'react';
import {CSVLink, CSVDownload} from 'react-csv';

const csvData =[
  ['firstname', 'lastname', 'email'] ,
  ['Ahmed', 'Tomi' , 'ah@smthing.co.com'] ,
  ['Raed', 'Labes' , 'rl@smthing.co.com'] ,
  ['Yezzi','Min l3b', 'ymin@cocococo.com']
];

class App extends React.Component {

  render() {
    return (
      <div style={{padding: 10}}>
        <h1>react-csv</h1>
        <hr />
        <div>

          Download CSV <CSVLink data={csvData}> here </CSVLink>.
        </div>
        <hr />

        <div>

          Download CSV  with <code>;</code> as separator : <CSVLink data={csvData} separator=";"> here </CSVLink>.
        </div>
      </div>
    );
  }
}

export default App;
