
import TopBrands from "./TopBrands";
import "./newsLetter.css";

export default function NewsLetter(){
    return(
        <div id="sec5" className="section-news">
            <div id="inside1">
                <h2 style={{color:"black"}}>Subscribe to our newsletter</h2>
            </div>
            <div id="inside2" style={{marginLeft:"5rem"}}>
                <form className="form">
                    <input type="email" placeholder="Email" id="i1" className="i11"></input>
                    <input type="password" placeholder="Password" id="i13" className="i11"></input>
                    <input type="submit" value="Subscribe" id="i2"></input>
                </form>
            </div>
            
            <TopBrands></TopBrands>
        </div>
    )
}