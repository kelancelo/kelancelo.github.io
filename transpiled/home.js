export default function Home() {
    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            "h1",
            { className: "mb-4 fs-3 fw-bold" },
            "Hello!"
        ),
        React.createElement(
            "div",
            { style: {
                    textAlign: "justify",
                    textJustify: "inter-word"
                } },
            React.createElement(
                "p",
                null,
                "I'm Miguel, an aspiring programmer. I graduated from",
                React.createElement(
                    "a",
                    { href: "https://cdd.edu.ph/", target: "_blank" },
                    " ",
                    "Colegio de Dagupan",
                    " "
                ),
                "in 2018 with a degree in Information Technology."
            ),
            React.createElement(
                "p",
                null,
                "Even though I have a degree in Information Technology, I never really focused in programming because I thought it was very hard and that's why my past jobs didn't involve programming."
            ),
            React.createElement(
                "p",
                null,
                "But in early 2022, I decided to become a programmer because I was inspired by a show I watched so I immediately started re-learning programming, learning new things about it and practicing those knowledge by building projects."
            ),
            React.createElement(
                "p",
                null,
                "I may not have any programming work experience but I genuinely have an interest in it."
            )
        )
    );
}