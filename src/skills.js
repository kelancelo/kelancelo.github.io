function Skills() {
    const skills = [
        { img: '/static/images/skills/bootstrap.svg', name: 'Bootstrap', type: 'client-side' },
        // { img: '/static/images/skills/c.svg', name: 'C', type: 'language' },
        { img: '/static/images/skills/css3.svg', name: 'CSS3', type: 'client-side' },
        { img: '/static/images/skills/django.svg', name: 'Django', type: 'server-side' },
        { img: '/static/images/skills/express.svg', name: 'Express', type: 'server-side' },
        { img: '/static/images/skills/git.svg', name: 'Git', type: 'others' },
        { img: '/static/images/skills/github.svg', name: 'Github', type: 'others' },
        { img: '/static/images/skills/html5.svg', name: 'HTML5', type: 'client-side' },
        { img: '/static/images/skills/java.svg', name: 'Java', type: 'language' },
        { img: '/static/images/skills/javascript.svg', name: 'Javascript', type: 'language' },
        { img: '/static/images/skills/mysql.svg', name: 'MySQL', type: 'database' },
        { img: '/static/images/skills/nextjs.svg', name: 'Next.js', type: 'server-side' },
        { img: '/static/images/skills/nodejs.svg', name: 'Node.js', type: 'server-side' },
        { img: '/static/images/skills/python.svg', name: 'Python', type: 'language' },
        { img: '/static/images/skills/postgresql.svg', name: 'PostgreSQL', type: 'database' },
        { img: '/static/images/skills/react.svg', name: 'React', type: 'client-side' },
        // { img: '/images/skills/sass.svg', name: 'Sass', type: 'client-side' },
    ]
    const [filteredSkills, setFilteredSkills] = React.useState(skills)
    const filterSkills = (type) => {
        let filtered
        if (type === 'all') filtered = skills
        else filtered = skills.filter(skill => skill.type === type)
        setFilteredSkills(filtered)
    }

    return (
        <React.Fragment>
            <h1 className="my-4 fs-3 fw-bold">Skills</h1>
            <p>These are the languages and technologies I learned so far.</p>
            <div id="skills-filter-buttons" className="mb-3">
                <button onClick={() => filterSkills('all')} className="btn btn-primary">All</button>
                <button onClick={() => filterSkills('language')} className="btn btn-primary">Language</button>
                <button onClick={() => filterSkills('server-side')} className="btn btn-primary">Server-side</button>
                <button onClick={() => filterSkills('client-side')} className="btn btn-primary">Client-side</button>
                <button onClick={() => filterSkills('database')} className="btn btn-primary">Database</button>
                <button onClick={() => filterSkills('others')} className="btn btn-primary">Others</button>
            </div>
            <div id="skill-items">
                {filteredSkills.map(skill => (
                    <div key={skill.name}>
                        <div className="skill-item" title={skill.name}>
                            <img src={skill.img} alt={skill.name} />
                        </div>
                    </div>
                ))}
            </div>
        </React.Fragment>
    )
}

export default Skills;