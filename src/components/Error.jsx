import { useRouteError } from "react-router-dom";


const Error = ()=>{
    const err = useRouteError();
    return (
        <div>
            <p>This is Contact page</p>
            <p>{err.status}</p>
        </div>
    )
}

export default Error;