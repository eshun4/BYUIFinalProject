import { Link } from "react-router-dom";

const title = "Most Popular Posts";

const postList = [
  {
    id: 1,
    imgUrl: "/images/blog/10.jpg",
    imgAlt: "blog image 1",
    title: "Campaign for Resource Allocation",
    date: "Jun 24, 2024",
  },
  {
    id: 2,
    imgUrl: "/images/blog/11.jpg",
    imgAlt: "blog image 2",
    title: "Community Outreach Initiatives",
    date: "Jun 23, 2024",
  },
  {
    id: 3,
    imgUrl: "/images/blog/12.jpg",
    imgAlt: "blog image 3",
    title: "Educational Program Success",
    date: "Jun 22, 2024",
  },
  {
    id: 4,
    imgUrl: "/images/blog/09.jpg",
    imgAlt: "blog image 4",
    title: "Healthcare Improvements in 2024",
    date: "Jun 21, 2024",
  },
];

const PopularPost = () => {
  return (
    <div className="widget widget-post">
      <div className="widget-header">
        <h5 className="title">{title}</h5>
      </div>
      <ul className="widget-wrapper">
        {postList.map((blog) => (
          <li className="d-flex flex-wrap justify-content-between" key={blog.id}>
            <div className="post-thumb">
              <Link to={`/blog/${blog.id}`}>
                <img src={blog.imgUrl} alt={blog.imgAlt} />
              </Link>
            </div>
            <div className="post-content">
              <Link to={`/blog/${blog.id}`}>
                <h6>{blog.title}</h6>
              </Link>
              <p>{blog.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularPost;
