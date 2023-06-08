import React, { useState } from 'react'
import Left from './Left'

function Lefts() {
    
    const accordion_list = [
        {
            id: 1,
            title: "ilgili kategoriler",
            collapse:"collapseOne",
            input:"none",
            check:"none",
            pe:"block"
        },
        {
            id: 2,
            title: "Marka",
            collapse:"collapseTwo",
            input:"block",
            pe:"none",
            inputtext:{
                checkk : "asus",checkk : "asus",checkk: "asus", checkk : "asus",
            }
            
        },
        {
            id: 2,
            title: "Marka",
            collapse:"collapseTwo",
            input:"block",
            pe:"none",
            inputtext:{
                checkk : "asus",checkk : "asus",checkk: "asus", checkk : "asus",
            }
            
        },
    ]
    const [accordions,setAccordions] = useState(accordion_list)
    return (
        <>
        <div key={accordions.id} className="row">
            <Left accordions={accordions} />
        </div>
        </>
    )
}

export default Lefts