import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className=" container header">
        <span>TRIPS</span>
        <span>RECENTLY VIEWED</span>
        <span>BOOKINGS</span>
        <img src="images/leaderboard-holder.svg" alt="avatar" />
      </nav>

      <hr
        style={{
          width: "90%",
          marginTop: "11em",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      />

      <div className="icons">
        <div>
          <h5>Payment Information</h5>
        </div>
        <div style={{ display: "flex", gap: "4em" }}>
          <img
            src="images/Visa-Emblem.jpg"
            alt="visa-card"
            style={{ width: "30px", height: "25px" }}
          />

          <img
            src="images/paypal-logo.png"
            alt="paypal"
            style={{ width: "120px" }}
          />
        </div>
      </div>

      <div className="container middle">
        <div>
          <p className="mastercard--text" style={{ color: "#c8c8c8" }}>
            Choose your method of payment
          </p>
          <img src="images/mastercard.png" alt="mastercard" />
        </div>

        <div className="mastercard">
          <form style={{ display: "flex", gap: "2em" }}>
            <div>
              <div>
                <label className="label--text">Credit Card Number</label>
                <input
                  type="text"
                  placeholder="4566-3456-3245-6431"
                  className="form--input"
                />
              </div>
              <div style={{ paddingTop: "4em" }}>
                <label className="label--text">Security Code</label>
                <input type="text" placeholder="240" className="form--input" />
              </div>
            </div>
            <div>
              <div>
                <label className="label--text">Expiration Date</label>
                <input
                  type="text"
                  placeholder="12/24"
                  className="form--input"
                />
              </div>
              <div style={{ paddingTop: "4em" }}>
                <label className="label--text">Postal Code</label>
                <input
                  type="text"
                  placeholder="11029"
                  className="form--input"
                />
              </div>
            </div>
          </form>

          <div style={{ display: "flex", gap: "1.2em" }}>
            <img
              src="images/blue--circle.png"
              alt="circle"
              style={{ width: "18px", height: "18px", marginTop: "1.6em" }}
            />
            <p style={{ marginTop: "1em", fontSize: "1.3rem" }}>
              Use this card for next time purchase
            </p>
          </div>
          <button className="btn">Add card</button>
        </div>
      </div>
      <hr
        style={{
          width: "90%",
          marginTop: "2em",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      />

      <div
        style={{
          paddingLeft: "4.5em",
          paddingRight: "4.5em",
          paddingTop: "3em",
        }}
      >
        <div
          className="paragraph"
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingBottom: "2em",
          }}
        >
          <p>Subtotal</p>
          <p>N2,4790.00</p>
        </div>
        <div
          className="paragraph"
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingBottom: "2em",
          }}
        >
          <p>Estimated TAX</p>
          <p>N119.64</p>
        </div>
        <div
          className="paragraph"
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingBottom: "2em",
          }}
        >
          <p>
            Promotional Code:{" "}
            <span style={{ color: "#c8c8c8" }}>ZYLMNIEPF</span>
          </p>
          <p>-N60.00</p>
        </div>
      </div>
      <hr
        style={{
          width: "90%",
          marginTop: "2em",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: "4.5em",
          paddingRight: "4.5em",
          paddingTop: "3em",
        }}
      >
        <div>
          <button className="btn--2">Complete Payment</button>
        </div>
        <div style={{ fontSize: "2.5rem", fontWeight: "800" }}>
          TOTAL: N2,556.64
        </div>
      </div>
    </div>
  );
}

export default App;
