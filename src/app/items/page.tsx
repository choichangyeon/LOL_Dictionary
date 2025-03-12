import ItemCard from "@components/items/ItemCard";
import { getItemsData } from "@utils/serverApi";

const ItemsPage = async () => {
  const items = await getItemsData();
  return (
    <div className="flex flex-row flex-wrap items-center justify-evenly">
      {Object.entries(items).map(([key, item]) => {
        return (
          <div key={key}>
            <ItemCard item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default ItemsPage;
