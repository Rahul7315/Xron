import React from "react";

function alert(props){

    return(
        
    props.alert && <div className="alert alert-success alert-dismissible">
  <button type="button" className="btn-close" data-dismiss="alert">&times;</button>
 <strong>{props.alert.type}</strong>{props.alert.msg}:
</div>
    )
}


export default alert;

