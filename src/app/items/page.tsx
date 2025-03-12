import ItemCard from "@components/items/ItemCard";
import { getItemsData } from "@utils/serverApi";

const ItemsPage = async () => {
  const items = await getItemsData();

  return (
    <div className="flex flex-row flex-wrap items-center justify-evenly">
      {items.map((item) => {
        return (
          <div key={item.name}>
            <ItemCard item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default ItemsPage;
