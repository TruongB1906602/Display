
import './App.css';
import queryString from 'query-string';
function App() {
  const {name, price, description } = queryString.parse(window.location.href);
  return (
    <div className="App">
        <p>Tên sản phẩm: {name}</p>
        <p>Giá: {price}</p>
        <p>Mô tả:{description}</p>
    </div>
  );
}

export default App;
