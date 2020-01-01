import React from 'react'
import {Link, Route, Switch} from "react-router-dom";

const Home = () => <div>
    <Link to={'/info_project'}>
        о проекте
    </Link>
    <div>boxai находится в стадии разработки</div>
</div>

const Info = () => <div>
    <Link to={'/'}>
        на главную
    </Link>
    <div>О проекте</div>
</div>

const App = () => <>
    <Switch>
        <Route path={'/'} component={Home} exact/>
        <Route path={'/info_project'} component={Info}/>
    </Switch>
</>

export default App
