const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

function ProductCategoryRow({ category }) {
  return <div><h3>{category}</h3></div>;
}

function ProductRow({ product }) {
  let name;
  if (product.stocked) {
    name = product.name;
  } else {
    name = <span style={{ color: "red", display:"inline-block" }}>{product.name}</span>;
  }
  return (
    <>
      <span>{name}{" "}</span>
      <span>{product.price}</span>
      <br></br>
    </>
  )
}

function ProductTable({products}){
  let rows = [];
  let lastcategory = null;
  for(let i =0 ;i<products.length;i++){
    let product = products[i];
    if(product.category != lastcategory){
      rows.push(<ProductCategoryRow category={product.category} key={product.category}/>)
    }
    rows.push(<ProductRow product={product} key={product.name}/>)
    lastcategory = product.category;
  }
  return(
    <>
      <span style={{fontSize:"25px"}}>Name {" "}</span>
      <span style={{fontSize:"25px"}}>Price </span>
      <div>{rows}</div>
    </>
  )
}
function Searchbar(){
  return(
    <>
      <input type="text" placeholder="Search"></input>
      <br></br>
      <input type="checkbox"/>{' '}Only show products in stock
      <br></br>
    </>
  )
}

function App() {
  return (
    <>
    <div > <Searchbar/>
      <ProductTable products = {PRODUCTS}/></div>
     
    </>
  )
}

export default App;
