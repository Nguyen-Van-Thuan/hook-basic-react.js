import React, { useMemo } from 'react'
import { useState } from 'react'
import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap'

const Context = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [products, setProducts] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
    setProducts([...products, {
      name,
      price: +price
    }])
  }

  // const total = products.reduce((result, product) => {
  //   console.log("tinh toan lai");
  //   return (result + product.price)
  // }, 0)

  const total = useMemo(() => {
    const result = products.reduce((result, product) => {
      console.log("tinh toan lai");
      return (result + product.price)
    }, 0)
    return result
  }, [products])

  return (
    <div className='container mt-4'>
      <>
        <h1>Form ReactStrap</h1>
        <Form onSubmit={handleSubmit}>
          <FormGroup floating>
            <Input
              name="Name"
              placeholder="name"
              type="text"
              bsSize="sm"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <Label for="exampleEmail">
              Name
            </Label>
          </FormGroup>
          {' '}
          <FormGroup floating>
            <Input
              name="price"
              placeholder="price"
              type="text"
              value={price}
              onChange={e => setPrice(e.target.value)}

            />
            <Label for="examplePassword">
              Price
            </Label>
          </FormGroup>
          {' '}
          <Button>
            Submit
          </Button>
        </Form>
        <Table className='mt-5'>
          <thead>
            <tr>
              <th>
                Name
              </th>
              <th>
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {products && products.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    {item.name}
                  </td>
                  <td>
                    {item.price}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
        <h3>Total: {total}</h3>
      </>
    </div>
  )
}

export default Context

//tranh thuc hien lai 1 doan logic