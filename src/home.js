export default function Home() {
    return(
        <React.Fragment>
            <h1 className="mb-4 fs-3 fw-bold">Hello!</h1>
            <div style={{
                textAlign: "justify",
                textJustify: "inter-word"
            }}>
                <p>
                    I'm Miguel, an aspiring programmer. I graduated from 
                    <a href="https://cdd.edu.ph/" target="_blank">{" "}Colegio de Dagupan{" "}</a>
                    in 2018 with a degree in Information Technology.
                </p>
                <p>
                    Even though I have a degree in Information Technology, I never really focused in
                    programming because I thought it was very hard and that's why my past jobs didn't 
                    involve programming.
                </p>
                <p>
                    But in early 2022, I decided to become a programmer because I was inspired by a show I watched
                    so I immediately started re-learning programming, learning new things about it and practicing
                    those knowledge by building projects.
                </p>
                <p>
                    I may not have any programming work experience but I genuinely have an interest in
                    it.
                </p>
            </div>
        </React.Fragment>
    )
}
