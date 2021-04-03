import React from 'react'

function AdminBase() {
    return (
        <>
  
  <br /><br /><br /><br />
  <div className="container">
    <div className="row">
      <div className="panel panel-primary col-md-5" style={{marginLeft: '2%'}}>
        <div className="panel-heading" style={{textAlign: 'center'}}>
          <h6 className="panel-title">Mined Noded</h6>
        </div>
        
        <table className="table table-hover" id="dev-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Mobile</th>
              <th>Status</th>
            </tr>
          </thead><tbody><tr>
              <td> {'{'}{'{'}d.get_name{'}'}{'}'}</td>
              <td>{'{'}{'{'}d.department{'}'}{'}'}</td>
              <td>{'{'}{'{'}d.mobile{'}'}{'}'}</td><td> <span className="label label-primary">Chains</span></td><td> <span className="label label-success">On Hold</span></td></tr></tbody></table>
      </div>
      <div className="panel panel-primary col-md-5" style={{marginLeft: '5%'}}>
        <div className="panel-heading" style={{textAlign: 'center'}}>
          <h6 className="panel-title">Recent Patient</h6>
        </div>
        
        <table className="table table-hover" id="dev-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Symptoms</th>
              <th>Mobile</th>
              <th>Address</th>
              <th>Status</th>
            </tr>
          </thead><tbody><tr>
              <td> {'{'}{'{'}p.get_name{'}'}{'}'}</td>
              <td>{'{'}{'{'}p.symptoms{'}'}{'}'}</td>
              <td>{'{'}{'{'}p.mobile{'}'}{'}'}</td>
              <td>{'{'}{'{'}p.address{'}'}{'}'}</td><td> <span className="label label-primary"></span></td><td> <span className="label label-success">On Hold</span></td></tr></tbody></table>
      </div>
    </div>
  </div>
  {
}
 
</>

    )
}

export default AdminBase
