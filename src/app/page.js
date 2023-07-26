import React from "react";
import Image from "next/image";
import Link from "next/link";

const Home = async () => {
  var options = {
    method: "GET",
    url: process.env.RAPID_KEY,
    headers: {},
  };
  const res = await fetch(options);
  const data = await res.json();

  return (
    <main className="main__content_wrapper">
      <section className="hero__slider--section">
        <div className="hero__slider--inner hero__slider--activation swiper">
          <div className="hero__slider--wrapper swiper-wrapper">
            <div className="swiper-slide ">
              <div className="hero__slider--items style4 slider4__items--bg1">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-7 col-md-7">
                      <div className="slider__content style4">
                        <span className="slider__subtitle style4">
                          Get up to 50% off Today Only!
                        </span>
                        <h2 className="slider__maintitle style4 h1">
                          Winter Sale For{" "}
                          <span className="text__secondary">Auto Parts</span>
                        </h2>
                        <p className="slider__desc style4">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad,{" "}
                        </p>
                        <Link className="primary__btn slider__btn" href="#">
                          Shop now
                          <svg
                            width="12"
                            height="8"
                            viewBox="0 0 12 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.8335 3.6178L8.26381 0.157332C8.21395 0.107774 8.1532 0.0681771 8.08544 0.0410843C8.01768 0.0139915 7.94441 0 7.87032 0C7.79624 0 7.72297 0.0139915 7.65521 0.0410843C7.58745 0.0681771 7.5267 0.107774 7.47684 0.157332C7.37199 0.262044 7.31393 0.39827 7.31393 0.539537C7.31393 0.680805 7.37199 0.817024 7.47684 0.921736L10.0943 3.45837H0.55625C0.405122 3.46829 0.26375 3.52959 0.160556 3.62994C0.057363 3.73029 0 3.86225 0 3.99929C0 4.13633 0.057363 4.26829 0.160556 4.36864C0.26375 4.46899 0.405122 4.53029 0.55625 4.54021H10.0927L7.47527 7.07826C7.37042 7.18298 7.31235 7.3192 7.31235 7.46047C7.31235 7.60174 7.37042 7.73796 7.47527 7.84267C7.52513 7.89223 7.58588 7.93182 7.65364 7.95892C7.7214 7.98601 7.79467 8 7.86875 8C7.94284 8 8.0161 7.98601 8.08386 7.95892C8.15162 7.93182 8.21238 7.89223 8.26223 7.84267L11.8335 4.38932C11.9406 4.28419 12 4.14649 12 4.00356C12 3.86063 11.9406 3.72293 11.8335 3.6178V3.6178Z"
                              fill="currentColor"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hero__slider--layer__style4">
                  <Image
                    className="slider__layer--img "
                    src="/img/slider/home4-slider1-layer.webp"
                    alt="slider-img"
                  />
                </div>
              </div>
            </div>
            <div className="swiper-slide ">
              <div className="hero__slider--items style4 slider4__items--bg1">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-7 col-md-7">
                      <div className="slider__content style4">
                        <span className="slider__subtitle style4">
                          Get up to 50% off Today Only!
                        </span>
                        <h2 className="slider__maintitle style4 h1">
                          Winter Sale For{" "}
                          <span className="text__secondary">Auto Parts</span>
                        </h2>
                        <p className="slider__desc style4">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad,{" "}
                        </p>
                        <Link className="primary__btn slider__btn" href="#">
                          Shop now
                          <svg
                            width="12"
                            height="8"
                            viewBox="0 0 12 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.8335 3.6178L8.26381 0.157332C8.21395 0.107774 8.1532 0.0681771 8.08544 0.0410843C8.01768 0.0139915 7.94441 0 7.87032 0C7.79624 0 7.72297 0.0139915 7.65521 0.0410843C7.58745 0.0681771 7.5267 0.107774 7.47684 0.157332C7.37199 0.262044 7.31393 0.39827 7.31393 0.539537C7.31393 0.680805 7.37199 0.817024 7.47684 0.921736L10.0943 3.45837H0.55625C0.405122 3.46829 0.26375 3.52959 0.160556 3.62994C0.057363 3.73029 0 3.86225 0 3.99929C0 4.13633 0.057363 4.26829 0.160556 4.36864C0.26375 4.46899 0.405122 4.53029 0.55625 4.54021H10.0927L7.47527 7.07826C7.37042 7.18298 7.31235 7.3192 7.31235 7.46047C7.31235 7.60174 7.37042 7.73796 7.47527 7.84267C7.52513 7.89223 7.58588 7.93182 7.65364 7.95892C7.7214 7.98601 7.79467 8 7.86875 8C7.94284 8 8.0161 7.98601 8.08386 7.95892C8.15162 7.93182 8.21238 7.89223 8.26223 7.84267L11.8335 4.38932C11.9406 4.28419 12 4.14649 12 4.00356C12 3.86063 11.9406 3.72293 11.8335 3.6178V3.6178Z"
                              fill="currentColor"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hero__slider--layer__style4 style__right">
                  <Image
                    className="slider__layer--img "
                    src="/img/slider/home4-slider2-layer.webp"
                    alt="slider-img"
                  />
                </div>
              </div>
            </div>
            <div className="swiper-slide ">
              <div className="hero__slider--items style4 slider4__items--bg1">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-7 col-md-7">
                      <div className="slider__content style4">
                        <span className="slider__subtitle style4">
                          Get up to 50% off Today Only!
                        </span>
                        <h2 className="slider__maintitle style4 h1">
                          Winter Sale For{" "}
                          <span className="text__secondary">Auto Parts</span>
                        </h2>
                        <p className="slider__desc style4">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad,{" "}
                        </p>
                        <Link className="primary__btn slider__btn" href="#">
                          Shop now
                          <svg
                            width="12"
                            height="8"
                            viewBox="0 0 12 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.8335 3.6178L8.26381 0.157332C8.21395 0.107774 8.1532 0.0681771 8.08544 0.0410843C8.01768 0.0139915 7.94441 0 7.87032 0C7.79624 0 7.72297 0.0139915 7.65521 0.0410843C7.58745 0.0681771 7.5267 0.107774 7.47684 0.157332C7.37199 0.262044 7.31393 0.39827 7.31393 0.539537C7.31393 0.680805 7.37199 0.817024 7.47684 0.921736L10.0943 3.45837H0.55625C0.405122 3.46829 0.26375 3.52959 0.160556 3.62994C0.057363 3.73029 0 3.86225 0 3.99929C0 4.13633 0.057363 4.26829 0.160556 4.36864C0.26375 4.46899 0.405122 4.53029 0.55625 4.54021H10.0927L7.47527 7.07826C7.37042 7.18298 7.31235 7.3192 7.31235 7.46047C7.31235 7.60174 7.37042 7.73796 7.47527 7.84267C7.52513 7.89223 7.58588 7.93182 7.65364 7.95892C7.7214 7.98601 7.79467 8 7.86875 8C7.94284 8 8.0161 7.98601 8.08386 7.95892C8.15162 7.93182 8.21238 7.89223 8.26223 7.84267L11.8335 4.38932C11.9406 4.28419 12 4.14649 12 4.00356C12 3.86063 11.9406 3.72293 11.8335 3.6178V3.6178Z"
                              fill="currentColor"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hero__slider--layer__style4 style__right">
                  <Image
                    className="slider__layer--img "
                    src="/img/slider/home4-slider3-layer.webp"
                    alt="slider-img"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="slider__pagination swiper-pagination"></div>
        </div>
      </section>
      <section className="banner__section section--padding pt-0">
        <div className="container">
          <div className="row mb--n30">
            <div className="col-lg-6 col-md-6 mb-30">
              <div className="banner__items position__relative">
                <Link className="banner__thumbnail display-block" href="#">
                  <Image
                    className="banner__thumbnail--img"
                    src="/img/banner/banner16.webp"
                    alt="banner-img"
                  />
                  <div className="banner__content--style4">
                    <span className="banner__content--style4__badge">
                      Mega Sale
                    </span>
                    <h2 className="banner__content--style4__title font__style">
                      HELIX ENGINE <span> FUILS</span>
                    </h2>
                    <div className="banner__price--style4">
                      <span className="current__price">$239.52</span>
                      <span className="old__price"> $362.00</span>
                    </div>
                    <span className="banner__content--style4__btn primary__btn">
                      Shop now
                      <svg
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.8335 3.6178L8.26381 0.157332C8.21395 0.107774 8.1532 0.0681771 8.08544 0.0410843C8.01768 0.0139915 7.94441 0 7.87032 0C7.79624 0 7.72297 0.0139915 7.65521 0.0410843C7.58746 0.0681771 7.5267 0.107774 7.47684 0.157332C7.37199 0.262044 7.31393 0.39827 7.31393 0.539537C7.31393 0.680805 7.37199 0.817024 7.47684 0.921736L10.0943 3.45837H0.55625C0.405122 3.46829 0.26375 3.52959 0.160556 3.62994C0.057363 3.73029 0 3.86225 0 3.99929C0 4.13633 0.057363 4.26829 0.160556 4.36864C0.26375 4.46899 0.405122 4.53029 0.55625 4.54021H10.0927L7.47527 7.07826C7.37042 7.18298 7.31235 7.3192 7.31235 7.46047C7.31235 7.60174 7.37042 7.73796 7.47527 7.84267C7.52513 7.89223 7.58588 7.93182 7.65364 7.95892C7.7214 7.98601 7.79467 8 7.86875 8C7.94284 8 8.0161 7.98601 8.08386 7.95892C8.15162 7.93182 8.21238 7.89223 8.26223 7.84267L11.8335 4.38932C11.9406 4.28419 12 4.14649 12 4.00356C12 3.86063 11.9406 3.72293 11.8335 3.6178Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 mb-30">
              <div className="banner__items position__relative">
                <Link className="banner__thumbnail display-block" href="#">
                  <Image
                    className="banner__thumbnail--img"
                    src="/img/banner/banner17.webp"
                    alt="banner-img"
                  />
                  <div className="banner__content--style4">
                    <span className="banner__content--style4__subtitle">
                      Starting at <span>$79.9</span>
                    </span>
                    <h2 className="banner__content--style4__title font__style">
                      <span>MOST</span> ESSENTIALS
                    </h2>
                    <h3 className="banner__content--style4__title2 font__style2">
                      SHOP AND SAVE BIG
                    </h3>
                    <span className="banner__content--style4__btn primary__btn">
                      Shop now
                      <svg
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.8335 3.6178L8.26381 0.157332C8.21395 0.107774 8.1532 0.0681771 8.08544 0.0410843C8.01768 0.0139915 7.94441 0 7.87032 0C7.79624 0 7.72297 0.0139915 7.65521 0.0410843C7.58746 0.0681771 7.5267 0.107774 7.47684 0.157332C7.37199 0.262044 7.31393 0.39827 7.31393 0.539537C7.31393 0.680805 7.37199 0.817024 7.47684 0.921736L10.0943 3.45837H0.55625C0.405122 3.46829 0.26375 3.52959 0.160556 3.62994C0.057363 3.73029 0 3.86225 0 3.99929C0 4.13633 0.057363 4.26829 0.160556 4.36864C0.26375 4.46899 0.405122 4.53029 0.55625 4.54021H10.0927L7.47527 7.07826C7.37042 7.18298 7.31235 7.3192 7.31235 7.46047C7.31235 7.60174 7.37042 7.73796 7.47527 7.84267C7.52513 7.89223 7.58588 7.93182 7.65364 7.95892C7.7214 7.98601 7.79467 8 7.86875 8C7.94284 8 8.0161 7.98601 8.08386 7.95892C8.15162 7.93182 8.21238 7.89223 8.26223 7.84267L11.8335 4.38932C11.9406 4.28419 12 4.14649 12 4.00356C12 3.86063 11.9406 3.72293 11.8335 3.6178Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product__section section--padding pt-0">
        <div className="container">
          <div className="section__heading section__heading--flex border-bottom d-flex justify-content-between mb-30">
            <h2 className="section__heading--maintitle">
              Popular <span>Products</span>
            </h2>
          </div>
          <div className="product__section--inner">
            <div className="tab-content" id="nav-tabContent">
              <div
                id="recent"
                className="tab-pane fade show active"
                role="tabpanel"
              >
                <div className="product__wrapper">
                  <div className="row mb--n30">
                    {data.map((element) => (
                      <div
                        key={element.id}
                        className="col-lg-3 col-md-4 col-sm-6 col-6 custom-col mb-30"
                      >
                        <article className="product__card">
                          <div className="product__card--thumbnail">
                            <Link
                              className="product__card--thumbnail__link display-block"
                              href={`/details/${element.id}`}
                            >
                              <Image
                                className="product__card--thumbnail__img product__primary--img"
                                src={element.avatar}
                                alt="product-img"
                              />

                              <Image
                                className="product__card--thumbnail__img product__secondary--img"
                                src={element.avatar}
                                alt="product-img"
                              />
                            </Link>
                          </div>
                          <div className="product__card--content">
                            <ul className="rating product__card--rating d-flex">
                              <li className="rating__list">
                                <span className="rating__icon">
                                  <svg
                                    width="14"
                                    height="13"
                                    viewBox="0 0 14 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </span>
                              </li>
                              <li className="rating__list">
                                <span className="rating__icon">
                                  <svg
                                    width="14"
                                    height="13"
                                    viewBox="0 0 14 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </span>
                              </li>
                              <li className="rating__list">
                                <span className="rating__icon">
                                  <svg
                                    width="14"
                                    height="13"
                                    viewBox="0 0 14 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </span>
                              </li>
                              <li className="rating__list">
                                <span className="rating__icon">
                                  <svg
                                    width="14"
                                    height="13"
                                    viewBox="0 0 14 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M12.4141 4.53125L8.99219 4.03906L7.44531 0.921875C7.1875 0.382812 6.39062 0.359375 6.10938 0.921875L4.58594 4.03906L1.14062 4.53125C0.53125 4.625 0.296875 5.375 0.742188 5.82031L3.20312 8.23438L2.61719 11.6328C2.52344 12.2422 3.17969 12.7109 3.71875 12.4297L6.78906 10.8125L9.83594 12.4297C10.375 12.7109 11.0312 12.2422 10.9375 11.6328L10.3516 8.23438L12.8125 5.82031C13.2578 5.375 13.0234 4.625 12.4141 4.53125ZM9.53125 7.95312L10.1875 11.75L6.78906 9.96875L3.36719 11.75L4.02344 7.95312L1.25781 5.28125L5.07812 4.71875L6.78906 1.25L8.47656 4.71875L12.2969 5.28125L9.53125 7.95312Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </span>
                              </li>
                              <li className="rating__list">
                                <span className="rating__icon">
                                  <svg
                                    width="14"
                                    height="13"
                                    viewBox="0 0 14 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M12.4141 4.53125L8.99219 4.03906L7.44531 0.921875C7.1875 0.382812 6.39062 0.359375 6.10938 0.921875L4.58594 4.03906L1.14062 4.53125C0.53125 4.625 0.296875 5.375 0.742188 5.82031L3.20312 8.23438L2.61719 11.6328C2.52344 12.2422 3.17969 12.7109 3.71875 12.4297L6.78906 10.8125L9.83594 12.4297C10.375 12.7109 11.0312 12.2422 10.9375 11.6328L10.3516 8.23438L12.8125 5.82031C13.2578 5.375 13.0234 4.625 12.4141 4.53125ZM9.53125 7.95312L10.1875 11.75L6.78906 9.96875L3.36719 11.75L4.02344 7.95312L1.25781 5.28125L5.07812 4.71875L6.78906 1.25L8.47656 4.71875L12.2969 5.28125L9.53125 7.95312Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </span>
                              </li>
                              <li>
                                <span className="rating__review--text">
                                  (126) Review
                                </span>
                              </li>
                            </ul>
                            <h3 className="product__card--title">
                              <Link href={`/details/${element.id}`}>
                                {element.name}
                              </Link>
                            </h3>
                            <div className="product__card--price">
                              <span className="current__price">
                                Rs. {element.price}
                              </span>
                            </div>
                            <div className="product__card--footer"></div>
                          </div>
                        </article>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
