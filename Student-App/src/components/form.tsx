import { useState } from "react";

function ProductForm() {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [stock, setStock] = useState<string>("");
  const [features, setFeatures] = useState<string[]>([]);
  const [showForm, setShowForm] = useState<boolean>(true);

  const allCategories: string[] = ["Electronics", "Fashion", "Grocery", "Toys"];
  const allFeatures: string[] = ["Free Delivery", "Warranty", "Return Policy"];

  type ProductObject = {
    name: string;
    price: string;
    category: string;
    description: string;
    stock: string;
    features: string[];
  };

  const submitProduct = (event: any) => {
    event.preventDefault();
    const newProduct: ProductObject = {
      name,
      price,
      category,
      description,
      stock,
      features,
    };
    console.log("Product Added:", newProduct);
    alert("✅ Product Added Successfully!");
    setShowForm(false);
  };

  const getFeature = (event: any) => {
    const value = event.target.value;
    const check = event.target.checked;
    if (check) {
      setFeatures((data) => [...data, value]);
    } else {
      setFeatures((data) => data.filter((el) => el !== value));
    }
  };

  if (showForm) {
    return (
      <div
        style={{
          maxWidth: "500px",
          margin: "40px auto",
          padding: "25px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          backgroundColor: "#fff",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" ,fontSize:"25px"}}>
          Add Product
        </h2>
        <form
          onSubmit={submitProduct}
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          <div>
            <label style={{ fontWeight: "500" }}>Product Name</label>
            <input
              type="text"
              placeholder="Enter your product name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                border: "1px solid #ccc",
                borderRadius: "6px",
              }}
            />
          </div>

          <div>
            <label style={{ fontWeight: "500" }}>Price</label>
            <input
              type="number"
               placeholder="Enter your price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                border: "1px solid #ccc",
                borderRadius: "6px",
              }}
            />
          </div>

          <div>
            <label style={{ fontWeight: "500" }}>Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                border: "1px solid #ccc",
                borderRadius: "6px",
              }}
            >
              <option value="">Select Category</option>
              {allCategories.map((cat, i) => (
                <option key={i}>{cat}</option>
              ))}
            </select>
          </div>

          <div>
            <label style={{ fontWeight: "500" }}>Description</label>
            <textarea
              value={description}
               placeholder="Enter your Description"
              onChange={(e) => setDescription(e.target.value)}
              required
              rows={3}
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                border: "1px solid #ccc",
                borderRadius: "6px",
              }}
            />
          </div>

          <div>
            <label style={{ fontWeight: "500" }}>Stock</label>
            <input
              type="number"
              placeholder="enter you stock"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                border: "1px solid #ccc",
                borderRadius: "6px",
              }}
            />
          </div>

          <div>
            <label style={{ fontWeight: "500" }}>Features</label>
            <div style={{ marginTop: "5px" }}>
              {allFeatures.map((feat) => (
                <label key={feat} style={{ marginRight: "15px" }}>
                  <input
                    type="checkbox"
                    value={feat}
                    checked={features.includes(feat)}
                    onChange={getFeature}
                    style={{ marginRight: "5px" }}
                  />
                  {feat}
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            style={{
              padding: "12px",
              border: "none",
              borderRadius: "6px",
              background: "#4f46e5",
              color: "white",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Add Product
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div style={{ maxWidth: "900px", margin: "40px auto" }}>
        <h3 style={{ textAlign: "center", marginBottom: "15px", color: "#333" }}>
          Product Details
        </h3>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
          }}
        >
          <thead style={{ background: "#4f46e5", color: "white" }}>
            <tr>
              <th style={{ padding: "10px" }}>Name</th>
              <th style={{ padding: "10px" }}>Price</th>
              <th style={{ padding: "10px" }}>Category</th>
              <th style={{ padding: "10px" }}>Description</th>
              <th style={{ padding: "10px" }}>Stock</th>
              <th style={{ padding: "10px" }}>Features</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ textAlign: "center", background: "#fafafa" }}>
              <td style={{ padding: "10px" }}>{name}</td>
              <td style={{ padding: "10px" }}>{price}</td>
              <td style={{ padding: "10px" }}>{category}</td>
              <td style={{ padding: "10px" }}>{description}</td>
              <td style={{ padding: "10px" }}>{stock}</td>
              <td style={{ padding: "10px" }}>{features.join(", ")}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductForm;
