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
        this.ColumnNames = this.getColumnNames(jsonData)
        this.RowNames = this.getRowNames(jsonData)
        this.RowData = this.formatRowData(this.RowNames)
        this.state = {
            ColumnDefs: this.ColumnNames.forEach(col => { headerName: col, field: col }),
            rowData: this.rowData
        }
        console.log(this.ColumnNames)
        console.log(this.RowNames)
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
            columnNames.push(Object.keys(libData));
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
        console.log("row names in formatRowData: ", rowNames);
        Object.keys(json).forEach(k => {
            rowData.push({
                name: key,
                data: json[key]
            });
        })
        console.log(RowObj)
        return RowObj
    }
}

export default Grid