import React from "react";
import Table1 from "../../components/table/Table"

const data = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Doe", email: "jane@example.com" },
  // Add more rows as needed
];
function Table() {
  return (
    <div className="table">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Results</h1>
            
          </div>
          <div class="col-lg-6">
            <Table1 data={data} />
      
          </div>
          

          
        </div>
      </div>
    </div>
  );
}

export default Table;
