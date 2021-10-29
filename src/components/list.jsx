import React from "react";
import ListItem from "./listitem";

function List({item}) {
    return (
        <div>
            Work hours
            {
                item.map( function(item) {
                    return <ListItem item={item} key={item.id}/>
                })
            }
        </div>
    )

}

export default List