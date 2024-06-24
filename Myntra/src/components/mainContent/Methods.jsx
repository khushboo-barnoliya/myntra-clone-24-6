

export const Recommended = () => {

    return (
        <>
            <div className="d-flex flex-column container-fluid gap-3">
                <h6 className="fw-semibold">Recommended Payment Mode</h6>
                <b>OPTIONS:</b>
                <div className="container-fluid d-flex gap-3 align-items-center">
                    <input type="radio" />

                    <div>
                        <b>123456789@axl</b>
                        <p className="m-0 text-secondary">Khushboo Barnoliya</p>

                    </div>

                    <div>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.0049 2L18.3032 4.28071C18.7206 4.41117 19.0049 4.79781 19.0049 5.23519V7H21.0049C21.5572 7 22.0049 7.44772 22.0049 8V10H9.00488V8C9.00488 7.44772 9.4526 7 10.0049 7H17.0049V5.97L11.0049 4.094L5.00488 5.97V13.3744C5.00488 14.6193 5.58406 15.7884 6.56329 16.5428L6.75154 16.6793L11.0049 19.579L14.7869 17H10.0049C9.4526 17 9.00488 16.5523 9.00488 16V12H22.0049V16C22.0049 16.5523 21.5572 17 21.0049 17L17.7848 17.0011C17.3982 17.5108 16.9276 17.9618 16.3849 18.3318L11.0049 22L5.62486 18.3318C3.98563 17.2141 3.00488 15.3584 3.00488 13.3744V5.23519C3.00488 4.79781 3.28913 4.41117 3.70661 4.28071L11.0049 2Z"></path></svg>
                    </div>

                </div>

                <button className="btn btn-danger text-uppercase fw-semibold w-100 mt-1">pay now</button>
            </div>
        </>
    )

};


export const CashOnDelivery = () => {

    return (
        <>
            <div className="container-fluid bg-secondary-subtle rounded-2 py-3 px-3">
                <h6 className="fw-bold pinkColor small mb-1">Pay On Delivery Is Not Available</h6>
                <p className="small">Pay on Delivery payment option is not available for your shipping address</p>
            </div>
        </>
    )

};


