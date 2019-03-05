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

        // console.log("jsonData is type: ", typeof jsonData, jsonData);
        this.ColumnNames = this.getColumnNames(jsonData);
        this.RowNames = this.getRowNames(jsonData);
        this.RowData =  this.formatRowData(jsonData);
        this.ColDefs = this.getColumnDefs(this.ColumnNames);

        // console.log("column names are: ", this.ColumnNames);
        // console.log("row names are: ", this.RowNames);
        // console.log("columnDefs are: ", this.ColDefs);
        // console.log("rowData is: ", this.RowData);

        this.state = {
            columnDefs: this.ColDefs,
            rowData: this.RowData
        }
    }

    render() {
        return (
            <div 
                className="ag-theme-balham"
                style={{ height: '500px', width: '100%' }}>
                <AgGridReact
                    columnDefs={this.state.columnDefs}
                    rowData={this.state.rowData}>
                </AgGridReact>
             </div>
        )
    }

    getColumnNames(json) {
        let columnNames = [];
        Object.values(json).forEach(libData => {
            columnNames.push(...Object.keys(libData));
        });

        return [...new Set(columnNames)];
    }

    getRowNames(json) {
        let result = Object.keys(json);
        return result;
    }

    getColumnDefs(colNames){
        let columnDefs = colNames.map(col => {
            return { 'headerName': col, 'field': col };
        });
        return [
            { headerName: 'Library Name', field: 'name'},
            ...columnDefs
        ];
    }

    formatRowData(json) {
        let rowData = [];
        Object.keys(json).forEach(k => {
            rowData.push({
                name: k,
                ...json[k]
            });
        })
        return rowData;
    }
}

export default Grid