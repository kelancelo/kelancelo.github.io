function Projects() {
    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            "h1",
            { className: "my-4 fs-3 fw-bold" },
            "Projects"
        ),
        React.createElement(
            "div",
            { className: "row g-4 text-dark" },
            React.createElement(Project, {
                img: "/static/images/projects/network.png",
                title: "Project: Network",
                desc: "A Twitter-like social network website.",
                techs: [{ img: '/static/images/skills/bootstrap.svg', name: 'Bootstrap' }, { img: '/static/images/skills/django.svg', name: 'Django' }, { img: '/static/images/skills/postgresql.svg', name: 'PostgreSQL' }, { img: '/static/images/skills/react.svg', name: 'React' }],
                liveLink: "https://network-production-cb5a.up.railway.app/",
                codeLink: "https://github.com/kelancelo/network"
            }),
            React.createElement(Project, {
                img: "/static/images/projects/commerce.png",
                title: "Project: Commerce",
                desc: "An eBay-like e-commerce auction site.",
                techs: [{ img: '/static/images/skills/bootstrap.svg', name: 'Bootstrap' }, { img: '/static/images/skills/django.svg', name: 'Django' }, { img: '/static/images/skills/postgresql.svg', name: 'PostgreSQL' }],
                liveLink: "https://commerce-production.up.railway.app/",
                codeLink: "https://github.com/kelancelo/commerce"
            }),
            React.createElement(Project, {
                carouselImg: ['/static/images/projects/chatenger-pc.png', "/static/images/projects/chatenger-mobile.png"],
                title: "Chatenger",
                desc: "A simple private messaging app with features like online/offline status indicator and unread messages notification.",
                techs: [{ img: '/static/images/skills/express.svg', name: 'Express' }, { img: '/static/images/skills/nodejs.svg', name: 'Node.js' }, { img: '/static/images/skills/postgresql.svg', name: 'PostgreSQL' }, { img: '/static/images/skills/react.svg', name: 'React' }],
                liveLink: "https://chatengerr.herokuapp.com",
                codeLink: "https://github.com/kelancelo/chatenger"
            }),
            React.createElement(Project, {
                carouselImg: ['/static/images/projects/homepage.jpg', "/static/images/projects/main-page.png", "/static/images/projects/add-new-acc.png", "/static/images/projects/edit-acc.png", "/static/images/projects/delete-acc.png"],
                title: "Axie Account Tracker",
                desc: "A web app for tracking axie account's SLP earnings and leaderboard info.",
                techs: [{ img: '/static/images/skills/nextjs.svg', name: 'Next.js' }, { img: '/static/images/skills/postgresql.svg', name: 'PostgreSQL' }],
                liveLink: "https://axie-account-tracker.vercel.app",
                codeLink: "https://github.com/kelancelo/axie-account-tracker"
            })
        )
    );
}

function Project(_ref) {
    var img = _ref.img,
        carouselImg = _ref.carouselImg,
        title = _ref.title,
        desc = _ref.desc,
        liveLink = _ref.liveLink,
        codeLink = _ref.codeLink,
        techs = _ref.techs,
        dark = _ref.dark;

    if (carouselImg) return React.createElement(
        "div",
        { className: "col-12" },
        React.createElement(
            "div",
            { className: "card", style: { border: 'none' } },
            React.createElement(
                "div",
                { className: "row g-0" },
                React.createElement(
                    "div",
                    { className: "col-md-6 p-md-3" },
                    React.createElement(
                        "div",
                        {
                            id: title.replaceAll(' ', ''),
                            className: 'carousel slide' + (dark ? ' carousel-dark' : '')
                        },
                        React.createElement(
                            "div",
                            { className: "carousel-inner" },
                            carouselImg.map(function (ci, i) {
                                return React.createElement(
                                    "div",
                                    { key: ci, className: 'carousel-item' + (i === 0 ? ' active' : '') },
                                    React.createElement("img", { src: ci, className: "d-block w-100", alt: "..." })
                                );
                            })
                        ),
                        React.createElement(
                            "button",
                            {
                                className: "carousel-control-prev",
                                type: "button",
                                "data-bs-target": '#' + title.replaceAll(' ', ''),
                                "data-bs-slide": "prev"
                            },
                            React.createElement("span", { className: "carousel-control-prev-icon", "aria-hidden": "true" }),
                            React.createElement(
                                "span",
                                { className: "visually-hidden" },
                                "Previous"
                            )
                        ),
                        React.createElement(
                            "button",
                            {
                                className: "carousel-control-next",
                                type: "button",
                                "data-bs-target": '#' + title.replaceAll(' ', ''),
                                "data-bs-slide": "next"
                            },
                            React.createElement("span", { className: "carousel-control-next-icon", "aria-hidden": "true" }),
                            React.createElement(
                                "span",
                                { className: "visually-hidden" },
                                "Next"
                            )
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "col-md-6" },
                    React.createElement(
                        "div",
                        { className: "card-body" },
                        React.createElement(
                            "h5",
                            { className: "card-title" },
                            title
                        ),
                        React.createElement(
                            "p",
                            { className: "card-text" },
                            desc
                        ),
                        React.createElement(
                            "div",
                            { className: "techs-used" },
                            techs && techs.map(function (tech) {
                                return React.createElement(
                                    "div",
                                    { key: tech.name },
                                    React.createElement(
                                        "div",
                                        { className: "tech-used", title: tech.name },
                                        React.createElement("img", { src: tech.img, alt: tech.name })
                                    )
                                );
                            })
                        ),
                        React.createElement(
                            "div",
                            { className: "project-links" },
                            React.createElement(
                                "a",
                                { href: liveLink, target: "_blank", className: "btn btn-primary me-3" },
                                "View live"
                            ),
                            React.createElement(
                                "a",
                                { href: codeLink, target: "_blank", className: "btn btn-primary" },
                                "View code"
                            )
                        )
                    )
                )
            )
        )
    );

    return (
        // <div className="col-md-6 col-sm-12">
        React.createElement(
            "div",
            { className: "col-12" },
            React.createElement(
                "div",
                { className: "card", style: { border: 'none' } },
                React.createElement(
                    "div",
                    { className: "row g-0" },
                    React.createElement(
                        "div",
                        { className: "col-md-6 p-md-3" },
                        React.createElement("img", { src: img, alt: "", className: "w-100" })
                    ),
                    React.createElement(
                        "div",
                        { className: "col-md-6" },
                        React.createElement(
                            "div",
                            { className: "card-body" },
                            React.createElement(
                                "h5",
                                { className: "card-title" },
                                title
                            ),
                            React.createElement(
                                "p",
                                { className: "card-text" },
                                desc
                            ),
                            React.createElement(
                                "div",
                                { className: "techs-used" },
                                techs && techs.map(function (tech) {
                                    return React.createElement(
                                        "div",
                                        { key: tech.name },
                                        React.createElement(
                                            "div",
                                            { className: "tech-used", title: tech.name },
                                            React.createElement("img", { src: tech.img, alt: tech.name })
                                        )
                                    );
                                })
                            ),
                            React.createElement(
                                "div",
                                { className: "project-links" },
                                React.createElement(
                                    "a",
                                    { href: liveLink, target: "_blank", className: "btn btn-primary me-3" },
                                    "View live"
                                ),
                                React.createElement(
                                    "a",
                                    { href: codeLink, target: "_blank", className: "btn btn-primary" },
                                    "View code"
                                )
                            )
                        )
                    )
                )
            )
        )
    );
}

export default Projects;