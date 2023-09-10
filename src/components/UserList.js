function UserList(params)
{
    return(
        <div >
      {/* <ul>
      {userdata !== undefined ?  userdata.map((data) => <li>{data.name}</li>) : "" }
      </ul> */}
      {params.userdata !== undefined ? 
      <div className="container">
                <div className="row">
                    <div className="col">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Institution</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Lunch</th>
                                </tr>
                              </thead>
                              <tbody>
                                {params.userdata.map(da => 
                                <tr>
                                  <th >
                                  {da._id}
                                  </th>
                                  <td>
                                  {da.name}
                                  </td>
                                  <td>
                                  {da.institution}
                                  </td>
                                  <td>
                                  {da.email}
                                  </td>
                                  <td>
                                  {da.phone}
                                  </td>
                                  <td id-ref={da._id}>
                                  {da.verify ? <span class="badge bg-success">verifed</span>:<span class="badge bg-danger">not verifed</span>}
                                  </td>
                                  <td id-ref={da._id}>
                                  {da.lunch ? <span class="badge bg-success">taken</span>:<span class="badge bg-danger">not taken</span>}
                                  </td>
                                </tr>
                                  
                                  )}
                                </tbody>
                                
                            
                        </table>
                    </div>
                </div>
            </div>: " "}
    </div>
    )
}
export default UserList;