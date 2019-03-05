import React from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import jsonData from '../data/mock-data-1.json';
// import jsonData from '../data/dependency-compare-output-20190304_155240.json';
// import { ComponentResolver } from 'ag-grid-community';
const myData = JSON.parse(jsonData);
class Grid extends React.Component {
    constructor(props) {
        super(props)

        console.log(JSON.stringify(myData));
        this.ColumnNames = this.getColumnNames(myData)
        this.RowNames = this.getRowNames(myData)
        this.RowData = this.formatRowData(this.RowNames)
        this.state = {
            ColumnDefs: [
                {
                    headerName: "packageName", field: "name"
                }
            ],
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
        json.each(libBlock => {
            columnNames.push(Object.keys(Object.keys));
        })

        return [...new Set(columnNames)];
    }

    getRowNames(json) {
        return Object.keys(json);
    }

    formatRowData(rowNames) {
        let RowObj = []
        rowNames.forEach(name => {
            RowObj.push({
                name: name
            })
        })
        console.log(RowObj)
        return RowObj
    }
}

export default Grid