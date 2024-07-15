import { useState } from "react";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import products from "../products.json"; // Adjust the path to your products.json

const title = "Explore Our Exclusive Recommendations";

const CategoryShowCase = () => {
    const [items, setItems] = useState(
        products.sort((a, b) => b.ratings - a.ratings).slice(0, 4) // Sort by ratings and take top 4
    );

    const filterItem = (categItem) => {
        const updateItems = products
            .filter((curElem) => curElem.category === categItem)
            .sort((a, b) => b.ratings - a.ratings)
            .slice(0, 4); // Limit to top 4
        setItems(updateItems);
    };

    return (
        <div className="course-section style-3 padding-tb">
            <div className="course-shape one"><img src="/src/assets/images/shape-img/icon/01.png" alt="education" /></div>
            <div className="course-shape two"><img src="/src/assets/images/shape-img/icon/02.png" alt="education" /></div>
            <div className="container">
                {/* section header */}
                <div className="section-header">
                    <h2 className="title">{title}</h2>
                    <div className="course-filter-group">
                        <ul className="lab-ul">
                            <li onClick={() => setItems(products.sort((a, b) => b.ratings - a.ratings).slice(0, 4))}>All</li>
                            <li onClick={() => filterItem("Men's Sneaker")}>Sneakers</li>
                            <li onClick={() => filterItem("Men's Pants")}>Pants</li>
                            <li onClick={() => filterItem("Men's Boot")}>Boots</li>
                        </ul>
                    </div>
                </div>

                {/* section body */}
                <div className="section-wrapper">
                    <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter">
                        {items.map((elem) => {
                            const { id, img, category, name, seller, price } = elem;
                            return (
                                <div className="col" key={id}>
                                    <div className="course-item style-4">
                                        <div className="course-inner">
                                            <div className="course-thumb">
                                                <img src={img} alt={name} />
                                                <div className="course-category">
                                                    <div className="course-cate">
                                                        <a href="#">{category}</a>
                                                    </div>
                                                    <div className="course-review">
                                                        <Rating />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* content */}
                                            <div className="course-content">
                                                <Link to={`/shop/${id}`}><h5>{name}</h5></Link>
                                                <div className="course-footer">
                                                    <div className="course-author">
                                                        <Link to="/" className="ca-name">{seller}</Link>
                                                    </div>
                                                    <div className="course-price">${price}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryShowCase;
