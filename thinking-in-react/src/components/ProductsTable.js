import React from 'react'

export default function ProductsTable(props) {
    const {category, items, inStockOnly} = props;

    const filteredItems = items.filter((item) => {
        if (inStockOnly && !item.stocked){
            return false;
        }
        if(!item.name.includes(props.filter.text)){
            return false;
        }
        return true;
    });

  return (
    <>
        <tr>
            <td>{category}</td>
        </tr>
        {filteredItems.map((item, idx) => (
            <tr key={idx}>
                <td>{item.name}</td>
                <td>{item.price}</td>
            </tr>
        ))}
    </>
  );
}

