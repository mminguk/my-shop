import Header from "./Header";
import Review from "./Review";
import Item from "./Item";
import { useState } from "react";

export default function ItemInfo(){
    return (
        <>
            <Header></Header>
            <img src="https://picsum.photos/150/150" alt=""/>
            <h4>옷</h4>
            <p>설명</p>
            <button>구매</button>
            <button>장바구니</button>
            <Review></Review>
        </>
    );
}