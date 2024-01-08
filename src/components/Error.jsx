import { useRouteError } from "react-router-dom";

const Error=()=>{

const err = useRouteError();
console.log(err);

    return(
    <>
    <div>OOppsssssssssss! Error</div>
    <h1>This is a customized error message!!</h1>
    {err.status} : {err.statusText}
    </>
    )
};

export default Error;