
import './App.css';
import queryString from 'query-string';
function App() {
  const {id,name, price, description,exprire_date,img } = queryString.parse(window.location.href);
  return (
    <div className="App">
      <div>
         <a> <img src={img}/></a>
      </div> 
      <h3>Thông sản phẩm</h3>
       <div  className='infor'>
        <p>Mã SP: {id}</p>
        <p>Hạn sản xuất {exprire_date}</p>
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
