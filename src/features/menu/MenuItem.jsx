function MenuItem({ item }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = item;

  return (
    <li>
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(", ")}</p>
        <div>{!soldOut ? <p>${unitPrice}</p> : <p>Sold out</p>}</div>
      </div>
    </li>
  );
}

export default MenuItem;
