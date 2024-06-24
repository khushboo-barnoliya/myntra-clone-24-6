/* eslint-disable react/jsx-key */
import { Link, useLoaderData } from "react-router-dom";
import { useContext, useEffect } from "react";
import { MyntraContext } from "../../data/myntraStore";
import '../css/App.css'


function Men() {

  useEffect(() => {
    document.title = "Men Shopping"
  }, [])


  const { addToItemShow, MAIN_ITEMS } = useContext(MyntraContext)

  return (
    <>
      <div className="container-fluid p-0 d-flex flex-column justify-content-start py-3">

        <div id="carouselExampleAutoplaying" className="carousel slide py-5" data-bs-ride="carousel">

          <div className="carousel-indicators gap-2 position-absolute bottom-0">
            <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="4" aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="5" aria-label="Slide 6"></button>
          </div>

          <div className="carousel-inner">

            <div className="carousel-item active">
              <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/4031994d-9092-4aa7-aea1-f52f2ae5194f1654006594976-Activewear_DK.jpg" className="d-block w-100" />
            </div>
            <div className="carousel-item">
              <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/27/53b4daed-cd2c-4111-86c5-14f737eceb351656325318973-Handbags_Desk.jpg" className="d-block w-100" />
            </div>
            <div className="carousel-item ">
              <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/5/18/9b94179a-9a1e-46b5-ac78-e327e26c04701716043077970-Desktop-Banner.jpg" className="d-block w-100" />
            </div>
            <div className="carousel-item">
              <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/179e278f-77ee-44c2-bf39-9f00b0cd08e01658752429301-Handbags_Desk.jpg" className="d-block w-100" />
            </div>
            <div className="carousel-item">
              <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/9be788ff-39a4-4214-99d0-fc97505aae5a1658752545685-USPA_Desk_Banner.jpg" className="d-block w-100" />
            </div>
            <div className="carousel-item">
              <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/b656a7f4-4688-4997-bb7c-54b78793981e1658752386588-Western-Wear_Desk.jpg" className="d-block w-100" />
            </div>
          </div>
        </div>

        <div>
          <div className="container-fluid p-5 px-0 my-3" id="featured-3">
            <h3 className="pb-2 px-5 fw-bold ls text-uppercase color bigHeading">biggest deals on top brands</h3>

            <div className="container p-0 my-5 d-flex justify-content-center">
              <div className="container-fluid row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-2">
                <img src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/1dce9c3e-77fa-48f1-85a3-d3c136c1d73e1598892377652-USPA.jpg" />

                <img src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/3fa337a0-c792-4038-8d12-50d463c189a11598892377363-Levis.jpg" />

                <img src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/af31285e-f6a3-426e-bbea-0aedef9da17c1598892377537-Tommy-Hilfiger.jpg" />

                <img src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/8d5afb84-a464-40af-9971-2e9f0827e9b71598892377591-UCB.jpg" />

                <img src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/a7d3676a-9694-4a84-835e-0408fdad884b1598892377407-Nike.jpg" />

                <img src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/cec595c6-c7ec-4259-af8b-997a33a09ce71598892377444-Puma.jpg" />

                <img src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/0206da63-a7cc-4f83-8527-90d7dc74706b1598892377489-Skechers.jpg" />

                <img src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/d977e7ac-67dd-4fa6-b922-fe0057385dfa1598892377205-Crocs.jpg" />


              </div>
            </div>

          </div>
        </div>


        <div>
          <h3 className="pb-2 px-5 fw-bold ls text-uppercase color text-start bigHeading">myntra fashion store</h3>
          <div className="container-fluid p-0 px-0 my-3 d-flex justify-content-center" id="featured-3">
            <div className="container-fluid p-0 my-5 row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 justify-content-center">

              {MAIN_ITEMS.map(items =>
                <div className="cardMain d-flex justify-content-center">
                  <Link to="/men/products" className="text-decoration-none" onClick={() => addToItemShow(items)} >
                    <div className="card rounded-0 border-0 mb-3 mx-auto" id="menCard">

                      <img className="card-img-top rounded-0" src={items.img} alt="Title" />

                      <div className="card-body lh-sm p-2">
                        <h6 className="card-title fw-bold heading mb-2">{items.brand}</h6>
                        <p className="card-text footLink small">{items.body}</p>
                        <div className="d-flex align-items-center gap-2">
                          <h6 className="card-title fw-bold mb-0 heading">Rs.{items.prize}</h6>
                          <small className=" text-decoration-line-through verysmall footLink">Rs. {items.originalPrice}</small>
                          <small className="discount verysmall fw-bold">(58% OFF)</small>

                        </div>
                      </div>
                    </div>
                  </Link>
                </div>)}

            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default Men;