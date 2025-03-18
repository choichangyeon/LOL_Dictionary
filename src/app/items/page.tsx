import ItemCard from "@components/items/ItemCard";
import { getItemsData } from "@utils/serverApi";

const ItemsPage = async () => {
  const items = await getItemsData();
  return (
    <main className="flex min-h-screen justify-center bg-gradient-to-b from-slate-950 to-slate-900 py-8 text-white">
      <div className="container min-w-screen">
        <h1 className="mb-8 text-center text-[36px] font-bold text-yellow-400">
          Items
        </h1>

        <div className="flex flex-row flex-wrap items-center justify-center gap-[25px] px-[30px]">
          {Object.entries(items).map(([key, item]) => {
            return (
              <div key={key}>
                <ItemCard item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default ItemsPage;