export const Upi = () => {

    return (
        <>
            <div className="d-flex flex-column container-fluid gap-3 p-0">
                <h4 className="fw-semibold">Pay using UPI</h4>
                <div className="container-fluid d-flex gap-3 align-items-center pointer">
                    <input type="radio" id="phonepe" name="upi" />

                    <label htmlFor="phonepe" className="d-flex align-items-center gap-2 pointer w-100">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="fs-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10.206 9.941h2.949v4.692c-.402.201-.938.268-1.34.268-1.072 0-1.609-.536-1.609-1.743V9.941zm13.47 4.816c-1.523 6.449-7.985 10.442-14.433 8.919C2.794 22.154-1.199 15.691.324 9.243 1.847 2.794 8.309-1.199 14.757.324c6.449 1.523 10.442 7.985 8.919 14.433zm-6.231-5.888a.887.887 0 0 0-.871-.871h-1.609l-3.686-4.222c-.335-.402-.871-.536-1.407-.402l-1.274.401c-.201.067-.268.335-.134.469l4.021 3.82H6.386c-.201 0-.335.134-.335.335v.67c0 .469.402.871.871.871h.938v3.217c0 2.413 1.273 3.82 3.418 3.82.67 0 1.206-.067 1.877-.335v2.145c0 .603.469 1.072 1.072 1.072h.938a.432.432 0 0 0 .402-.402V9.874h1.542c.201 0 .335-.134.335-.335v-.67z"></path></svg>

                        <p className="m-0 text-secondary">PhonePe</p>
                    </label>
                </div>

                <div className="container-fluid d-flex gap-3 align-items-center pointer">
                    <input type="radio" id="gpay" name="upi" />

                    <label htmlFor="gpay" className="d-flex align-items-center gap-2 pointer w-100">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" class="fs-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M105.72,215v41.25h57.1a49.66,49.66,0,0,1-21.14,32.6c-9.54,6.55-21.72,10.28-36,10.28-27.6,0-50.93-18.91-59.3-44.22a65.61,65.61,0,0,1,0-41l0,0c8.37-25.46,31.7-44.37,59.3-44.37a56.43,56.43,0,0,1,40.51,16.08L176.47,155a101.24,101.24,0,0,0-70.75-27.84,105.55,105.55,0,0,0-94.38,59.11,107.64,107.64,0,0,0,0,96.18v.15a105.41,105.41,0,0,0,94.38,59c28.47,0,52.55-9.53,70-25.91,20-18.61,31.41-46.15,31.41-78.91A133.76,133.76,0,0,0,205.38,215Zm389.41-4c-10.13-9.38-23.93-14.14-41.39-14.14-22.46,0-39.34,8.34-50.5,24.86l20.85,13.26q11.45-17,31.26-17a34.05,34.05,0,0,1,22.75,8.79A28.14,28.14,0,0,1,487.79,248v5.51c-9.1-5.07-20.55-7.75-34.64-7.75-16.44,0-29.65,3.88-39.49,11.77s-14.82,18.31-14.82,31.56a39.74,39.74,0,0,0,13.94,31.27c9.25,8.34,21,12.51,34.79,12.51,16.29,0,29.21-7.3,39-21.89h1v17.72h22.61V250C510.25,233.45,505.26,220.34,495.13,211ZM475.9,300.3a37.32,37.32,0,0,1-26.57,11.16A28.61,28.61,0,0,1,431,305.21a19.41,19.41,0,0,1-7.77-15.63c0-7,3.22-12.81,9.54-17.42s14.53-7,24.07-7C470,265,480.3,268,487.64,273.94,487.64,284.07,483.68,292.85,475.9,300.3Zm-93.65-142A55.71,55.71,0,0,0,341.74,142H279.07V328.74H302.7V253.1h39c16,0,29.5-5.36,40.51-15.93.88-.89,1.76-1.79,2.65-2.68A54.45,54.45,0,0,0,382.25,158.26Zm-16.58,62.23a30.65,30.65,0,0,1-23.34,9.68H302.7V165h39.63a32,32,0,0,1,22.6,9.23A33.18,33.18,0,0,1,365.67,220.49ZM614.31,201,577.77,292.7h-.45L539.9,201H514.21L566,320.55l-29.35,64.32H561L640,201Z"></path></svg>

                        <p className="m-0 text-secondary">GPay</p>
                    </label>
                </div>

                <button className="btn btn-danger text-uppercase fw-semibold w-100 mt-1">pay now</button>
            </div>
        </>
    )

};


export const CardPay = () => {

    return (
        <>
            <div className="container-fluid rounded-2 py-3 px-3">
                <h6 className="fw-bold small mb-3">please ensure your card can be used for online transaction</h6>
                <form action="/" className="d-flex gap-4 flex-column">

                    <div class="row">
                        <div class="col">
                            <input type="text" class="form-control payInput rounded-0" placeholder="Card Number" aria-label="First name" />
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <input type="text" class="form-control payInput rounded-0" placeholder="Name on Card" aria-label="First name" />
                        </div>
                    </div>

                    <div class="row gap-2">
                        <div class="col pe-0">
                            <input type="text" class="form-control payInput rounded-0" placeholder="Valid Thru(MM/YYYY)" aria-label="First name" />
                        </div>
                        <div class="col ps-0">
                            <input type="text" class="form-control payInput rounded-0" placeholder="CVV" aria-label="First name" />
                        </div>
                    </div>
                    <button className="btn btn-danger text-uppercase fw-semibold w-100 mt-1">pay now</button>
                </form>
            </div>
        </>
    )

};

