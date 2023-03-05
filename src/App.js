
import './App.css';
import queryString from 'query-string';

function App() {
  const {idcode,id,name, price, description,exprire_date,image, category } = queryString.parse(window.location.href);
  return (
    <div className="App">
      <div className="check">
            <img src="https://cdn-icons-png.flaticon.com/512/9709/9709605.png" alt='#'/>
            <h4>SẢN PHẨM CHÍNH HÃNG</h4>
            <p> Xin cảm ơn bạn đã mua hàng</p>
      </div> 
      <h3>Thông sản phẩm</h3>
      <div className='container'>
        <img 
        src={image} alt='#'/>
        <div  className='infor'>
          <p>Mã sản phẩm:{id}</p>
          <p>Tên sản phẩm:{name}</p>
          <p>Hạn sử dụng:{exprire_date}</p>
          <p>Giá cả: {price}</p>
          <p>Loại sản phẩm:{category}</p>

        </div>
      </div>
      
       <div className='description'>
           <h3>Mô tả</h3>
           <p>{description}</p>
      
       </div>

    </div>
  );
  
}

export default App;
