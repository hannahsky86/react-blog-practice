import {Routes, BrowserRouter, Switch, Route} from 'react-react-dom'

export default () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Home/>
                    <Blog/>
                    <Topics/>
                    <Youtube/>
                    <Portfolio/>
                    <ContactMe/>
                    
                </Route>
            </Routes>
        </BrowserRouter>
    )
}