import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup } from "reactstrap";

import heroImg from "../assets/images/cakee.jpg";
import "../styles/hero-section.css";

import { Link } from "react-router-dom";

import "../styles/home.css";

import products from "../assets/fake-data/products.js";

import foodCategoryImg01 from "../assets/images//c4.jpg";
import foodCategoryImg02 from "../assets/images/c2.jpg";
import foodCategoryImg03 from "../assets/images/c3.jpg";
import foodCategoryImg04 from "../assets/images/c5.jpg";
import foodCategoryImg05 from "../assets/images/c6.jpg";
import foodCategoryImg06 from "../assets/images/c7.jpg";
import foodCategoryImg07 from "../assets/images/c8.jpg";
import foodCategoryImg08 from "../assets/images/c9.jpg";

import ProductCard from "../components/UI/product-card/ProductCard.jsx";

const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "Strawberry") {
      const filteredProducts = products.filter(
        (item) => item.category === "Strawberry"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "Chocolate") {
      const filteredProducts = products.filter(
        (item) => item.category === "Chocolate"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "Oreo") {
      const filteredProducts = products.filter(
        (item) => item.category === "Oreo"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "Icecream ") {
      const filteredProducts = products.filter(
        (item) => item.category === "Icecream "
      );

      setAllProducts(filteredProducts);
    }
    if (category === "Fruit") {
      const filteredProducts = products.filter(
        (item) => item.category === "Fruit"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "Cup") {
      const filteredProducts = products.filter(
        (item) => item.category === "Cup"
      );

      setAllProducts(filteredProducts);
    }
    if (category === "Sandwich") {
      const filteredProducts = products.filter(
        (item) => item.category === "Sandwich"
      );

      setAllProducts(filteredProducts);
    }
    if (category === "Roll") {
      const filteredProducts = products.filter(
        (item) => item.category === "Roll"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content  ">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                  magni delectus tenetur autem, sint veritatis!
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ducimus animi, praesentium architecto repudiandae eaque
                  accusamus ipsam tenetur dolores iusto ea, mollitia quibusdam
                  corporis doloremque quae vitae nihil temporibus ullam
                  suscipit.
                </p>
                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="all__foods-btn">
                    <Link to="/foods">See all foods</Link>
                  </button>
                </div>

                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 "></div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container></Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h1 id="cake">Cake</h1>
            </Col>

            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4 bgColor-black">
                <button
                  className={`all__btn  ${
                    category === "ALL" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "Strawberry" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("Strawberry")}
                >
                  <img src={foodCategoryImg01} alt="" />
                  Strawberry Cake
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "Chocolate" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("Chocolate")}
                >
                  <img src={foodCategoryImg02} alt="" />
                  Chocolate Cake
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "Oreo" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("Oreo")}
                >
                  <img src={foodCategoryImg04} alt="" />
                  Oreo Cake
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "Icecream " ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("Icecream ")}
                >
                  <img src={foodCategoryImg05} alt="" />
                  Ice Cake
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "Fruit" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("Fruit")}
                >
                  <img src={foodCategoryImg03} alt="" />
                  Fruit Cake
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "Cup" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("Cup")}
                >
                  <img src={foodCategoryImg06} alt="" />
                  Cup Cake
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "Sandwich" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("Sandwich")}
                >
                  <img src={foodCategoryImg07} alt="" />
                  Sandwich
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "Roll" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("Roll")}
                >
                  <img src={foodCategoryImg08} alt="" />
                  Roll Cake
                </button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <ListGroup className="mt-4"></ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial "></div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
