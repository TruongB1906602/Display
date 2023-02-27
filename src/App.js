
import './App.css';
import queryString from 'query-string';
function App(props) {
  const {idqrcode,name, price, description,exprire_date,image } = queryString.parse(window.location.href);
  return (
    <div className="App">
      <div>
            <img src={image} alt='#'/>
      </div> 
      <h3>Thông sản phẩm</h3>
       <div  className='infor'>
        <p>Mã SP: {idqrcode}</p>
        <p>Hạn sản xuất: {exprire_date}</p>
        <p>Tên sản phẩm: {name}</p>
        <p>Giá: {price}</p>

       </div>
      
       <div >
           <h3>Mô tả</h3>
           <p>{description}</p>


       </div>
    </div>
  );
  
}

export default App;
