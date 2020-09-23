import React from "react";
import "../../App.css";
import CardService from '../CardProducts';
import Footer from '../Footer';

export default function Products() {
    return (
        <>
            <h1 className="products">PRODUCTS</h1>;
            <CardService />
            <Footer />
        </>
    )
}
