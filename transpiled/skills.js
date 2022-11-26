var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function Skills() {
    var skills = [{ img: '/static/images/skills/bootstrap.svg', name: 'Bootstrap', type: 'client-side' },
    // { img: '/static/images/skills/c.svg', name: 'C', type: 'language' },
    { img: '/static/images/skills/css3.svg', name: 'CSS3', type: 'client-side' }, { img: '/static/images/skills/django.svg', name: 'Django', type: 'server-side' }, { img: '/static/images/skills/express.svg', name: 'Express', type: 'server-side' }, { img: '/static/images/skills/git.svg', name: 'Git', type: 'others' }, { img: '/static/images/skills/github.svg', name: 'Github', type: 'others' }, { img: '/static/images/skills/html5.svg', name: 'HTML5', type: 'client-side' }, { img: '/static/images/skills/java.svg', name: 'Java', type: 'language' }, { img: '/static/images/skills/javascript.svg', name: 'Javascript', type: 'language' }, { img: '/static/images/skills/mysql.svg', name: 'MySQL', type: 'database' }, { img: '/static/images/skills/nextjs.svg', name: 'Next.js', type: 'server-side' }, { img: '/static/images/skills/nodejs.svg', name: 'Node.js', type: 'server-side' }, { img: '/static/images/skills/python.svg', name: 'Python', type: 'language' }, { img: '/static/images/skills/postgresql.svg', name: 'PostgreSQL', type: 'database' }, { img: '/static/images/skills/react.svg', name: 'React', type: 'client-side' }];

    var _React$useState = React.useState(skills),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        filteredSkills = _React$useState2[0],
        setFilteredSkills = _React$useState2[1];

    var filterSkills = function filterSkills(type) {
        var filtered = void 0;
        if (type === 'all') filtered = skills;else filtered = skills.filter(function (skill) {
            return skill.type === type;
        });
        setFilteredSkills(filtered);
    };

    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            'h1',
            { className: 'my-4 fs-3 fw-bold' },
            'Skills'
        ),
        React.createElement(
            'p',
            null,
            'These are the languages and technologies I learned so far.'
        ),
        React.createElement(
            'div',
            { id: 'skills-filter-buttons', className: 'mb-3' },
            React.createElement(
                'button',
                { onClick: function onClick() {
                        return filterSkills('all');
                    }, className: 'btn btn-primary' },
                'All'
            ),
            React.createElement(
                'button',
                { onClick: function onClick() {
                        return filterSkills('language');
                    }, className: 'btn btn-primary' },
                'Language'
            ),
            React.createElement(
                'button',
                { onClick: function onClick() {
                        return filterSkills('server-side');
                    }, className: 'btn btn-primary' },
                'Server-side'
            ),
            React.createElement(
                'button',
                { onClick: function onClick() {
                        return filterSkills('client-side');
                    }, className: 'btn btn-primary' },
                'Client-side'
            ),
            React.createElement(
                'button',
                { onClick: function onClick() {
                        return filterSkills('database');
                    }, className: 'btn btn-primary' },
                'Database'
            ),
            React.createElement(
                'button',
                { onClick: function onClick() {
                        return filterSkills('others');
                    }, className: 'btn btn-primary' },
                'Others'
            )
        ),
        React.createElement(
            'div',
            { id: 'skill-items' },
            filteredSkills.map(function (skill) {
                return React.createElement(
                    'div',
                    { key: skill.name },
                    React.createElement(
                        'div',
                        { className: 'skill-item', title: skill.name },
                        React.createElement('img', { src: skill.img, alt: skill.name })
                    )
                );
            })
        )
    );
}

export default Skills;