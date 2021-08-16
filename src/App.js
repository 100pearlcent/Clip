import {Route} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import './App.css';
import GlobalStyle from "./globalStyles/GlobalStyle";
import {ToDoProvider} from './ToDoContext';
import {IconProvider} from './IconContext';

import IntroPage from "./pages/IntroPage";
import DashboardHome from "./pages/DashboardHome";
import DashboardMemo from "./pages/DashboardMemo";
import DashboardTodo from "./pages/DashboardTodo";

const App = () => {

    return (
        <ThemeProvider>
            <IconProvider>
                <ToDoProvider>
                    <GlobalStyle/>
                    <Route path="/" component={IntroPage} exact={true}/>
                    <Route path="/board" component={DashboardHome} exact={true}/>
                    <Route path="/todo" component={DashboardTodo} exact={true}/>
                    <Route path="/memo" component={DashboardMemo} exact={true}/>
                </ToDoProvider>
            </IconProvider>
        </ThemeProvider>
    );
};

export default App;
