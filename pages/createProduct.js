import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Head from "next/head";
const Layout = dynamic(() => import("../components/layout"), {
  ssr: false,
  // loading: () => <h1>loading</h1>
});

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    thumbnail: "",
    description: "",
    category: "",
    price: "",
    brand: "",
    stock: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create product object
    const product = {
      title: formData.title,
      thumbnail: formData.thumbnail,
      description: formData.description,
      category: formData.category,
      price: formData.price,
      brand: formData.brand,
      stock: formData.stock,
    };

    // Check if the product already exists (in case of update)
    const existingProductIndex = products.findIndex(
      (p) => p.title.toLowerCase() === product.title.toLowerCase()
    );

    // Add or update the product
    if (existingProductIndex !== -1) {
      // Update existing product
      const updatedProducts = [...products];
      updatedProducts[existingProductIndex] = product;
      setProducts(updatedProducts);
    } else {
      // Add new product
      setProducts([...products, product]);
    }

    // Clear the form
    setFormData({
      title: "",
      thumbnail: "",
      description: "",
      category: "",
      price: "",
      brand: "",
      stock: "",
    });
  };

  const handleDelete = (title) => {
    // Find the product index to delete
    const updatedProducts = products.filter(
      (product) => product.title.toLowerCase() !== title.toLowerCase()
    );
    setProducts(updatedProducts);
  };

  return (
    <div>
      <Head>
        <title>Admin Panel</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width "
        />
        <meta property="og:title" content="TUK ADMIN PANEL" />
      </Head>
      <Layout nav={true}>
        <Header title={" Create Products"} />
        {/* <h1>Product Management</h1> */}
        <div className="w-full pb-[56px] ">
          <div className="overflow-x-auto py-2 px-[8px] border border-zinc-200 rounded-xl bg-white lg:overflow-x-clip">
            <div className="flex">
              {/* Form for adding/updating products */}
              <form
                onSubmit={handleSubmit}
                className="w-1/2 bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4"
              >
                <div class="mb-4">
                  <label
                    htmlFor="title"
                    class="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Title:
                  </label>
                  <input
                    type="text"
                    id="title"
                    class="shadow appearance-none border rounded w-full max-w-[400px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                  />
                  <br />
                  <br />

                  <label
                    htmlFor="thumbnail"
                    class="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Thumbnail:
                  </label>
                  <input
                    type="text"
                    class="shadow appearance-none border rounded w-full py-2 px-3  max-w-[400px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="thumbnail"
                    name="thumbnail"
                    value={formData.thumbnail}
                    onChange={handleInputChange}
                    required
                  />
                  <br />
                  <br />

                  <label
                    htmlFor="description"
                    class="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Description:
                  </label>
                  <textarea
                    id="description"
                    class="shadow appearance-none border rounded w-full py-2 max-w-[400px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                  <br />
                  <br />

                  <label
                    htmlFor="category"
                    class="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Category:
                  </label>
                  <input
                    type="text"
                    class="shadow appearance-none border rounded w-full py-2 px-3 max-w-[400px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                  />
                  <br />
                  <br />

                  <label
                    htmlFor="price"
                    class="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Price:
                  </label>
                  <input
                    type="number"
                    class="shadow appearance-none border rounded w-full py-2 px-3  max-w-[400px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    required
                  />
                  <br />
                  <br />

                  <label
                    htmlFor="brand"
                    class="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Brand:
                  </label>
                  <input
                    type="text"
                    class="shadow appearance-none border rounded w-full py-2 px-3  max-w-[400px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="brand"
                    name="brand"
                    value={formData.brand}
                    onChange={handleInputChange}
                    required
                  />
                  <br />
                  <br />

                  <label
                    htmlFor="stock"
                    class="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Stock:
                  </label>
                  <input
                    type="number"
                    class="shadow appearance-none border rounded w-full py-2 px-3 max-w-[400px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="stock"
                    name="stock"
                    value={formData.stock}
                    onChange={handleInputChange}
                    required
                  />
                  <br />
                  <br />

                  {/* Add/Update button */}
                  <button
                    type="submit"
                    class="shadow bg-black hover:bg-gray focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  >
                    Create Product
                  </button>
                </div>
              </form>

              <hr />

              {/* Table to display existing products */}
              <table className="w-1/2">
                <thead>
                  <tr className="flex jutify-between  h-[63px] items-center">
                    <th className="px-4 py-2">Title</th>
                    <th className="px-4 py-2">Thumbnail</th>
                    <th className="px-4 py-2">Description</th>
                    <th className="px-4 py-2">Category</th>
                    <th className="px-4 py-2">Price</th>
                    <th className="px-4 py-2">Brand</th>
                    <th className="px-4 py-2">Stock</th>
                    <th className="px-4 py-2">Action</th>
                  </tr>
                </thead>
                <tbody className="flex flex-col max-w-[1124px] ">
                  {products.map((product, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-gray-100" : ""}
                    >
                      <td className="px-14 py-2">{product.title}</td>
                      <td className="px-14 py-2">{product.thumbnail}</td>
                      <td className="px-14 py-2">{product.description}</td>
                      <td className="px-14 py-2">{product.category}</td>
                      <td className="px-14 py-2">{product.price}</td>
                      <td className="px-14 py-2">{product.brand}</td>
                      <td className="px-14 py-2">{product.stock}</td>
                      <td className="px-14 py-2">
                        <button
                          onClick={() => handleDelete(product.title)}
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default ProductManagement;
