import { Link, Route, Routes } from "react-router-dom"
export default function ItemCard(props){
    return (
        <>
            <div onClick={props.onItemDetail}>
              <img src="https://picsum.photos/150/150" alt=""/>
              <h4>{props.item.title}</h4>
              <p>{props.item.price}</p>
            </div>

        </>
    )
}