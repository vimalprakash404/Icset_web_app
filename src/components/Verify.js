import { useRef,useState } from "react";

function Verify(params)
{
    const center_data = {
        margin: 'auto',
        width: '50%',
        padding: '10px',
        'flex-direction': 'column', /* To center vertically */
        'align-items': 'center'
        };
    const inputData = useRef(null)
    const [visibility_data,set_visibility_data] = useState(false)
    const hidden = {
        "visibility": visibility_data ? 'visible' : 'hidden' ,
      };
return(
    <div className="container h2" style={center_data}>
    <input ref={params.refdata} className="form-control form-control-lg" type="text" placeholder="User ID" aria-label=".form-control-lg example"/>
    <button onClick={params.search} type="button" className="btn btn-primary">Search</button>
  {
    params.data !== undefined ?
     <>
     <div className="card card-body" >
        
        <div className="row">
            <div className="col ">
                Name :
            </div>
            <div className="col">
                {params.data.name}
            </div>

        </div>
        <div className="row">
            <div className="col">
                Email :
            </div>
            <div className="col">
                {params.data.email}
            </div>
        </div>
        <div className="row">
            <div className="col">
                Phone :
            </div>
            <div className="col">
                {params.data.phone}
            </div>
        </div>
        <div className="row">
            <div className="col">
                Institution :
            </div>
            <div className="col-6">
                {params.data.institution}
            </div>
        </div>
        <div className="row">
            {params.data.verify ? 
            <h2><span class="badge bg-success">User Verified</span></h2>
            : 
            <button className="btn btn-success btn-lg" onClick={params.verifyfunction}>
            verify
            </button>
            }
            
        </div>
    </div>
     </>: ""
  }
    
</div>
);

}
export default Verify;