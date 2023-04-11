import React from "react";

function Info(props){
   return(
      props.info && <div>

<div className="alert alert-success alert-dismissible" role="alert">
<button type="button" className="btn-close" data-dismiss="alert">&times;</button>

  <h4 className="alert-heading">Well done!</h4>
  <p>{props.info}</p>
  <hr/>
  <p className="mb-0"> </p>
</div>

      </div>
   )
}
 export default Info;