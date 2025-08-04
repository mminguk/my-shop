import { Link } from "react-router-dom"
import ItemList from "./ItemList"
import Header from "./Header";
export default function Home(){
  const items=[
    {id:1,title:'아이폰11',price:'2,000,000'},
    {id:2,title:'아이폰12',price:'2,000,000'},
    {id:3,title:'아이폰13',price:'2,000,000'},
    {id:4,title:'아이폰14',price:'2,000,000'},
  ]
  return (
    <>
      <Header></Header>
      <div>
        <h2>상품목록</h2>
        <ItemList items={items}></ItemList>
      </div>
    </>
  );
}