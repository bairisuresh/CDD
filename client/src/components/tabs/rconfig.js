'use strict';

import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
class Rconfig extends React.Component {
  render() {
    // const cellcolor = {backgroundColor: #008000}
    var products = [{
      id: 1111,
      name: "Item name 1",
      price: 200
      },{
          id: 2222,
          name: "Item name 2",
          price: 2222100
      }];
      function priceFormatter(cell, row){
        return '<div style="{{backgroundColor: #008000}}">true</div> ';
      }
      function onRowSelect(row, isSelected){
        console.log(row);
        console.log("selected: " + isSelected)
      }

      var selectRowProp = {
        mode: "radio",
        clickToSelect: true,
        hideSelectColumn: true,
        bgColor: "rgb(238, 193, 213)",
        onSelect: onRowSelect
      };
    return (
      <BootstrapTable data={products} striped={true} hover={true} selectRow={selectRowProp}>
          <TableHeaderColumn dataField="id" isKey={true} dataSort={true}>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField="name" dataSort={true}>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField="price" dataFormat={priceFormatter}>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

Rconfig.displayName = 'Rconfig';

// Uncomment properties you need
// AccordionComponent.propTypes = {};

export default Rconfig;
