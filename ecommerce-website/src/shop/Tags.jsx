const title = "Our Popular Tags";

const tagsList = [
    {
        link: '#',
        text: 'envato',
    },
    {
        link: '#',
        text: 'themeforest',
    },
    {
        link: '#',
        text: 'codecanyon',
    },
    {
        link: '#',
        text: 'videohive',
    },
    {
        link: '#',
        text: 'audiojungle',
    },
    {
        link: '#',
        text: '3docean',
    },
    {
        link: '#',
        text: 'envato',
    },
    {
        link: '#',
        text: 'themeforest',
    },
    {
        link: '#',
        text: 'codecanyon',
    },
];

const Tags = () => {
    return (
        <div className="widget widget-tags container my-4">
            <div className="widget-header mb-3">
                <h5 className="title">{title}</h5>
            </div>
            <ul className="widget-wrapper list-inline">
                {tagsList.map((val, i) => (
                    <li key={i} className="list-inline-item m-1">
                        <a href={val.link} className="btn btn-custom btn-sm">{val.text}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tags;
