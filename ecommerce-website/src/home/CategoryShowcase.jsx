import { useState } from "react";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";


const title = "Explore Our Exclusive Products";

const ProductData = [
    {
        imgUrl: 'src/assets/images/categoryTab/01.jpg',
        cate: 'Shoes',
        title: 'Nike Premier X',
        author: 'assets/images/course/author/01.jpg',
        brand: 'Nike',
        price: '$199.00',
        id: 1,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/02.jpg',
        cate: 'Bags',
        title: 'Aesthetic Bags',
        author: 'assets/images/course/author/02.jpg',
        brand: 'D&J Bags',
        price: '$199.00',
        id: 2,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/03.jpg',
        cate: 'Phones',
        title: 'iPhone 12',
        author: 'src/assets/images/categoryTab/brand/apple.png',
        brand: 'Apple',
        price: '$999.00',
        id: 3,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/04.jpg',
        cate: 'Bags',
        title: 'Hiking Bag 15 Nh100',
        author: 'assets/images/course/author/04.jpg',
        brand: 'Gucci',
        price: '$299.00',
        id: 4,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/05.jpg',
        cate: 'Shoes',
        title: 'Outdoor Sports Shoes',
        author: 'assets/images/course/author/05.jpg',
        brand: 'Nike',
        price: '$149.00',
        id: 5,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/06.jpg',
        cate: 'Beauty',
        title: 'COSRX Snail Mucin',
        author: 'assets/images/course/author/06.jpg',
        brand: 'Zaara',
        price: '$29.00',
        id: 6,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/07.jpg',
        cate: 'Bags',
        title: 'Look Less Chanel Bag',
        author: 'assets/images/course/author/01.jpg',
        brand: 'Gucci',
        price: '$399.00',
        id: 7,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/08.jpg',
        cate: 'Shoes',
        title: 'Casual Sneakers',
        author: 'assets/images/course/author/02.jpg',
        brand: 'Bata',
        price: '$79.00',
        id: 8,
    },
];



const CategoryShowCase = () => {
    const [items, setItems] = useState(ProductData);
    const filterItem = (categItem) => {
        const updateItems = ProductData.filter((curElem) => {
            return curElem.cate === categItem;
        });
        setItems(updateItems);
    }
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
                    <li onClick={() => setItems(ProductData) }>All</li>
                    <li onClick={() => filterItem('Shoes') }>Shoes</li>
                    <li onClick={() => filterItem('Bags') }>Bags</li>
                    <li onClick={() => filterItem('Phones') }>Phones</li>
                    <li onClick={() => filterItem('Beauty') }>Beauty</li>
                </ul>
            </div>
        </div>

        {/* section body */}
        <div className="section-wrapper">
            <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter">
                { items.map((elem) => {
                    const { id, imgUrl, imgAlt, cate, title, brand, authorName, price } = elem;
                    return (
                        <div className="col" key={id}>
                            <div className="course-item style-4">
                                <div className="course-inner">
                                    <div className="course-thumb">
                                        <img src={imgUrl} alt="" />
                                        <div className="course-category">
                                            <div className="course-cate">
                                                <a href="#">{cate}</a>
                                            </div>
                                            <div className="course-reiew">
                                                <Rating/>
                                            </div>
                                        </div>
                                    </div>

                                    {/* content  */}
                                    <div className="course-content">
                                        <Link to="/course-single"><h5>{title}</h5></Link>
                                        <div className="course-footer">
                                            <div className="course-author">
                                                <Link to="/team-single" className="ca-name">{brand}</Link>
                                            </div>
                                            <div className="course-price">{price}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) })
                }
            </div>
        </div>
    </div>
</div>
  )
}

export default CategoryShowCase