export const Wallets = () => {

    return (
        <>
            <div className="d-flex flex-column container-fluid gap-3 p-0">
                <h4 className="fw-semibold">Pay using UPI</h4>
                <div className="container-fluid d-flex gap-3 align-items-center pointer">
                    <input type="radio" name="wallets" id="airtel" />

                    <label htmlFor="airtel" className="d-flex align-items-center gap-2 w-100">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="fs-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7.137 23.862c.79 0 1.708-.19 2.751-.554 1.55-.538 2.784-1.281 3.986-2.009l.316-.205a29.733 29.733 0 0 0 3.764-2.72 16.574 16.574 0 0 0 5.457-7.529c.395-1.138.949-3.384.268-5.487a7.117 7.117 0 0 0-2.862-3.749c-.158-.126-1.898-1.47-5.203-1.47-3.005 0-6.31 1.107-9.806 3.32l-.11.08-.317.205a20.133 20.133 0 0 0-2.309 1.693C1.585 6.813-.091 9.106.004 11.067c.031.79.427 1.534 1.075 2.008a3.472 3.472 0 0 0 2.214.68c1.803 0 3.765-.948 5.109-1.74l.253-.157.696-.443.237-.158c1.898-1.234 3.875-2.515 6.105-3.258a5.255 5.255 0 0 1 1.55-.285 3.163 3.163 0 0 1 .664.08 2.112 2.112 0 0 1 1.47 1.106c.523 1.012.396 2.61-.316 4.08a17.871 17.871 0 0 1-4.887 5.836 19.488 19.488 0 0 1-3.194 2.215l-.095.031a9.634 9.634 0 0 1-1.471.696l-.08.032-.41.158c-2.23.57-.87-1.329-.87-1.329.474-.537.98-1.028 1.518-1.502.316-.269.633-.554.933-.854l.064-.063c.395-.38.933-.902.901-1.645-.047-.98-1.075-1.582-2.056-1.613h-.063c-.95 0-1.819.522-2.404.98a7.27 7.27 0 0 0-1.598 1.74c-.6.901-1.85 3.226-.632 5.077.49.743 1.313 1.123 2.42 1.123z"></path></svg>

                        <p className="m-0 text-secondary">Airtel Payments Bank</p>
                    </label>
                </div>

                <div className="container-fluid d-flex gap-3 align-items-center pointer">
                    <input type="radio" name="wallets" id="ola" />

                    <label htmlFor="ola" className="d-flex align-items-center gap-2 w-100">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="fs-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g id="Money_Bill"><g><path d="M19.44,5.78H4.56a2.507,2.507,0,0,0-2.5,2.5v7.44a2.514,2.514,0,0,0,2.5,2.5H19.44a2.507,2.507,0,0,0,2.5-2.5V8.28A2.5,2.5,0,0,0,19.44,5.78ZM3.06,8.28a1.5,1.5,0,0,1,1.5-1.5H6.04A3.521,3.521,0,0,1,3.06,9.76Zm1.5,8.94a1.511,1.511,0,0,1-1.5-1.5V14.24a3.521,3.521,0,0,1,2.98,2.98Zm16.38-1.5a1.5,1.5,0,0,1-1.5,1.5H17.96a3.521,3.521,0,0,1,2.98-2.98Zm0-2.49a4.528,4.528,0,0,0-3.99,3.99H7.05a4.528,4.528,0,0,0-3.99-3.99V10.77A4.528,4.528,0,0,0,7.05,6.78h9.9a4.528,4.528,0,0,0,3.99,3.99Zm0-3.47a3.521,3.521,0,0,1-2.98-2.98h1.48a1.5,1.5,0,0,1,1.5,1.5Z"></path><circle cx="12.002" cy="11.998" r="2"></circle></g></g></svg>

                        <p className="m-0 text-secondary">OlaMoney (Wallet + Postpaid)</p>
                    </label>
                </div>

                <button className="btn btn-danger text-uppercase fw-semibold w-100 mt-1">pay now</button>
            </div>
        </>
    )

};


export const PayLater = () => {

    return (
        <>
            <div className="container-fluid bg-secondary-subtle rounded-2 py-3 px-3">
                <h6 className="fw-bold pinkColor small mb-1">Currently Not Eligibl For Pay Later!</h6>
            </div>
        </>
    )

};

export const NetBanking = () => {

    return (
        <>
            <div className="container-fluid bg-secondary-subtle rounded-2 py-3 px-3">
                <h6 className="fw-bold pinkColor small mb-1">Currently Net Banking Is Not Available Try On Your Second Purchase!!</h6>
            </div>
        </>
    )

};

// export { Recommended, CashOnDelivery, CardPay, Upi, Wallets, PayLater, NetBanking };