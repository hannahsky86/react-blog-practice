import {Route, Routes} from "react-router-dom";
import routes from "./routes"



const getRouteArray = (routes) => {
    let routes_array = []
    
    routes.forEach(route => {
        const RouteElement = route.element;
        
        if (!route.category) {
            routes_array.push(
                <Route key={`test-${route.key}`}  path={route.path} element={<RouteElement/>} />
            )
        }
        if (route.routes) {
            routes_array = routes_array.concat(getRouteArray(route.routes));
        }
    })
    
    return routes_array;
}

export function BuildRoutes() {

    return(
        <div className="routes">
            <Routes> {getRouteArray(routes)} </Routes>            
        </div>
    );
}