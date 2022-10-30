import Home from "./home.js";
import Skills from "./skills.js";
import Projects from "./projects.js";
import Contact from "./contact.js";


function App() {
    const [state, setState] = React.useState({
        page: null
    });

    React.useEffect(() => {
        changePage();
    }, []);

    window.onhashchange = () => {
        changePage();
    }

    function changePage() {
        const path = window.location.hash;
        if (path !== "")
            document.title = path.slice(1)[0].toUpperCase() + path.slice(2);

        if (path === "#skills")
            setState({ page: <Skills /> });
        else if (path === "#projects")
            setState({ page: <Projects /> });
        else if (path === "#contact")
            setState({ page: <Contact /> });
        else
            setState({ page: <Home /> });
    }


    return (
        <React.Fragment>
            <header className="mb-4">
                <img src="/static/images/resume-pic.jpg" className="mb-3" width="120" alt="" />
                <h1 className="mb-4 fs-2 fw-bold text-center text-light">Miguel Angelo Delos Reyes</h1>
                <nav className="nav justify-content-center">
                    <a className="nav-link" onClick={(e) => {
                        e.preventDefault();
                        history.pushState(null, "", "/")
                        setState({page: <Home />});
                    }}>
                        Home
                    </a>
                    <a className="nav-link" href="#skills">Skills</a>
                    <a className="nav-link" href="#projects">Projects</a>
                    <a className="nav-link" href="#contact">Contact</a>
                </nav>
            </header>

            {state.page}
        </React.Fragment>
    )
}


const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);