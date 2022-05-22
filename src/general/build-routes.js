import {Route, Routes} from "react-router-dom";
import routes from "./routes"
import pages from "../markdown/pages.json"

const getRouteArray = (routes) => {
    let routes_array = []
    
    // let new_routes = []
    //
    // pages.posts.map((post) => {
    //     new_routes.push(`/blog/${post.key}`)
    // })
    //
    // console.log("TEST 1", new_routes);
    // console.log("TEST 2", routes);
    //
    // routes = routes.concat(new_routes);
    //
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
        
        console.log("routes_array", routes_array)
        
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