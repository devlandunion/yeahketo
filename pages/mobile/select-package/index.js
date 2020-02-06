import React from "react"

import Head from "next/head"
import styles from "../../../styles/mobile/select-package/style"
import products from "../../../products/products.js"
import Link from "next/link"
import { connect } from "react-redux"
import { addOrder } from "../../../redux/actions/postOrder.js"
const mocksForProducts = products.slice(0, 3)
import Footer from "../../../components/mobile/Footer/footer"
function SelectPackage({ addOrder }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=640, user-scalable=0" />
        <title>Select Package</title>
      </Head>
      <style jsx>{styles}</style>
      <div id="__next">
        <div id="container">
          <img
            src="https://yeahketo.com/static/promo/mobile/images/images/top-img.jpg"
            alt="top"
            className="img-resp"
          />
          <p className="chk-toptxt1 chk-toptxt1-bdr">SELECT YOUR PACKAGE</p>
          <div className="clearall"></div>

          {mocksForProducts.map(el => (
            <div className="slct-box1" key={el.id}>
              <div className="slct-mid">
                <p className="seclt-txt1">
                  Buy {el.bottlesQuantity} Bottles
                  {el.freeQuantity > 0 ? (
                    <span> + Get {el.freeQuantity} FREE</span>
                  ) : null}
                </p>
              </div>
              <img src={el.img} alt="pack" className="pack1-prod" />
              <p className="seclt-txt2">{el.selectPackageLabel}</p>
              <div className="select-mid-sec">
                <p className="seclt-reg-txt">
                  REGULAR &nbsp;
                  <span>
                    {el.regularPrice + el.subRegularPrice}
                    <img
                      src="https://yeahketo.com/static/promo/mobile/images/images/cut-line.png"
                      alt="pack cut"
                    />
                  </span>
                </p>
                <div className="p5-pkgchk">
                  <p className="prc-details-txt1">{el.productPrice + el.subProductPrice}</p>
                  <p className="prc-details-txt2">/ea</p>
                </div>
                <p className="s-mid-txt2">You Save: ${el.youSavePrice + el.subSavePrice}</p>
                <p className="s-mid-txt3">FREE SHIPPING</p>
                <div className="link-container-5">
                  <Link href="/mobile/payment">
                    <img
                      alt="select pack"
                      onClick={() => addOrder(el.id)}
                      src="https://yeahketo.com/static/promo/mobile/images/images/select-btn2.png"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <section className="Footer">
        <Footer />
      </section>
      <div id="__next-error"></div>{" "}
    </>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    addOrder: obj => dispatch(addOrder(obj)),
  }
}

export default connect(
  null,
  mapDispatchToProps
)(SelectPackage)
