import Button from "../../ui/Button";

function MenuItem({ item }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = item;

  return (
    <li className="flex gap-4 py-2">
      <img
        className={`h-24 ${soldOut && "opacity-80 grayscale"}`}
        src={imageUrl}
        alt={name}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">${unitPrice}</p>
          ) : (
            <p
              className="text-sm font-medium uppercase text-stone-500
            "
            >
              Sold out
            </p>
          )}

          <Button disabled={soldOut} type="small">
            Add to cart
          </Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
