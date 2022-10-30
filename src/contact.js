function Contact() {
    return (
        <React.Fragment>
            <h1 className="mb-4 fs-3 fw-bold">Contact me</h1>

            <div className="row gy-3">
                <div className="col-12 d-flex align-items-center">
                    <div className="bg-white rounded p-1 me-2" style={{ width: "2.5rem" }}>
                        <img src="/static/images/gmail.svg" style={{
                            width: "100%"
                        }} />
                    </div>
                    <a href="mailto:delosreyesmiguelangelo@gmail.com">
                        delosreyesmiguelangelo@gmail.com
                    </a>
                </div>

                <div className="col-12 d-flex align-items-center">
                    <div className="bg-white rounded p-1 me-2" style={{ width: "2.5rem" }}>
                        <img src="/static/images/skills/github.svg" style={{
                            width: "100%"
                        }} />
                    </div>
                    <a href="https://github.com/kelancelo/" target="_blank">
                        https://github.com/kelancelo/
                    </a>
                </div>

                <div className="col-12 d-flex align-items-center">
                    <div className="bg-white rounded p-1 me-2" style={{ width: "2.5rem" }}>
                        <img src="/static/images/linkedin.svg" style={{
                            width: "100%"
                        }} />
                    </div>
                    <a href="https://www.linkedin.com/in/kelancelo/" target="_blank">
                        https://www.linkedin.com/in/kelancelo/
                    </a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Contact;