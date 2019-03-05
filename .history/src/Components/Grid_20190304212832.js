import React from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import jsonData from '../data/mock-data-1.json';
// import jsonData from '../data/dependency-compare-output-20190304_155240.json';
// import { ComponentResolver } from 'ag-grid-community';
// const myData = JSON.parse(jsonData);
class Grid extends React.Component {
    constructor(props) {
        super(props)

        console.log("jsonData is type: ", typeof jsonData, jsonData);
        this.ColumnNames = this.getColumnNames(jsonData);
        this.RowNames = this.getRowNames(jsonData);
        this.RowData =  this.formatRowData(jsonData);
        
        console.log("column names are: ", this.ColumnNames);
        console.log("row names are: ", this.RowNames);
        console.log("rowData is: ", this.RowData);

        this.state = {
            ColumnDefs: this.ColumnNames.map(col => {
                return { 'headerName': col, 'field': col }
            }),
            rowData: this.rowData
        }
        
    }
    render() {
        return (
            <div 
            className="ag-theme-balham"
            style={{ 
            height: '500px', 
            width: '600px' }} 
            >
                <AgGridReact
                columnDefs={this.state.columnDefs}
                rowData={this.state.rowData}>
                </AgGridReact>
             </div>
        )
    }

    getColumnNames(json) {
        let columnNames = []
        Object.values(json).forEach(libData => {
            columnNames.concat(Object.keys(libData));
        })

        return [...new Set(columnNames)];
    }

    getRowNames(json) {
        let result = Object.keys(json);
        console.log("row names are: ", result);
        return result;
    }

    formatRowData(json) {
        let rowData = [];
        Object.keys(json).forEach(k => {
            rowData.push({
                name: k,
                data: json[k]
            });
        })
        console.log(rowData);
        return rowData;
    }
}

export default Grid