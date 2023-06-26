import React from "react";
import { Button, Table } from "react-bootstrap";
import ProductRow from '../components/ProductRow'

export default function ProductsPage() {

  return (
    <>
      <div className='mb-5 my-3'>
        <div className='w-full d-flex justify-content-end  mb-3'>
          <Button className='' variant="primary"> + Add New Product</Button>
        </div>
        <Table bordered hover size="sm" className="w-100  align-items-center justify-center" style={{ fontFamily: "Poppins" }}  >
          <thead >
            <tr className="text-center bg-dark text-white py-3  px-3">
              <th className='px-2'>No.</th>
              <th className='px-2'> Image </th>
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
            <ProductRow />
            <ProductRow />
            <ProductRow />
            <ProductRow />
            <ProductRow />
            <ProductRow />
            <ProductRow />
            <ProductRow />
            <ProductRow />
            <ProductRow />
            <ProductRow />
            <ProductRow />
            <ProductRow />
            <ProductRow />
            <ProductRow />
          </tbody>
        </Table>

      </div>
    </>
  )

}
