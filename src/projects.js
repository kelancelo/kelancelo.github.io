function Projects() {
    return (
        <React.Fragment>
            <h1 className="my-4 fs-3 fw-bold">Projects</h1>
            <div className="row g-4 text-dark">
                <Project
                    carouselImg={[
                        '/static/images/projects/chatenger-pc.png',
                        "/static/images/projects/chatenger-mobile.png"
                    ]}
                    title='Chatenger'
                    desc="A simple private messaging app with features like online/offline status indicator and unread messages notification."
                    techs={[
                        { img: '/static/images/skills/css3.svg', name: 'CSS3' },
                        { img: '/static/images/skills/express.svg', name: 'Express' },
                        { img: '/static/images/skills/nodejs.svg', name: 'Node.js' },
                        { img: '/static/images/skills/postgresql.svg', name: 'PostgreSQL' },
                        { img: '/static/images/skills/react.svg', name: 'React' },
                    ]}
                    liveLink='https://chatengerr.herokuapp.com'
                    codeLink='https://github.com/kelancelo/chatenger'
                />
                <Project
                    carouselImg={[
                        '/static/images/projects/kelancelo-store.png',
                        '/static/images/projects/kelancelo-store-category.png',
                        '/static/images/projects/kelancelo-store-product.png',
                        '/static/images/projects/kelancelo-store-cart.png',
                        '/static/images/projects/kelancelo-store-checkout.png',

                    ]}
                    title='Kelancelo store'
                    desc="An e-commerce site inspired by my favorite guitarist Synyster Gates. It uses paypal to process payments."
                    techs={[
                        { img: '/static/images/skills/bootstrap.svg', name: 'Bootstrap' },
                        { img: '/static/images/skills/express.svg', name: 'Express' },
                        { img: '/static/images/skills/nodejs.svg', name: 'Node.js' },
                        { img: '/static/images/skills/postgresql.svg', name: 'PostgreSQL' },
                        { img: '/static/images/skills/react.svg', name: 'React' },
                        // { img: '/static/images/skills/sass.svg', name: 'Sass' }
                    ]}
                    liveLink='https://kelancelostore.herokuapp.com'
                    codeLink='https://github.com/kelancelo/kelancelo-store'
                    dark={true}
                />
                <Project
                    carouselImg={[
                        '/static/images/projects/homepage.jpg',
                        "/static/images/projects/main-page.png",
                        "/static/images/projects/add-new-acc.png",
                        "/static/images/projects/edit-acc.png",
                        "/static/images/projects/delete-acc.png"
                    ]}
                    title='Axie Account Tracker'
                    desc="A web app for tracking axie account's SLP earnings and leaderboard info."
                    techs={[
                        { img: '/static/images/skills/css3.svg', name: 'CSS3' },
                        { img: '/static/images/skills/nextjs.svg', name: 'Next.js' },
                        { img: '/static/images/skills/postgresql.svg', name: 'PostgreSQL' },
                    ]}
                    liveLink='https://axie-account-tracker.vercel.app'
                    codeLink='https://github.com/kelancelo/axie-account-tracker'
                />
                <Project
                    img='/static/images/projects/facebook-ui-clone.png'
                    title='Facebook home page UI clone'
                    desc="I decided to do this project to practice and improve my skills in CSS and React.
                I wrote this from scratch."
                    techs={[
                        { img: '/static/images/skills/css3.svg', name: 'CSS3' },
                        { img: '/static/images/skills/react.svg', name: 'React' },
                    ]}
                    liveLink='https://fb-ui-clone.vercel.app'
                    codeLink='https://github.com/kelancelo/facebook-homepage-ui-clone'
                />
            </div>
        </React.Fragment>
    )
}


function Project({ img, carouselImg, title, desc, liveLink, codeLink, techs, dark }) {
    if (carouselImg) return (
        <div className="col-12">
            <div className="card" style={{ border: 'none' }}>
                <div className="row g-0">
                    <div className="col-md-6 p-md-3">
                        <div 
                            id={title.replaceAll(' ', '')} 
                            className={'carousel slide' + (dark ? ' carousel-dark' : '')}
                        >
                            <div className="carousel-inner">
                                {carouselImg.map((ci, i) => (
                                    <div key={ci} className={'carousel-item' + (i === 0 ? ' active' : '')}>
                                        <img src={ci} className="d-block w-100" alt="..." />
                                    </div>
                                ))}
                            </div>
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target={'#' + title.replaceAll(' ', '')}
                                data-bs-slide="prev"
                            >
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target={'#' + title.replaceAll(' ', '')}
                                data-bs-slide="next"
                            >
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>                    
                    </div>
                
                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">
                                {desc}
                            </p>
                            <div className="techs-used">
                                {techs && techs.map(tech => (
                                    <div key={tech.name}>
                                        <div className="tech-used" title={tech.name}>
                                            <img src={tech.img} alt={tech.name} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="project-links">
                                <a href={liveLink} target="_blank" className="btn btn-primary me-3">
                                    View live
                                </a>
                                <a href={codeLink} target="_blank" className="btn btn-primary">
                                    View code
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        // <div className="col-md-6 col-sm-12">
        <div className="col-12">
            <div className="card" style={{ border: 'none' }}>
                <div className="row g-0">
                    <div className="col-md-6 p-md-3">
                        <img src={img} alt="" className="w-100"/>
                    </div>

                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{desc}</p>
                            <div className="techs-used">
                                {techs && techs.map(tech => (
                                    <div key={tech.name}>
                                        <div className="tech-used" title={tech.name}>
                                            <img src={tech.img} alt={tech.name} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="project-links">
                                <a href={liveLink} target="_blank" className="btn btn-primary me-3">
                                    View live
                                </a>
                                <a href={codeLink} target="_blank" className="btn btn-primary">
                                    View code
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;