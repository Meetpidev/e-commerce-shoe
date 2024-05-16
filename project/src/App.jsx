import Header from "./common/header/header.jsx";
import ImageSlider from "./components/slider_content/slider_content.jsx";
import ProductTab from "./components/Prodect_List/ProductTab.jsx";
import First from "./assets/1.png";
import Second from "./assets/2.png";
import Third from "./assets/3.png";
import Four from "./assets/4.png";
import Discount from "./components/Discount/discount.jsx";
import NewsLetter from "./components/Monthly News Letter/newsLetter.jsx";
import Footer from "./common/footer/footer.jsx";

import "./App.css";

function App() {

  const images = [
    { url:First,title:'NIKE 1 SPORTS SHOES',subtitle:'NIKE METCON SHOES',description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio ad laudantium iste tenetur ab asperiores temporibus rerum eius autem eaque. Necessitatibus a ducimus, delectus similique mollitia reiciendis consequatur dolorem? Vitae.' },
    { url:Second,title:'NIKE 2  SPORTS SHOES',subtitle:'NIKE METCON SHOES', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio ad laudantium iste tenetur ab asperiores temporibus rerum eius autem eaque. Necessitatibus a ducimus, delectus similique mollitia reiciendis consequatur dolorem? Vitae.'},
    { url:Third,title:'NIKE 3 SPORTS SHOES',subtitle:'NIKE METCON SHOES', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio ad laudantium iste tenetur ab asperiores temporibus rerum eius autem eaque. Necessitatibus a ducimus, delectus similique mollitia reiciendis consequatur dolorem? Vitae.'},
    { url:Four,title:'NIKE 4 SPORTS SHOES',subtitle:'NIKE METCON SHOES', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio ad laudantium iste tenetur ab asperiores temporibus rerum eius autem eaque. Necessitatibus a ducimus, delectus similique mollitia reiciendis consequatur dolorem? Vitae.' },
  ];

  return (
    <>
    
    <div className="container">
    <Header></Header>
    </div>

    <div style={{width:"100%", height:"28px", padding:"0 9%",flex:"1 1 460px"}}>
    <ImageSlider slides={images}></ImageSlider> 
    </div>

    <div className="product-list">
    <h2 style={{textAlign:"center"}}>Explore the widest collection of sportswear</h2>
     <ProductTab></ProductTab>
     
    </div>

    <Discount></Discount>
    <NewsLetter></NewsLetter>
    <Footer></Footer>
    
    </>
  )
}

export default App