import { useEffect } from "react"
import { BsShieldFillCheck } from "react-icons/bs"
import { Link } from "react-router-dom"



function Address() {

  useEffect(() => {
    document.title = "Shipping Address"
  }, [])

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
                  <Link to="/bag/address" className="nav-link text-uppercase fw-bold fs-6 modeActive" aria-current="page" href="#">address</Link>
                </li>

                <li className="nav-item listDivider"></li>

                <li className="nav-item bagListItem">
                  <Link to="/bag/payment" className="nav-link text-uppercase fw-bold fs-6" aria-current="page" href="#">payment</Link>
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
              <div className="d-flex flex-column gap-3">


                <div className="delivery-addressAdd row row-cols-2 rounded-3 align-items-center p-3">
                  <div className="ps-0 col-8 fw-bold">Select Delivery Address</div>
                  <button className="text-uppercase col-4 float-end py-2 btn btn-sm btn-outline-primary fw-semibold">change address</button>
                </div>
                <div className="offers row row-cols-1">
                  <h6 className="text-uppercase fw-bold color">Default Address</h6>
                  <div className=" col-12 d-flex border align-items-start rounded-3 mb-1 p-3 flex-column">
                    <p className="d-flex align-items-center gap-2">
                      <input type="radio" />
                      <h6 className="mb-0 fw-bold">Customer Name</h6>
                      <span className="badge text-bg-success fw-medium">Home</span>
                    </p>
                    <p className="mb-2"><b>Address:</b> Ajmer, Rajasthan, India, 305001</p>
                    <p className="mb-2"><b>Mobile:</b> Ajmer, Rajasthan, India, 305001</p>
                    <ul>
                      <li>Pay on delivery not available</li>
                    </ul>
                    <div className="button d-flex justify-content-start gap-2">
                      <button className="btn btn-outline-danger btn-sm fw-semibold text-uppercase">remove</button>
                      <button className="btn btn-outline-success btn-sm fw-semibold text-uppercase">edit</button>
                    </div>
                  </div>
                </div>

                <div className="delivery-addressAdd row row-cols-2 rounded-3 border align-items-center py-4 px-3">
                  <p className="ps-0 col-8 fw-bold mb-0 text-danger">+ Add New Address</p>
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


                  <Link to="/bag/payment" className="btn btn-danger text-uppercase fw-semibold w-100 mt-1">Continue</Link>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Address