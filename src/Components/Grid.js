import React, { useState } from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class Grid extends React.Component {
    constructor(props) {
        super(props)
        
    }
    render() {
        return (
            <div>im a class now...</div>
        )
    }
    getColumnData(path) {
        return 0
    }
}

export default Grid