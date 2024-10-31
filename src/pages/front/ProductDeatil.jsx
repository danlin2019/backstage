import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function ProductDeatil(){
  const [productDetail,setProductDetail] = useState([])
  const {id} = useParams()
  console.log(id)


    //取的 產品詳細頁資訊 api
    const getProducts = async (id)=>{
      const productRes = await axios.get(`/v2/api/${process.env.REACT_APP_API_PATH}/product/${id}`)
      const {product} = productRes.data
      setProductDetail(product)
      console.log('clint產品',product)
    }  

  useEffect(()=>{
    getProducts(id)
  },[id])
  
  return(<>
  <div className="container">
      <div style={{
        minHeight: '400px', 
        backgroundImage: `url(${productDetail.imageUrl})`,
        backgroundPosition: 'center top',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
      </div>
      <div className="row justify-content-between mt-4 mb-7">
        <div className="col-md-7">
          <h2 className="mb-0">{productDetail.title}</h2>
          <p className="fw-bold">NT$ {productDetail.price}</p>
          <p>{productDetail.content}</p>
          
          

          <div className="accordion border border-bottom border-top-0 border-start-0 border-end-0 mb-3" id="accordionExample">
            <div className="card border-0">
              <div className="card-header py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0" id="headingOne" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                <div className="d-flex justify-content-between align-items-center pe-1">
                  <h4 className="mb-0">
                    {productDetail.category}
                  </h4>
                  <i className="fas fa-minus"></i>
                </div>
              </div>
              <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="card-body pb-5">
                {productDetail.description}
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="col-md-4">
          <div className="input-group mb-3 border mt-3">
            <div className="input-group-prepend">
              <button className="btn btn-outline-dark rounded-0 border-0 py-3" type="button" id="button-addon1">
                <i className="fas fa-minus"></i>
              </button>
            </div>
            <input type="text" className="form-control border-0 text-center my-auto shadow-none" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" defaultValue="1" />
            <div className="input-group-append">
              <button className="btn btn-outline-dark rounded-0 border-0 py-3" type="button" id="button-addon2">
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>
          <a href="./checkout.html" className="btn btn-dark btn-block rounded-0 py-3">Lorem ipsum</a>
        </div>
      </div>
    </div>
    
  </>)
}

export default ProductDeatil;