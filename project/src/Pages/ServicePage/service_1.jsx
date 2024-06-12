import feat1 from "../../assets/Product_Page/feat1.jpg";
export default function Service_1(){
    return(
    <>
        <div className="sec1-main">
            
            <div className="sec1-descp" style={{display:"flex", marginTop:"2rem"}}>

              <div className="imgg" style={{paddingLeft:"4rem"}}>
                <img src={feat1} alt="adidas" className="sec1-img" />
              </div>

              <div className="h2-heading" style={{paddingLeft:"2rem", textAlign:"justify", maxWidth:"44rem"}}>
                <h2>Expect swiftness in your stride</h2>
                <h3 style={{fontWeight:"500"}}>At the heart of the Whoosh Lite sneakers lies the ultra-responsive phylon sole that offers exceptional cushioning for every step you take. It is well complemented with a soft polyester knit upper that keeps it breezy for your feet inside, a PU molded insole that provides a soft & plush foundation with good sweat absorption performance, and a TPR bottom sole ensuring efficient grip and traction in your daily movement.</h3>
              </div>

            </div>
            </div>

            <div className="sec1-main" style={{display:"flex", marginTop:"4rem"}}>
            <div className="sec1-descp" style={{paddingLeft:"4rem", paddingRight:"3rem",textAlign:"justify", maxWidth:"40rem"}}>
                <h2>Whoosh through your day, comfortably</h2>
                <h3 style={{fontWeight:"500"}}>Can you trust a pair of sneakers to make a super long hectic day feel as smooth as a cruise ride? If they are the Whoosh Lite Sneakers, you can. Minimal in its design but loaded with structural comfort, this footwear ensures swiftness that’s akin to gliding, not just walking. If you typically spend your entire day moving, with these sneakers on, you will feel like they are carrying you from one place to another with ease.</h3>
            </div>
            <div style={{paddingRight:".1rem"}}>
            <img src={feat1} alt="adidas" className="sec1-img"/>
            </div>
            </div>
    </>);
}