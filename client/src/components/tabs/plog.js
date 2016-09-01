'use strict';

import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
class Plog extends React.Component {
  render() {
    var products = [{
      id: 1,
      name: "Item name 1",
      price: 100
      },{
          id: 2,
          name: "Item name 2",
          price: 100
      }];
      function priceFormatter(cell, row){
        return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
      }
    return (
      <BootstrapTable data={products} striped={true} hover={true}>
          <TableHeaderColumn dataField="id" isKey={true} dataSort={true}>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField="name" dataSort={true}>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField="price" dataFormat={priceFormatter}>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

Plog.displayName = 'Plog';

// Uncomment properties you need
// AccordionComponent.propTypes = {};

export default Plog;
