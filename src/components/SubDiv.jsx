import style4 from "./SubDiv.module.css";
export function SubDiv() {
  const arr = [
    {
      logo: "",
      title: "Bitcoin($btc)",
      key: "khkagfsahfigoafigwhfbasf"
    },
    {
      logo: "",
      title: "Ripple($xrp)",
      key: "gcisgighvwghjioeojo"
    },
    {
      logo: "",
      title: "Dogecoin($doge)",
      key: "qyhfwglahnvlshzoanbhbishiwhl"
    }
  ];
  return arr.map((ele) => {
    return (
      <div className={`${style4.backColorWhite}`}>
        {ele.logo}{" "}
        <span>
          <h6 style={{ margin: "0px", padding: "0px" }}>{ele.title}</h6>
          <p style={{ margin: "0px", padding: "0px" }}>{ele.key}</p>
        </span>
        <button>Copy address</button>
        <button>Qr code</button>
      </div>
    );
  });
}
