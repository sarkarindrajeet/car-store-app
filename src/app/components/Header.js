import React from "react";
import Image from "next/image";
import Link from "next/link";
import Style from "@/app/css/style.css";
import Bootstrap from "@/app/css/vendor/bootstrap.min.css";
import plu from "@/app/css/plugins/glightbox.min.css";
import plugins from "@/app/css/plugins/swiper-bundle.min.css";

const Header = () => {
  return (
    <header className="header__section">
      <div className="main__header header__sticky">
        <div className="container">
          <div className="main__header--inner position__relative d-flex justify-content-between align-items-center">
            <div className="offcanvas__header--menu__open ">
              <Link
                className="offcanvas__header--menu__open--btn"
                href="javascript:void(0)"
                data-offcanvas
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon offcanvas__header--menu__open--svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke-width="32"
                    d="M80 160h352M80 256h352M80 352h352"
                  />
                </svg>
                <span className="visually-hidden">Offcanvas Menu Open</span>
              </Link>
            </div>
            <div className="main__logo">
              <h1 className="main__logo--title">
                <Link className="main__logo--link" href="/">
                  <Image
                    className="main__logo--img"
                    src="/img/logo/logo.webp"
                    alt="logo-img"
                    width={150}
                    height={40}
                  />
                </Link>
              </h1>
            </div>
            <div className="header__search--widget d-none d-lg-block header__sticky--none">
              <form
                className="d-flex header__search--form border-radius-5"
                action="#"
              >
                <div className="header__select--categories select">
                  <select className="header__select--inner">
                    <option selected value="1">
                      {" "}
                      All categories
                    </option>
                    <option value="2">Accessories</option>
                    <option value="3">Accessories & More</option>
                  </select>
                </div>
                <div className="header__search--box">
                  <label>
                    <input
                      className="header__search--input"
                      placeholder="Search For Products..."
                      type="text"
                    />
                  </label>
                  <button
                    className="header__search--button bg__primary text-white"
                    aria-label="search button"
                    type="submit"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.6952 14.4991L11.7663 10.5588C12.7765 9.4008 13.33 7.94381 13.33 6.42703C13.33 2.88322 10.34 0 6.66499 0C2.98997 0 0 2.88322 0 6.42703C0 9.97085 2.98997 12.8541 6.66499 12.8541C8.04464 12.8541 9.35938 12.4528 10.4834 11.6911L14.4422 15.6613C14.6076 15.827 14.8302 15.9184 15.0687 15.9184C15.2944 15.9184 15.5086 15.8354 15.6711 15.6845C16.0166 15.364 16.0276 14.8325 15.6952 14.4991ZM6.66499 1.67662C9.38141 1.67662 11.5913 3.8076 11.5913 6.42703C11.5913 9.04647 9.38141 11.1775 6.66499 11.1775C3.94857 11.1775 1.73869 9.04647 1.73869 6.42703C1.73869 3.8076 3.94857 1.67662 6.66499 1.67662Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
            <div className="header__menu d-none d-lg-block header__sticky--block">
              <nav className="header__menu--navigation">
                <ul className="header__menu--wrapper d-flex">
                  <li className="header__menu--items">
                    <Link className="header__menu--link active" href="/">
                      Home
                    </Link>
                  </li>
                  <li className="header__menu--items">
                    <Link className="header__menu--link" href="/about">
                      About US
                    </Link>
                  </li>
                  <li className="header__menu--items mega__menu--items">
                    <Link className="header__menu--link" href="shop.html">
                      Shop
                      <svg
                        className="menu__arrowdown--icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="7.41"
                        viewBox="0 0 12 7.41"
                      >
                        <path
                          d="M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z"
                          transform="translate(-6 -8.59)"
                          fill="currentColor"
                          opacity="0.7"
                        />
                      </svg>
                    </Link>
                    <ul className="header__mega--menu d-flex">
                      <li className="header__mega--menu__li">
                        <ul className="header__mega--sub__menu">
                          <li className="header__mega--sub__menu_li">
                            <Link
                              className="header__mega--sub__menu--title"
                              href="shop.html"
                            >
                              Shop Left Sidebar
                            </Link>
                          </li>
                          <li className="header__mega--sub__menu_li">
                            <Link
                              className="header__mega--sub__menu--title"
                              href="shop-right-sidebar.html"
                            >
                              Shop Right Sidebar
                            </Link>
                          </li>
                          <li className="header__mega--sub__menu_li">
                            <Link
                              className="header__mega--sub__menu--title"
                              href="shop-grid.html"
                            >
                              Shop Grid
                            </Link>
                          </li>
                          <li className="header__mega--sub__menu_li">
                            <Link
                              className="header__mega--sub__menu--title"
                              href="shop-grid-list.html"
                            >
                              Shop Grid List
                            </Link>
                          </li>
                          <li className="header__mega--sub__menu_li">
                            <Link
                              className="header__mega--sub__menu--title"
                              href="shop-list.html"
                            >
                              Shop List
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="header__mega--menu__li">
                        <ul className="header__mega--sub__menu">
                          <li className="header__mega--sub__menu_li">
                            <Link
                              className="header__mega--sub__menu--title"
                              href="product-details.html"
                            >
                              Product Details
                            </Link>
                          </li>
                          <li className="header__mega--sub__menu_li">
                            <Link
                              className="header__mega--sub__menu--title"
                              href="product-video.html"
                            >
                              Video Product
                            </Link>
                          </li>
                          <li className="header__mega--sub__menu_li">
                            <Link
                              className="header__mega--sub__menu--title"
                              href="product-details.html"
                            >
                              Variable Product
                            </Link>
                          </li>
                          <li className="header__mega--sub__menu_li">
                            <Link
                              className="header__mega--sub__menu--title"
                              href="product-left-sidebar.html"
                            >
                              Product Left Sidebar
                            </Link>
                          </li>
                          <li className="header__mega--sub__menu_li">
                            <Link
                              className="header__mega--sub__menu--title"
                              href="product-gallery.html"
                            >
                              Product Gallery
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="header__mega--menu__li">
                        <ul className="header__mega--sub__menu">
                          <li className="header__mega--sub__menu_li">
                            <Link
                              className="header__mega--sub__menu--title"
                              href="my-account.html"
                            >
                              My Account
                            </Link>
                          </li>
                          <li className="header__mega--sub__menu_li">
                            <Link
                              className="header__mega--sub__menu--title"
                              href="my-account-2.html"
                            >
                              My Account 2
                            </Link>
                          </li>
                          <li className="header__mega--sub__menu_li">
                            <Link
                              className="header__mega--sub__menu--title"
                              href="404.html"
                            >
                              404 Page
                            </Link>
                          </li>
                          <li className="header__mega--sub__menu_li">
                            <Link
                              className="header__mega--sub__menu--title"
                              href="login.html"
                            >
                              Login Page
                            </Link>
                          </li>
                          <li className="header__mega--sub__menu_li">
                            <Link
                              className="header__mega--sub__menu--title"
                              href="faq.html"
                            >
                              Faq Page
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="header__mega--menu__li">
                        <ul className="header__mega--sub__menu">
                          <li className="header__mega--sub__menu_li">
                            <Link
                              className="header__mega--sub__menu--title"
                              href="about.html"
                            >
                              About Us
                            </Link>
                          </li>
                          <li className="header__mega--sub__menu_li">
                            <Link
                              className="header__mega--sub__menu--title"
                              href="contact.html"
                            >
                              Contact Us
                            </Link>
                          </li>
                          <li className="header__mega--sub__menu_li">
                            <Link
                              className="header__mega--sub__menu--title"
                              href="portfolio.html"
                            >
                              Portfolio
                            </Link>
                          </li>
                          <li className="header__mega--sub__menu_li">
                            <Link
                              className="header__mega--sub__menu--title"
                              href="compare.html"
                            >
                              Compare
                            </Link>
                          </li>
                          <li className="header__mega--sub__menu_li">
                            <Link
                              className="header__mega--sub__menu--title"
                              href="checkout.html"
                            >
                              Checkout
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="header__mega--menu__li fullscreen__style d-flex">
                        <Link
                          className="header__mega--menu__banner display-block"
                          href="shop.html"
                        >
                          <img
                            className="header__mega--menu__banner--img"
                            src="assets/img/banner/banner1.webp"
                            alt="banner-menu"
                          />
                          <div className="banner__content">
                            <span className="banner__content--subtitle text__secondary mb-10">
                              20% off
                            </span>
                            <h2 className="banner__content--title">
                              <span className="banner__content--title__inner">
                                New
                              </span>{" "}
                              COLLECTION
                            </h2>
                            <span className="banner__content--price">
                              $22.99
                            </span>
                          </div>
                        </Link>
                        <Link
                          className="header__mega--menu__banner display-block"
                          href="shop.html"
                        >
                          <img
                            className="header__mega--menu__banner--img"
                            src="assets/img/banner/banner2.webp"
                            alt="banner-menu"
                          />
                          <div className="banner__content right">
                            <span className="banner__badge--style2">
                              20% Off
                            </span>
                            <h2 className="banner__content--title">
                              <span className="banner__content--title__inner">
                                {" "}
                                ON{" "}
                              </span>{" "}
                              SALE <br /> PRODUCT
                            </h2>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="header__menu--items">
                    <Link className="header__menu--link" href="/contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header__account header__sticky--none">
              <ul className="header__account--wrapper d-flex align-items-center">
                <li className="header__account--items d-none d-lg-block">
                  <Link className="header__account--btn" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className=" -user"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span className="visually-hidden">My account</span>
                  </Link>
                </li>
                <li className="header__account--items  header__account--search__items mobile__d--block d-sm-2-none">
                  <Link
                    className="header__account--btn search__open--btn"
                    href="javascript:void(0)"
                    data-offcanvas
                  >
                    <svg
                      className="product__items--action__btn--svg"
                      xmlns="http://www.w3.org/2000/svg"
                      width="22.51"
                      height="20.443"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                        fill="none"
                        stroke="currentColor"
                        stroke-miterlimit="10"
                        stroke-width="32"
                      />
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="32"
                        d="M338.29 338.29L448 448"
                      />
                    </svg>
                    <span className="visually-hidden">Search</span>
                  </Link>
                </li>
                <li className="header__account--items d-none d-lg-block">
                  <Link className="header__account--btn" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className=" -heart"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    <span className="items__count">3</span>
                  </Link>
                </li>
                <li className="header__account--items header__minicart--items">
                  <Link
                    className="header__account--btn minicart__open--btn"
                    href="javascript:void(0)"
                    data-offcanvas
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22.706"
                      height="22.534"
                      viewBox="0 0 14.706 13.534"
                    >
                      <g transform="translate(0 0)">
                        <g>
                          <path
                            data-name="Path 16787"
                            d="M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z"
                            transform="translate(0 -463.248)"
                            fill="currentColor"
                          />
                          <path
                            data-name="Path 16788"
                            d="M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,6.793,478.352Z"
                            transform="translate(-1.191 -466.622)"
                            fill="currentColor"
                          />
                          <path
                            data-name="Path 16789"
                            d="M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,14.566,478.352Z"
                            transform="translate(-2.875 -466.622)"
                            fill="currentColor"
                          />
                        </g>
                      </g>
                    </svg>
                    <span className="items__count">2</span>
                    <span className="minicart__btn--text">
                      My Cart <br />{" "}
                      <span className="minicart__btn--text__price">$0.00</span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="header__account header__sticky--block">
              <ul className="header__account--wrapper d-flex align-items-center">
                <li className="header__account--items  header__account--search__items d-sm-2-none">
                  <Link
                    className="header__account--btn search__open--btn"
                    href="javascript:void(0)"
                    data-offcanvas
                  >
                    <svg
                      className="product__items--action__btn--svg"
                      xmlns="http://www.w3.org/2000/svg"
                      width="22.51"
                      height="20.443"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                        fill="none"
                        stroke="currentColor"
                        stroke-miterlimit="10"
                        stroke-width="32"
                      />
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="32"
                        d="M338.29 338.29L448 448"
                      />
                    </svg>
                    <span className="visually-hidden">Search</span>
                  </Link>
                </li>
                <li className="header__account--items d-none d-lg-block">
                  <Link className="header__account--btn" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className=" -user"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span className="visually-hidden">My account</span>
                  </Link>
                </li>
                <li className="header__account--items d-none d-lg-block">
                  <Link className="header__account--btn" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className=" -heart"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    <span className="items__count">3</span>
                  </Link>
                </li>
                <li className="header__account--items header__minicart--items">
                  <Link
                    className="header__account--btn minicart__open--btn"
                    href="javascript:void(0)"
                    data-offcanvas
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22.706"
                      height="22.534"
                      viewBox="0 0 14.706 13.534"
                    >
                      <g transform="translate(0 0)">
                        <g>
                          <path
                            data-name="Path 16787"
                            d="M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z"
                            transform="translate(0 -463.248)"
                            fill="currentColor"
                          />
                          <path
                            data-name="Path 16788"
                            d="M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,6.793,478.352Z"
                            transform="translate(-1.191 -466.622)"
                            fill="currentColor"
                          />
                          <path
                            data-name="Path 16789"
                            d="M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,14.566,478.352Z"
                            transform="translate(-2.875 -466.622)"
                            fill="currentColor"
                          />
                        </g>
                      </g>
                    </svg>
                    <span className="items__count">2</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="header__bottom d-none d-lg-block">
        <div className="container">
          <div className="header__bottom--inner__style3 position__relative d-flex align-items-center justify-content-between">
            <div className="header__menu header__menu--style4">
              <nav className="header__menu--navigation">
                <ul className="header__menu--wrapper d-flex">
                  <li className="header__menu--items">
                    <Link className="header__menu--link active" href="/">
                      Home
                    </Link>
                  </li>
                  <li className="header__menu--items">
                    <Link className="header__menu--link" href="/about">
                      About Us
                    </Link>
                  </li>
                  <li className="header__menu--items mega__menu--items">
                    <Link className="header__menu--link" href="shop.html">
                      Shop
                      <svg
                        className="menu__arrowdown--icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="7.41"
                        viewBox="0 0 12 7.41"
                      >
                        <path
                          d="M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z"
                          transform="translate(-6 -8.59)"
                          fill="currentColor"
                          opacity="0.7"
                        />
                      </svg>
                    </Link>
                    <ul className="header__mega--menu d-flex">
                      <li className="header__mega--menu__li">
                        <ul className="header__mega--sub__menu">
                          <li className="header__mega--sub__menu_li">
                            <Link
                              className="header__mega--sub__menu--title"
                              href="#"
                            >
                              Shop
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li className="header__menu--items">
                    <Link className="header__menu--link" href="/contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="language__currency style4 d-none d-lg-block">
              <ul className="d-flex align-items-center">
                <li className="language__currency--list">
                  <Link
                    className="language__switcher text-black"
                    href="javascript:void(0)"
                  >
                    <span>English</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="9.797"
                      height="6.05"
                      viewBox="0 0 9.797 6.05"
                    >
                      <path
                        d="M14.646,8.59,10.9,12.329,7.151,8.59,6,9.741l4.9,4.9,4.9-4.9Z"
                        transform="translate(-6 -8.59)"
                        fill="currentColor"
                        opacity="0.7"
                      />
                    </svg>
                  </Link>
                  <div className="dropdown__language">
                    <ul>
                      <li className="language__items">
                        <Link className="language__text" href="#">
                          France
                        </Link>
                      </li>
                      <li className="language__items">
                        <Link className="language__text" href="#">
                          Russia
                        </Link>
                      </li>
                      <li className="language__items">
                        <Link className="language__text" href="#">
                          Spanish
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="offcanvas__header">
        <div className="offcanvas__inner">
          <div className="offcanvas__logo">
            <Link className="offcanvas__logo_link" href="index.html">
              <img
                src="assets/img/logo/nav-log.webp"
                alt="Grocee Logo"
                width="158"
                height="36"
              />
            </Link>
            <button className="offcanvas__close--btn" data-offcanvas>
              close
            </button>
          </div>
          <nav className="offcanvas__menu">
            <ul className="offcanvas__menu_ul">
              <li className="offcanvas__menu_li">
                <Link className="offcanvas__menu_item" href="index.html">
                  Home
                </Link>
                <ul className="offcanvas__sub_menu">
                  <li className="offcanvas__sub_menu_li">
                    <Link
                      href="index.html"
                      className="offcanvas__sub_menu_item"
                    >
                      Home One
                    </Link>
                  </li>
                  <li className="offcanvas__sub_menu_li">
                    <Link
                      href="index-2.html"
                      className="offcanvas__sub_menu_item"
                    >
                      Home Two
                    </Link>
                  </li>
                  <li className="offcanvas__sub_menu_li">
                    <Link
                      href="index-3.html"
                      className="offcanvas__sub_menu_item"
                    >
                      Home Three
                    </Link>
                  </li>
                  <li className="offcanvas__sub_menu_li">
                    <Link
                      href="index-4.html"
                      className="offcanvas__sub_menu_item"
                    >
                      Home Four
                    </Link>
                  </li>
                  <li className="offcanvas__sub_menu_li">
                    <Link
                      href="index-5.html"
                      className="offcanvas__sub_menu_item"
                    >
                      Home Five
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="offcanvas__menu_li">
                <Link className="offcanvas__menu_item" href="shop.html">
                  Shop
                </Link>
                <ul className="offcanvas__sub_menu">
                  <li className="offcanvas__sub_menu_li">
                    <Link href="#" className="offcanvas__sub_menu_item">
                      Column One
                    </Link>
                    <ul className="offcanvas__sub_menu">
                      <li className="offcanvas__sub_menu_li">
                        <Link
                          className="offcanvas__sub_menu_item"
                          href="shop.html"
                        >
                          Shop Left Sidebar
                        </Link>
                      </li>
                      <li className="offcanvas__sub_menu_li">
                        <Link
                          className="offcanvas__sub_menu_item"
                          href="shop-right-sidebar.html"
                        >
                          Shop Right Sidebar
                        </Link>
                      </li>
                      <li className="offcanvas__sub_menu_li">
                        <Link
                          className="offcanvas__sub_menu_item"
                          href="shop-grid.html"
                        >
                          Shop Grid
                        </Link>
                      </li>
                      <li className="offcanvas__sub_menu_li">
                        <Link
                          className="offcanvas__sub_menu_item"
                          href="shop-grid-list.html"
                        >
                          Shop Grid List
                        </Link>
                      </li>
                      <li className="offcanvas__sub_menu_li">
                        <Link
                          className="offcanvas__sub_menu_item"
                          href="shop-list.html"
                        >
                          Shop List
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="offcanvas__sub_menu_li">
                    <Link href="#" className="offcanvas__sub_menu_item">
                      Column Two
                    </Link>
                    <ul className="offcanvas__sub_menu">
                      <li className="offcanvas__sub_menu_li">
                        <Link
                          className="offcanvas__sub_menu_item"
                          href="product-details.html"
                        >
                          Product Details
                        </Link>
                      </li>
                      <li className="offcanvas__sub_menu_li">
                        <Link
                          className="offcanvas__sub_menu_item"
                          href="product-video.html"
                        >
                          Video Product
                        </Link>
                      </li>
                      <li className="offcanvas__sub_menu_li">
                        <Link
                          className="offcanvas__sub_menu_item"
                          href="product-details.html"
                        >
                          Variable Product
                        </Link>
                      </li>
                      <li className="offcanvas__sub_menu_li">
                        <Link
                          className="offcanvas__sub_menu_item"
                          href="product-left-sidebar.html"
                        >
                          Product Left Sidebar
                        </Link>
                      </li>
                      <li className="offcanvas__sub_menu_li">
                        <Link
                          className="offcanvas__sub_menu_item"
                          href="product-gallery.html"
                        >
                          Product Gallery
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="offcanvas__sub_menu_li">
                    <Link href="#" className="offcanvas__sub_menu_item">
                      Column Three
                    </Link>
                    <ul className="offcanvas__sub_menu">
                      <li className="offcanvas__sub_menu_li">
                        <Link
                          className="offcanvas__sub_menu_item"
                          href="my-account.html"
                        >
                          My Account
                        </Link>
                      </li>
                      <li className="offcanvas__sub_menu_li">
                        <Link
                          className="offcanvas__sub_menu_item"
                          href="my-account-2.html"
                        >
                          My Account 2
                        </Link>
                      </li>
                      <li className="offcanvas__sub_menu_li">
                        <Link
                          className="offcanvas__sub_menu_item"
                          href="404.html"
                        >
                          404 Page
                        </Link>
                      </li>
                      <li className="offcanvas__sub_menu_li">
                        <Link
                          className="offcanvas__sub_menu_item"
                          href="login.html"
                        >
                          Login Page
                        </Link>
                      </li>
                      <li className="offcanvas__sub_menu_li">
                        <Link
                          className="offcanvas__sub_menu_item"
                          href="faq.html"
                        >
                          Faq Page
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="offcanvas__sub_menu_li">
                    <Link href="#" className="offcanvas__sub_menu_item">
                      Column Three
                    </Link>
                    <ul className="offcanvas__sub_menu">
                      <li className="offcanvas__sub_menu_li">
                        <Link
                          className="offcanvas__sub_menu_item"
                          href="about.html"
                        >
                          About Us
                        </Link>
                      </li>
                      <li className="offcanvas__sub_menu_li">
                        <Link
                          className="offcanvas__sub_menu_item"
                          href="contact.html"
                        >
                          Contact Us
                        </Link>
                      </li>
                      <li className="offcanvas__sub_menu_li">
                        <Link
                          className="offcanvas__sub_menu_item"
                          href="portfolio.html"
                        >
                          Portfolio
                        </Link>
                      </li>
                      <li className="offcanvas__sub_menu_li">
                        <Link
                          className="offcanvas__sub_menu_item"
                          href="compare.html"
                        >
                          Compare Pages
                        </Link>
                      </li>
                      <li className="offcanvas__sub_menu_li">
                        <Link
                          className="offcanvas__sub_menu_item"
                          href="checkout.html"
                        >
                          Checkout page
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="offcanvas__menu_li">
                <Link className="offcanvas__menu_item" href="blog.html">
                  Blog
                </Link>
                <ul className="offcanvas__sub_menu">
                  <li className="offcanvas__sub_menu_li">
                    <Link href="blog.html" className="offcanvas__sub_menu_item">
                      Blog Grid
                    </Link>
                  </li>
                  <li className="offcanvas__sub_menu_li">
                    <Link
                      href="blog-details.html"
                      className="offcanvas__sub_menu_item"
                    >
                      Blog Details
                    </Link>
                  </li>
                  <li className="offcanvas__sub_menu_li">
                    <Link
                      href="blog-left-sidebar.html"
                      className="offcanvas__sub_menu_item"
                    >
                      Blog Left Sidebar
                    </Link>
                  </li>
                  <li className="offcanvas__sub_menu_li">
                    <Link
                      href="blog-right-sidebar.html"
                      className="offcanvas__sub_menu_item"
                    >
                      Blog Right Sidebar
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="offcanvas__menu_li">
                <Link className="offcanvas__menu_item" href="#">
                  Pages
                </Link>
                <ul className="offcanvas__sub_menu">
                  <li className="offcanvas__sub_menu_li">
                    <Link
                      href="about.html"
                      className="offcanvas__sub_menu_item"
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="offcanvas__sub_menu_li">
                    <Link
                      href="contact.html"
                      className="offcanvas__sub_menu_item"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li className="offcanvas__sub_menu_li">
                    <Link href="cart.html" className="offcanvas__sub_menu_item">
                      Cart Page
                    </Link>
                  </li>
                  <li className="offcanvas__sub_menu_li">
                    <Link
                      href="portfolio.html"
                      className="offcanvas__sub_menu_item"
                    >
                      Portfolio Page
                    </Link>
                  </li>
                  <li className="offcanvas__sub_menu_li">
                    <Link
                      href="wishlist.html"
                      className="offcanvas__sub_menu_item"
                    >
                      Wishlist Page
                    </Link>
                  </li>
                  <li className="offcanvas__sub_menu_li">
                    <Link
                      href="login.html"
                      className="offcanvas__sub_menu_item"
                    >
                      Login Page
                    </Link>
                  </li>
                  <li className="offcanvas__sub_menu_li">
                    <Link href="404.html" className="offcanvas__sub_menu_item">
                      Error Page
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="offcanvas__menu_li">
                <Link className="offcanvas__menu_item" href="about.html">
                  About
                </Link>
              </li>
              <li className="offcanvas__menu_li">
                <Link className="offcanvas__menu_item" href="contact.html">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="offcanvas__account--items">
              <Link
                className="offcanvas__account--items__btn d-flex align-items-center"
                href="login.html"
              >
                <span className="offcanvas__account--items__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20.51"
                    height="19.443"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                    />
                    <path
                      d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"
                      fill="none"
                      stroke="currentColor"
                      stroke-miterlimit="10"
                      stroke-width="32"
                    />
                  </svg>
                </span>
                <span className="offcanvas__account--items__label">
                  Login / Register
                </span>
              </Link>
            </div>
            <div className="offcanvas__account--wrapper d-flex">
              <div className="offcanvas__account--currency">
                <Link
                  className="offcanvas__account--currency__menu d-flex align-items-center text-black"
                  href="javascript:void(0)"
                >
                  <img src="assets/img/icon/usd-icon.webp" alt="currency" />
                  <span>USD</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="9.797"
                    height="6.05"
                    viewBox="0 0 9.797 6.05"
                  >
                    <path
                      d="M14.646,8.59,10.9,12.329,7.151,8.59,6,9.741l4.9,4.9,4.9-4.9Z"
                      transform="translate(-6 -8.59)"
                      fill="currentColor"
                      opacity="0.7"
                    />
                  </svg>
                </Link>
                <div className="offcanvas__account--currency__submenu">
                  <ul>
                    <li className="currency__items">
                      <Link className="currency__text" href="#">
                        CAD
                      </Link>
                    </li>
                    <li className="currency__items">
                      <Link className="currency__text" href="#">
                        CNY
                      </Link>
                    </li>
                    <li className="currency__items">
                      <Link className="currency__text" href="#">
                        EUR
                      </Link>
                    </li>
                    <li className="currency__items">
                      <Link className="currency__text" href="#">
                        GBP
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="language__currency--list">
                <Link
                  className="offcanvas__language--switcher"
                  href="javascript:void(0)"
                >
                  <span>English</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="9.797"
                    height="6.05"
                    viewBox="0 0 9.797 6.05"
                  >
                    <path
                      d="M14.646,8.59,10.9,12.329,7.151,8.59,6,9.741l4.9,4.9,4.9-4.9Z"
                      transform="translate(-6 -8.59)"
                      fill="currentColor"
                      opacity="0.7"
                    />
                  </svg>
                </Link>
                <div className="offcanvas__dropdown--language">
                  <ul>
                    <li className="language__items">
                      <Link className="language__text" href="#">
                        France
                      </Link>
                    </li>
                    <li className="language__items">
                      <Link className="language__text" href="#">
                        Russia
                      </Link>
                    </li>
                    <li className="language__items">
                      <Link className="language__text" href="#">
                        Spanish
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className="offcanvas__stikcy--toolbar">
        <ul className="d-flex justify-content-between">
          <li className="offcanvas__stikcy--toolbar__list">
            <Link className="offcanvas__stikcy--toolbar__btn" href="index.html">
              <span className="offcanvas__stikcy--toolbar__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  width="21.51"
                  height="21.443"
                  viewBox="0 0 22 17"
                >
                  <path
                    fill="currentColor"
                    d="M20.9141 7.93359c.1406.11719.2109.26953.2109.45703 0 .14063-.0469.25782-.1406.35157l-.3516.42187c-.1172.14063-.2578.21094-.4219.21094-.1406 0-.2578-.04688-.3515-.14062l-.9844-.77344V15c0 .3047-.1172.5625-.3516.7734-.2109.2344-.4687.3516-.7734.3516h-4.5c-.3047 0-.5742-.1172-.8086-.3516-.2109-.2109-.3164-.4687-.3164-.7734v-3.6562h-2.25V15c0 .3047-.11719.5625-.35156.7734-.21094.2344-.46875.3516-.77344.3516h-4.5c-.30469 0-.57422-.1172-.80859-.3516-.21094-.2109-.31641-.4687-.31641-.7734V8.46094l-.94922.77344c-.11719.09374-.24609.14062-.38672.14062-.16406 0-.30468-.07031-.42187-.21094l-.35157-.42187C.921875 8.625.875 8.50781.875 8.39062c0-.1875.070312-.33984.21094-.45703L9.73438.832031C10.1094.527344 10.5312.375 11 .375s.8906.152344 1.2656.457031l8.6485 7.101559zm-3.7266 6.50391V7.05469L11 1.99219l-6.1875 5.0625v7.38281h3.375v-3.6563c0-.3046.10547-.5624.31641-.7734.23437-.23436.5039-.35155.80859-.35155h3.375c.3047 0 .5625.11719.7734.35155.2344.211.3516.4688.3516.7734v3.6563h3.375z"
                  ></path>
                </svg>
              </span>
              <span className="offcanvas__stikcy--toolbar__label">Home</span>
            </Link>
          </li>
          <li className="offcanvas__stikcy--toolbar__list">
            <Link className="offcanvas__stikcy--toolbar__btn" href="shop.html">
              <span className="offcanvas__stikcy--toolbar__icon">
                <svg
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18.51"
                  height="17.443"
                  viewBox="0 0 448 512"
                >
                  <path d="M416 32H32A32 32 0 0 0 0 64v384a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32zm-16 48v152H248V80zm-200 0v152H48V80zM48 432V280h152v152zm200 0V280h152v152z"></path>
                </svg>
              </span>
              <span className="offcanvas__stikcy--toolbar__label">Shop</span>
            </Link>
          </li>
          <li className="offcanvas__stikcy--toolbar__list ">
            <Link
              className="offcanvas__stikcy--toolbar__btn search__open--btn"
              href="javascript:void(0)"
              data-offcanvas
            >
              <span className="offcanvas__stikcy--toolbar__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22.51"
                  height="20.443"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                    fill="none"
                    stroke="currentColor"
                    stroke-miterlimit="10"
                    stroke-width="32"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke-width="32"
                    d="M338.29 338.29L448 448"
                  />
                </svg>
              </span>
              <span className="offcanvas__stikcy--toolbar__label">Search</span>
            </Link>
          </li>
          <li className="offcanvas__stikcy--toolbar__list">
            <Link
              className="offcanvas__stikcy--toolbar__btn minicart__open--btn"
              href="javascript:void(0)"
              data-offcanvas
            >
              <span className="offcanvas__stikcy--toolbar__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22.706"
                  height="22.534"
                  viewBox="0 0 14.706 13.534"
                >
                  <g transform="translate(0 0)">
                    <g>
                      <path
                        data-name="Path 16787"
                        d="M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z"
                        transform="translate(0 -463.248)"
                        fill="currentColor"
                      />
                      <path
                        data-name="Path 16788"
                        d="M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,6.793,478.352Z"
                        transform="translate(-1.191 -466.622)"
                        fill="currentColor"
                      />
                      <path
                        data-name="Path 16789"
                        d="M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,14.566,478.352Z"
                        transform="translate(-2.875 -466.622)"
                        fill="currentColor"
                      />
                    </g>
                  </g>
                </svg>
              </span>
              <span className="offcanvas__stikcy--toolbar__label">Cart</span>
              <span className="items__count">3</span>
            </Link>
          </li>
          <li className="offcanvas__stikcy--toolbar__list">
            <Link
              className="offcanvas__stikcy--toolbar__btn"
              href="wishlist.html"
            >
              <span className="offcanvas__stikcy--toolbar__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className=" -heart"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </span>
              <span className="offcanvas__stikcy--toolbar__label">
                Wishlist
              </span>
              <span className="items__count">3</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="offCanvas__minicart">
        <div className="minicart__header ">
          <div className="minicart__header--top d-flex justify-content-between align-items-center">
            <h3 className="minicart__title"> Shopping Cart</h3>
            <button
              className="minicart__close--btn"
              aria-label="minicart close btn"
              data-offcanvas
            >
              <svg
                className="minicart__close--icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                  d="M368 368L144 144M368 144L144 368"
                />
              </svg>
            </button>
          </div>
          <p className="minicart__header--desc">
            The organic foods products are limited
          </p>
        </div>
        <div className="minicart__product">
          <div className="minicart__product--items d-flex">
            <div className="minicart__thumb">
              <Link href="product-details.html">
                <img
                  src="assets/img/product/small-product/product1.webp"
                  alt="prduct-img"
                />
              </Link>
            </div>
            <div className="minicart__text">
              <h4 className="minicart__subtitle">
                <Link href="product-details.html">Car & Motorbike Care.</Link>
              </h4>
              <span className="color__variant">
                <b>Color:</b> Beige
              </span>
              <div className="minicart__price">
                <span className="minicart__current--price">$125.00</span>
                <span className="minicart__old--price">$140.00</span>
              </div>
              <div className="minicart__text--footer d-flex align-items-center">
                <div className="quantity__box minicart__quantity">
                  <button
                    type="button"
                    className="quantity__value decrease"
                    aria-label="quantity value"
                    value="Decrease Value"
                  >
                    -
                  </button>
                  <label>
                    <input
                      type="number"
                      className="quantity__number"
                      value="1"
                      data-counter
                    />
                  </label>
                  <button
                    type="button"
                    className="quantity__value increase"
                    aria-label="quantity value"
                    value="Increase Value"
                  >
                    +
                  </button>
                </div>
                <button className="minicart__product--remove" type="button">
                  Remove
                </button>
              </div>
            </div>
          </div>
          <div className="minicart__product--items d-flex">
            <div className="minicart__thumb">
              <Link href="product-details.html">
                <img
                  src="assets/img/product/small-product/product2.webp"
                  alt="prduct-img"
                />
              </Link>
            </div>
            <div className="minicart__text">
              <h4 className="minicart__subtitle">
                <Link href="product-details.html">Engine And Drivetrain.</Link>
              </h4>
              <span className="color__variant">
                <b>Color:</b> Green
              </span>
              <div className="minicart__price">
                <span className="minicart__current--price">$115.00</span>
                <span className="minicart__old--price">$130.00</span>
              </div>
              <div className="minicart__text--footer d-flex align-items-center">
                <div className="quantity__box minicart__quantity">
                  <button
                    type="button"
                    className="quantity__value decrease"
                    aria-label="quantity value"
                    value="Decrease Value"
                  >
                    -
                  </button>
                  <label>
                    <input
                      type="number"
                      className="quantity__number"
                      value="1"
                      data-counter
                    />
                  </label>
                  <button
                    type="button"
                    className="quantity__value increase"
                    aria-label="quantity value"
                    value="Increase Value"
                  >
                    +
                  </button>
                </div>
                <button className="minicart__product--remove" type="button">
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="minicart__amount">
          <div className="minicart__amount_list d-flex justify-content-between">
            <span>Sub Total:</span>
            <span>
              <b>$240.00</b>
            </span>
          </div>
          <div className="minicart__amount_list d-flex justify-content-between">
            <span>Total:</span>
            <span>
              <b>$240.00</b>
            </span>
          </div>
        </div>
        <div className="minicart__conditions text-center">
          <input
            className="minicart__conditions--input"
            id="accept"
            type="checkbox"
          />
          <label className="minicart__conditions--label" for="accept">
            I agree with the{" "}
            <Link
              className="minicart__conditions--link"
              href="privacy-policy.html"
            >
              Privacy Policy
            </Link>
          </label>
        </div>
        <div className="minicart__button d-flex justify-content-center">
          <Link
            className="primary__btn minicart__button--link"
            href="cart.html"
          >
            View cart
          </Link>
          <Link
            className="primary__btn minicart__button--link"
            href="checkout.html"
          >
            Checkout
          </Link>
        </div>
      </div>

      <div className="predictive__search--box ">
        <div className="predictive__search--box__inner">
          <h2 className="predictive__search--title">Search Products</h2>
          <form className="predictive__search--form" action="#">
            <label>
              <input
                className="predictive__search--input"
                placeholder="Search Here"
                type="text"
              />
            </label>
            <button
              className="predictive__search--button text-white"
              aria-label="search button"
            >
              <svg
                className="product__items--action__btn--svg"
                xmlns="http://www.w3.org/2000/svg"
                width="30.51"
                height="25.443"
                viewBox="0 0 512 512"
              >
                <path
                  d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                  fill="none"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  stroke-width="32"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="32"
                  d="M338.29 338.29L448 448"
                />
              </svg>{" "}
            </button>
          </form>
        </div>
        <button
          className="predictive__search--close__btn"
          aria-label="search close"
          data-offcanvas
        >
          <svg
            className="predictive__search--close__icon"
            xmlns="http://www.w3.org/2000/svg"
            width="40.51"
            height="30.443"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
              d="M368 368L144 144M368 144L144 368"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
