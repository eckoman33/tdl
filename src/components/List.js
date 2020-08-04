import React from "react";
import ListItem from "./ListItem";

  const List = props => {
    return (
      <ul>
        {props.list.map((item, index) => (
          <ListItem
            key={index}
            item={item.name}
            handleRemove={props.handleRemove}
          />
        ))}
      </ul>
    );
  };

  export default List;
