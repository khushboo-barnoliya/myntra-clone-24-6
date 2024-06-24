import "../../css/App.css"
import { GoStar } from "react-icons/go";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa6";
import { IoMdCard } from "react-icons/io";
import { IoWalletOutline } from "react-icons/io5";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { RiBankFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsShieldFillCheck } from "react-icons/bs";
import { Recommended } from "../Methods";
import { CashOnDelivery } from "../Methods";
import { Upi } from "../Methods";
import { CardPay } from "../Methods";
import { Wallets } from "../Methods";
import { PayLater } from "../Methods";
import { NetBanking } from "../Methods";

function BagPayment() {


  useEffect(() => {
    document.title = "Payment Method"
  }, [])

  const [paymode, setPaymode] = useState("rec")

  return (
    <>

      <div className="container-fluid p-0 py-4">
        <nav className="navbar navbar-expand-lg bg-white">

          <div className="container-fluid d-flex justify-content-between align-items-center px-5 border-bottom pb-4">
            <h4 className="fw-bold">Shopping Bag</h4>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">

              <ul className="navbar-nav mb-2 mb-lg-0 align-items-center" id="bagList">

                <li className="nav-item bagListItem">
                  <Link to="/bag" className="nav-link text-uppercase fw-bold fs-6" aria-current="page" href="#">bag</Link>
                </li>

                <li className="nav-item listDivider"></li>

                <li className="nav-item bagListItem">
                  <Link to="/bag/address" className="nav-link text-uppercase fw-bold fs-6" aria-current="page" href="#">address</Link>
                </li>

                <li className="nav-item listDivider"></li>

                <li className="nav-item bagListItem">
                  <Link to="/bag/payment" className="nav-link text-uppercase fw-bold fs-6 modeActive" aria-current="page" href="#">payment</Link>
                </li>

              </ul>

            </div>


            <div className="d-flex align-items-center gap-2 justify-content-center secure">
              <BsShieldFillCheck color="#14958F" size={30} />
              <span className=" text-uppercase">100 % secure</span>
            </div>
          </div>
        </nav>

      </div>

      <div className="container-fluid">
        <div className="container col-xxl-8 px-4">
          <div className="row flex-lg-row g-4 py-3">
            <div className="col-10 col-sm-8 col-lg-6">


              <div className="container-fluid">
                <h5 className="fw-bold">Choose payment mode</h5>

                <div className="container-fluid col-12 p-0 d-flex border border-secondary-subtle">
                  <div className="leftPay col-5">
                    <div className="payModes">
                      <ul className="list-group">

                        <li onClick={() => setPaymode("rec")} className={`list-group-item payNonActive pointer py-3 d-flex px-2 align-items-center fw-bold border-start-0 rounded-0 bgPayGrey border-secondary-subtle border-top-0 border-end ${paymode === "rec" ? "payActive" : ""}`}>
                          <GoStar className="me-2" color="black" />
                          <span className="small">Recommended</span>
                        </li>
                        <li onClick={() => setPaymode("cash")} className={`list-group-item payNonActive pointer py-3  d-flex px-2 align-items-center fw-bold border-start-0 rounded-0 bgPayGrey border-secondary-subtle border-end ${paymode === "cash" ? "payActive" : ""}`}>
                          <FaRegMoneyBillAlt className="me-2" color="black" />
                          <span className="small">Cash On Delivery (Cash/UPI)</span>
                        </li>
                        <li onClick={() => setPaymode("upi")} className={`list-group-item payNonActive pointer py-3  d-flex px-2 align-items-center fw-bold border-start-0 rounded-0 bgPayGrey border-secondary-subtle border-end ${paymode === "upi" ? "payActive" : ""}`}>
                          <IoMdCard className="me-2" color="black" />
                          <span className="small">UPI (Pay via any App)</span>
                        </li>
                        <li onClick={() => setPaymode("card")} className={`list-group-item payNonActive pointer py-3  d-flex px-2 align-items-center fw-bold border-start-0 rounded-0 bgPayGrey border-secondary-subtle border-end ${paymode === "card" ? "payActive" : ""}`}>
                          <FaRegCreditCard className="me-2" color="black" />
                          <span className="small">Credit/Debit Card</span>
                        </li>
                        <li onClick={() => setPaymode("wallet")} className={`list-group-item payNonActive pointer py-3  d-flex px-2 align-items-center fw-bold border-start-0 rounded-0 bgPayGrey border-secondary-subtle border-start-0 border-end ${paymode === "wallet" ? "payActive" : ""}`}>
                          <IoWalletOutline className="me-2" color="black" />
                          <span className="small">Wallets</span>
                        </li>
                        <li onClick={() => setPaymode("paylater")} className={`list-group-item payNonActive pointer py-3  d-flex px-2 align-items-center fw-bold border-start-0 rounded-0 bgPayGrey border-secondary-subtle border-start-0 border-end ${paymode === "paylater" ? "payActive" : ""}`}>
                          <RiMoneyRupeeCircleLine className="me-2" color="black" />
                          <span className="small">Pay Later</span>
                        </li>
                        <li onClick={() => setPaymode("net")} className={`list-group-item payNonActive py-3 pointer  d-flex px-2 align-items-center fw-bold border-bottom-0 rounded-0 bgPayGrey border-secondary-subtle border-start-0 border-end ${paymode === "net" ? "payActive" : ""}`}>
                          <RiBankFill className="me-2" color="black" />
                          <span className="small">Net Banking</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="rightPay p-3 col-7">
                    {paymode === "rec" && <Recommended />}
                    {paymode === "cash" && <CashOnDelivery />}
                    {paymode === "upi" && <Upi />}
                    {paymode === "card" && <CardPay />}
                    {paymode === "wallet" && <Wallets />}
                    {paymode === "paylater" && <PayLater />}
                    {paymode === "net" && <NetBanking />}
                  </div>
                </div>
              </div>

            </div>


            <div className="col-lg-6">
              <div className="container-fluid p-0 priceMainAdd border-start border-secondary-subtle p-3">
                <h6 className="text-uppercase color fw-bold">delivery estimates</h6>

                <div className="pb-3 px-2">
                  <div key="" className="row align-items-center">
                    <img src="" alt="" className="col-2" />
                    <span className="mb-0 col-9 px-0">Estimated Delivery By: <b className="ms-1">Mon, May 27 2024</b></span>
                  </div>


                </div>









                <div className="price-details pt-3">
                  <h6 className="text-uppercase fw-bold">price deatils: <span className="text-capitalize ms-2">(1 item)</span></h6>

                  <div className="totalPrice border-bottom py-3">

                    {/* MRP */}
                    <span className="d-flex justify-content-between align-items-center fw-normal mb-1">
                      <span>Total MRP</span>
                    </span>

                    {/* SWD */}
                    <span className="d-flex justify-content-between align-items-center fw-normal mb-1">
                      <span>Social Work Donation</span>
                      <span>Rs. 10</span>
                    </span>

                    {/* Platform fee */}
                    <span className="d-flex justify-content-between align-items-center fw-normal mb-1">
                      <span>Platform Fee</span>
                      <span>Rs. 20</span>
                    </span>

                    {/* Shipping fee */}
                    <span className="d-flex justify-content-between align-items-center fw-normal mb-1">
                      <span>Shipping Fee</span>
                      <span>FREE</span>
                    </span>

                  </div>

                  <div className="totalAmount d-flex justify-content-between align-items-center my-2">
                    <span className="text-capitalize"><b>total amount</b></span>
                    <span><b>Rs. 1979</b></span>
                  </div>


                  <button className="btn btn-danger text-uppercase fw-semibold w-100 mt-1">Continue</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default BagPayment