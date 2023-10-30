import SingleItem from "./SingleItem";

const Items = ({ items, removeItem, ediItem }) => {
  return (
    <div className="items">
      {items.map((item) => (
        <SingleItem {...item} key={item.id} removeItem={removeItem} ediItem={ediItem} />
      ))}
    </div>
  );
};
export default Items;
