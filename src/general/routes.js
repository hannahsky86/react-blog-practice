import Home from "../pages/home";
import Blog from "../pages/blog";
import ContactMe from "../pages/contact-me";
import BlogDetails from "../pages/blog-details";

export default [
    {
        path: "/",
        name: "Home",
        key:"home",
        exact: true,
        element: Home
    },
    // {
    //     path: "/topics",
    //     name: "Topics",
    //     key:"topics",
    //     category: true,
    //     routes: [
    //         {
    //             path: "/topics/engineering",
    //             name: "Engineering",
    //             key: "engineering",
    //             category: true,
    //             routes: [
    //                 {
    //                     path: "/topics/engineering/thermodynamics",
    //                     name: "Thermodynamics",
    //                     key: "thermodynamics",
    //                     component: Thermodynamics
    //                 },
    //                 // {
    //                 //     path: "/topics/engineering/calc1",
    //                 //     name: "Calculus I",
    //                 //     key: "calc1"
    //                 // },
    //                 // {
    //                 //     path: "/topics/engineering/calc2",
    //                 //     name: "Calculus II",
    //                 //     key: "calc2"
    //                 // },
    //                 // {
    //                 //     path: "/topics/engineering/calc3",
    //                 //     name: "Calculus III",
    //                 //     key: "calc3"
    //                 // }
    //             ]
    //         },
    //         {
    //             path: "/topics/data",
    //             name: "Data",
    //             key: "data",
    //             category: true,
    //             routes: [
    //                 {
    //                     path: "/topics/data/data_visualizations",
    //                     name: "Data Visualizations",
    //                     key: "data-viz",
    //                     component: DataVisualizations
    //                 },
    //                 // {
    //                 //     path: "/topics/data/sql",
    //                 //     name: "SQL",
    //                 //     key: "sql",
    //                 // },
    //             ]
    //         },
    //         {
    //             path: "/topics/computer-science",
    //             name: "Software Engineering",
    //             key: "computer-engineering",
    //             component: SoftwareEngineering,
    //             // routes: [
    //             //     {
    //             //         path: "/topics/computer-science/oop",
    //             //         name: "Object Oriented Programming",
    //             //         key: "oop",
    //             //     },
    //             //     {
    //             //         path: "/topics/computer-science/design-patterns",
    //             //         name: "Design Patterns",
    //             //         key: "design-patterns",
    //             //     }]
    //         }]
    // },
    {
        path: "/blog",
        name: "Blog",
        key:"blog",
        element: Blog,
        routes: 
        [
            {
                path: "/blog/:blogId?",
                name: "Blog",
                key:"blog-pages",
                element: BlogDetails,
            }
        ]
    },
    {
        path: "/contact-me",
        name: "Contact Me",
        key:"contact-me",
        element: ContactMe
    }
];


