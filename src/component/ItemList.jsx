import { Link,Routes, Route } from "react-router-dom";
import Item from "./Item";

export default function ItemList(props){
  let items=[];
  for(let i=0;i<props.items.length;i++){
    let item=props.items[i];
    items.push(
      <div key={item.id} className='item'>
        <Link to={`/item/${item.id}`}>
          <img src="https://picsum.photos/150/150" alt=""/>
          <h4>{item.title}</h4>
          <p>{item.price}</p>
        </Link>
        <Routes>
          <Route path={`/item/${item.id}`} element={<Item title={item.title} price={item.price} />}></Route>
        </Routes>
    </div>
    )
  }
  
  return (
    <div id="content">
        {items}
    </div>
  );
}