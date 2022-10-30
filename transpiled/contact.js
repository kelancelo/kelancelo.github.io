function Contact() {
    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            "h1",
            { className: "mb-4 fs-3 fw-bold" },
            "Contact me"
        ),
        React.createElement(
            "div",
            { className: "row gy-3" },
            React.createElement(
                "div",
                { className: "col-12 d-flex align-items-center" },
                React.createElement(
                    "div",
                    { className: "bg-white rounded p-1 me-2", style: { width: "2.5rem" } },
                    React.createElement("img", { src: "/static/images/gmail.svg", style: {
                            width: "100%"
                        } })
                ),
                React.createElement(
                    "a",
                    { href: "mailto:delosreyesmiguelangelo@gmail.com" },
                    "delosreyesmiguelangelo@gmail.com"
                )
            ),
            React.createElement(
                "div",
                { className: "col-12 d-flex align-items-center" },
                React.createElement(
                    "div",
                    { className: "bg-white rounded p-1 me-2", style: { width: "2.5rem" } },
                    React.createElement("img", { src: "/static/images/skills/github.svg", style: {
                            width: "100%"
                        } })
                ),
                React.createElement(
                    "a",
                    { href: "https://github.com/kelancelo/", target: "_blank" },
                    "https://github.com/kelancelo/"
                )
            ),
            React.createElement(
                "div",
                { className: "col-12 d-flex align-items-center" },
                React.createElement(
                    "div",
                    { className: "bg-white rounded p-1 me-2", style: { width: "2.5rem" } },
                    React.createElement("img", { src: "/static/images/linkedin.svg", style: {
                            width: "100%"
                        } })
                ),
                React.createElement(
                    "a",
                    { href: "https://www.linkedin.com/in/kelancelo/", target: "_blank" },
                    "https://www.linkedin.com/in/kelancelo/"
                )
            )
        )
    );
}

export default Contact;