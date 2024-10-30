import { useEffect, useRef, useState } from "react";
import axios from "axios";
import ProductModal from "../../components/ProductModal";
import { Modal } from "bootstrap";

function AdminProducts(){
  const [products,setProducts] = useState([])
  const [pagination,setPagination] = useState({})

  //type 決定 modal 展開的用塗 create 是編輯 edit是新增
  const [type,setType] = useState('create')

  //編輯的時候要先把商品暫存進去，會需要一個暫存的欄位，取得當筆資料
  const [productList,setProductList] = useState({})


  const productmodal = useRef(null)
  useEffect(()=>{
    // static 點擊外面無法關閉
    productmodal.current = new Modal(document.getElementById('isproductModal'),{
      backdrop: 'static', // 設定靜態 backdrop
    });
    getProducts()
  },[])

  //取的 產品列表 api
  const getProducts = async ()=>{
    const productRes = await axios.get(`/v2/api/${process.env.REACT_APP_API_PATH}/admin/products`)
    const {products,pagination} = productRes.data
    setProducts(products)
    setPagination(pagination)
    console.log('產品',productRes)
  }  

  // 打開 Modal
  const openProductModal = (type,product) =>{
    productmodal.current.show()
    setType(type)
    setProductList(product)
  }
  // 關閉 Modal
  const closeProductModal = () =>{
    productmodal.current.hide()
  }
  return(
  <div className="p-3">
    <ProductModal closeProductModal={closeProductModal} getProducts={getProducts} type={type} productList={productList}/>
    <h3>產品列表</h3>
    <hr />
    <div className="text-end">
      <button
        type="button"
        className="btn btn-primary btn-sm"
        onClick={()=>{openProductModal('create',{})}}
      >
        建立新商品
      </button>
    </div>
    <table className="table">
      <thead>

        <tr>
          <th scope="col">分類</th>
          <th scope="col">名稱</th>
          <th scope="col">售價</th>
          <th scope="col">啟用狀態</th>
          <th scope="col">編輯</th>
        </tr>
      </thead>
      <tbody>
      {products.map((product)=>{
        return (<tr key={product.id}>
          <td>{product.category}</td>
          <td>{product.title}</td>
          <td>{product.price}</td>
          <td>{product.is_enabled ? '啟用' : '未啟用'}</td>
          <td>
            <button
              type="button"
              className="btn btn-primary btn-sm"
             onClick={()=>{openProductModal('edit',product)}}
            >
              編輯
            </button>
            <button
              type="button"
              className="btn btn-outline-danger btn-sm ms-2"
             
            >
              刪除
            </button>
          </td>
        </tr>)
      })}

      </tbody>
    </table>
    
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link disabled" href="/" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {
        [...new Array(5)].map((_, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <li className="page-item" key={`${i}_page`}>
            <a
              className={`page-link ${(i + 1 === 1) && 'active'}`}
              href="/"
            >
              {i + 1}
            </a>

          </li>
        ))
      }
        <li className="page-item">
          <a className="page-link" href="/" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>)
}

export default AdminProducts;