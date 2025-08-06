import { Link, useNavigate } from "react-router-dom"
import Header from "./Header";
import Item from "./Item";
import ItemCard from "./ItemCard";



export default function Home(){
  const navigate=useNavigate();
  const items=[
    {id:1,title:'아이폰11',price:'2,000,000'},
    {id:2,title:'아이폰12',price:'2,000,000'},
    {id:3,title:'아이폰13',price:'2,000,000'},
    {id:4,title:'아이폰14',price:'2,000,000'},
  ]
  return (
    <>
      <Header></Header>
      <h2>상품목록</h2>
      <div id="content">
        {items.map((item)=>(
          <div key={item.id} className='item'>
            <ItemCard item={item} onItemDetail={()=>{
              navigate(`/item`);
            }} />
          </div>
        ))}
      </div>
    </>
  );
}