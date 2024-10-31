import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../../components/front/Pagination"
import { Link } from "react-router-dom";
function Products(){
  const [products,setProducts] = useState([])
  const [pagination,setPagination] = useState({})

  //取的 產品列表 api
  const getProducts = async (page = 1)=>{
    const productRes = await axios.get(`/v2/api/${process.env.REACT_APP_API_PATH}/products?page=${page}`)
    const {products,pagination} = productRes.data
    setProducts(products)
    setPagination(pagination)
    console.log('clint產品',pagination,products)
  }  

  useEffect(()=>{
    getProducts()
  },[])

  return(
    <><div className="container mt-md-5 mt-3 mb-7">
    <div className="row">
      {
        products.map((product)=>{
          return(
            <div className="col-md-3" key={product.id}>
              <div className="card border-0 mb-4 position-relative position-relative">
                <div className="img-fit-cover">
                  <img src={product.imageUrl} 
                    className="card-img-top rounded-0"
                    alt="..."
                    />
                </div>
                <div className="card-body p-0">
                  <h4 className="mb-0 mt-3"><Link to={`/product/${product.id}`}>{product.title}</Link></h4>
                  <p className="card-text text-muted mb-0">{product.content}</p>
                  <p className="text-muted mt-3">$NT {product.price}</p>
                </div>
              </div>
            </div>
          )
        })
      }


    </div>
    <div className="d-flex justify-content-center">
      <Pagination pagination={pagination} chanegePage={getProducts}/>
    </div>
  </div></>
  ) 
}

export default Products;