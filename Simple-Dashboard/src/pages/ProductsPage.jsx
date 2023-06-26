import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import ProductRow from '../components/ProductRow'
import LoadingScreen from '../components/LoadingScreen'
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/action/actionCreator";

export default function ProductsPage() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchProducts()), []);
  const { products, loading } = useSelector(
    (state) => state.product
  );

  const { query } = useSelector(
    (state) => state.custom
  );

  return (
    <>
      <div className='mb-5 my-3'>
        {loading ? <LoadingScreen /> : (
          <>
            <div className='w-full d-flex justify-content-end  mb-3'>
              <Button className='' variant="primary"> + Add New Product</Button>
            </div>
            <Table bordered hover size="sm" className="w-100  align-items-center justify-center" style={{ fontFamily: "Poppins" }}  >
              <thead >
                <tr className="text-center bg-dark text-white py-3  px-3">
                  <th className='px-2'>No.</th>
                  <th className='px-5'> Image </th>
                  <th className='px-2'>Title</th>
                  <th className='px-3'>Stock</th>
                  <th className='px-3 '>
                    Price
                  </th>
                  <th className='px-3'>Description</th>
                  <th className='px-3 '>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className=''>
                {products?.filter((el) =>
                  el.title.toLowerCase().includes(query.toLowerCase())
                )
                  .map((product, idx) => {
                    return <ProductRow product={product} idx={idx} key={product.id} />;
                  })}
              </tbody>
            </Table>
          </>
        )}
      </div>
    </>
  )

}
