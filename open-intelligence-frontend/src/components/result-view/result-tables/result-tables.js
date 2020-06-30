import React from 'react'
import "./result-tables.scss";
import { Table } from 'antd';

class ResultTables extends React.Component {

    getTables() {
        // console.log("tables:")
        // console.log(this.props.tables)
        // console.log(this.props.tables[0])
        // this.tableViews = []
        // console.log("length of tables:")
        // console.log(this.props.tables.length)
        this.tableComponents = []
        for (let i=0; i < this.props.tables.length; i++) {
            // console.log("type of this.props.tables:")
            // console.log(typeof(this.props.tables))
            // console.log(this.props.tables.columns)
            this.table_data = JSON.parse(this.props.tables[i])
            this.columns = this.table_data.columns
            console.log("columns:")
            console.log(this.columns)
            this.dataSource = []
            this.table_rows_data = this.table_data.data
            for (let rowIndex=0; rowIndex < this.table_rows_data.length; rowIndex++) {
                this.row = this.table_rows_data[rowIndex]
                this.row_object = {}
                this.row_object["key"] = rowIndex
                for (let columnIndex=0; columnIndex < this.row.length; columnIndex++) {
                    this.columnName = this.columns[columnIndex]
                    if (!this.columnName || 0 === this.columnName.length) {
                        console.log("empty column!")
                        this.columnName = "Column " + (columnIndex + 1)
                    }
                    this.row_object[this.columnName] = this.row[columnIndex]
                }
                this.dataSource.push(this.row_object)
            }
            this.columnsData = []
            for (let columnIndex=0; columnIndex < this.columns.length; columnIndex++) {
                this.columnName = this.columns[columnIndex]
                if (!this.columnName || 0 === this.columnName.length) {
                    console.log("empty column!")
                    this.columnName = "Column " + (columnIndex + 1)
                }
                this.column_object = {
                    "title": this.columnName,
                    "dataIndex": this.columnName,
                    "key": this.columnName
                }
                this.columnsData.push(this.column_object)
            }
            this.tableComponents.push(
                <div className="table">
                    <h3>Table {i + 1}</h3>
                    <Table pagination={false}  columns={this.columnsData} dataSource={this.dataSource}></Table>
                </div>
            )
        }
        return this.tableComponents
    }

    render() {
        return (
            <div className="resultTables">
                <h1>3. Tables</h1>
                {this.getTables()}
            </div>
        )
    }
}

export default ResultTables;