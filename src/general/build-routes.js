import {Route, Routes} from "react-router-dom";
import routes from "./routes"
import pages from "../markdown/pages.json"
import Home from "../pages/home";

const getRouteArray = (routes) => {
    let routes_array = []
    
    routes.forEach(route => {
        const RouteElement = route.element;
        if (!route.category) {

            if(route.path === `/blog/:blogId?`){

                pages.posts.map((post) => {
                    routes_array.push(
                        <Route key={`route-${route.key}`} path={`/blog/${post.key}`} element={<RouteElement route={route} post={post}  />} />
                    )
                })
            }
            else {
                routes_array.push(
                    <Route key={`route-${route.key}`} path={route.path} element={<RouteElement route={route} />} />
                )    
            }
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
            {/*<Route component={Home} key="route-not-found" />*/}
        </div>
    );
}