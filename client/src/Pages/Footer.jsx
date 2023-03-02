function Footer() {
  return (
    <>
      <footer
        style={{
          paddingTop: "15px",
          backgroundColor: "#222222",
          color: "white",
        }}
      >
        <div class="container">
          <div class="row">
            <div class="col-xl-3 col-lg-4 col-md-6">
              <div>
                <h3><span style={{color:"#dc3545"}}>Red</span>Bus</h3>
                <p class="mb-30 footer-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  soluta facilis eos quia optio iusto odit atque eum tempore,
                  quisquam officiis vero veniam hic,
                </p>
              </div>
            </div>
            <div class="col-xl-2 offset-xl-1 col-lg-2 col-md-6">
              <div class="">
                <h4>Book</h4>
                <ul class="list-unstyled">
                  <li>
                    <p class="text-decoration-none">Bus Ticket</p>
                  </li>
                  <li>
                    <p class="text-decoration-none">Bus hire</p>
                  </li>
                  <li>
                    <p class="text-decoration-none">Tempo Travellers</p>
                  </li>
                  <li>
                    <p class="text-decoration-none">Car Rentals</p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6">
              <div>
                <h4>About</h4>
                <ul class="list-unstyled">
                  <li>
                    <p class="text-decoration-none">About us</p>
                  </li>
                  <li>
                    <p class="text-decoration-none">Contact us</p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6">
              <div>
                <h4>Info</h4>
                <ul class="list-unstyled">
                  <li>
                    <p>T & C</p>
                  </li>
                  <li>
                    <p>
                      <p>Privacy Policy</p>
                    </p>
                  </li>
                  <li>
                    <p>Cookie Policy</p>
                  </li>
                  <li>
                    <p>FAQ</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <div class="copyright">
              <p style={{ paddingTop: "12px" }}>
                2020 ibibogroup All rights reserved{" "}
                <p target="_blank">company</p>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;