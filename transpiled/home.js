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
                "I'm Miguel, an aspiring Software Developer. I graduated from",
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
                "Even though I have a degree in Information Technology, I never really focused in programming or anything related to programming while I was still in college. I sort of focused on the wrong things that's why my past jobs didn't involve programming."
            ),
            React.createElement(
                "p",
                null,
                "But one night, I watched this certain anime which inspired me to re-learn programming because I was just amazed on what things you can do with it. After finishing that anime, I immediately started my learning journey and I have been enjoying it until now."
            ),
            React.createElement(
                "p",
                null,
                "I may not have any programming work experience but I genuinely have an interest in it."
            )
        )
    );
}