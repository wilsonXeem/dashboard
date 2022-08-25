import React, { useRef } from "react";
import { FaBitcoin, FaDollarSign, FaEthereum } from "react-icons/fa";

export default function Deposit() {
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    e.target.focus();
  }
  return (
    <div>
      <h3
        style={{
          padding: "5px 1rem",
          backgroundColor: "black",
          color: "white",
        }}
      >
        Deposit Funds
      </h3>
      <div className="deposit">
        <h3>Packages:</h3>
        <div className="packages">
          <div className="package">
            <h5>Bronze</h5>
            <p>$1000-$9,999</p>
            <p>
              10% Biweekly ROI <br /> 10% Referral commission
            </p>
          </div>
          <div className="package">
            <h5>Silver</h5>
            <p>$10,000-$24,999</p>
            <p>
              15% Biweekly ROI <br /> 10% Referral commission
            </p>
          </div>
          <div className="package">
            <h5>Gold</h5>
            <p>$25,000-above</p>
            <p>
              20% Biweekly ROI <br /> 10% Referral commission
            </p>
          </div>
        </div>
        <div>
          <br />
          <br />
          <h4>Payment can be made through:</h4>
          <div className="pm">
            <div className="pmi">
              <FaBitcoin size={100} />
              <h4>BITCOIN</h4>
              <div style={{ display: "flex" }}>
                <form>
                  <input
                    className="input"
                    ref={textAreaRef}
                    value="bc1qxfvzdap4q3ukjplqamcz46zk3u4ak9apndwgz4"
                    readOnly
                  />
                </form>
                {document.queryCommandSupported("copy") && (
                  <div>
                    <button className="b" onClick={copyToClipboard}>
                      Copy
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="pmi">
              <FaEthereum size={100} />
              <h4>ETHEREUM</h4>
              <div style={{ display: "flex" }}>
                <form>
                  <input
                    className="input"
                    ref={textAreaRef}
                    value="0x3354c55D9e84e5B8BA3c1963AD1821eF8A4a27aC"
                    readOnly
                  />
                </form>
                {document.queryCommandSupported("copy") && (
                  <div>
                    <button className="b" onClick={copyToClipboard}>
                      Copy
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="pmi">
              <FaDollarSign size={100} />
              <h4>USDT</h4>
              <div style={{ display: "flex" }}>
                <form>
                  <input
                    className="input"
                    ref={textAreaRef}
                    value="1FK4TJqJ9EGH5QYfafcJDpJ6TfVjC9EyM5"
                    readOnly
                  />
                </form>
                {document.queryCommandSupported("copy") && (
                  <div>
                    <button className="b" onClick={copyToClipboard}>
                      Copy
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <br />
          <i style={{ color: "red" }}>
            Contact our agent after payment for funding to reflect.
          </i>
        </div>
      </div>
    </div>
  );
}
