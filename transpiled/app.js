var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import Home from "./home.js";
import Skills from "./skills.js";
import Projects from "./projects.js";
import Contact from "./contact.js";

function App() {
    var _React$useState = React.useState({
        page: null
    }),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        state = _React$useState2[0],
        setState = _React$useState2[1];

    React.useEffect(function () {
        changePage();
    }, []);

    window.onhashchange = function () {
        changePage();
    };

    function changePage() {
        var path = window.location.hash;
        if (path !== "") document.title = path.slice(1)[0].toUpperCase() + path.slice(2);

        if (path === "#skills") setState({ page: React.createElement(Skills, null) });else if (path === "#projects") setState({ page: React.createElement(Projects, null) });else if (path === "#contact") setState({ page: React.createElement(Contact, null) });else setState({ page: React.createElement(Home, null) });
    }

    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            "header",
            { className: "mb-4" },
            React.createElement("img", { src: "/static/images/resume-pic.jpg", className: "mb-3", width: "120", alt: "" }),
            React.createElement(
                "h1",
                { className: "mb-3 fs-2 fw-bold text-center text-light" },
                "Miguel Angelo Delos Reyes"
            ),
            React.createElement(
                "nav",
                { className: "nav justify-content-center" },
                React.createElement(
                    "a",
                    { className: "nav-link", onClick: function onClick(e) {
                            e.preventDefault();
                            history.pushState(null, "", "/");
                            setState({ page: React.createElement(Home, null) });
                        } },
                    "Home"
                ),
                React.createElement(
                    "a",
                    { className: "nav-link", href: "#skills" },
                    "Skills"
                ),
                React.createElement(
                    "a",
                    { className: "nav-link", href: "#projects" },
                    "Projects"
                ),
                React.createElement(
                    "a",
                    { className: "nav-link", href: "#contact" },
                    "Contact"
                )
            )
        ),
        state.page
    );
}

var root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(React.createElement(App, null));