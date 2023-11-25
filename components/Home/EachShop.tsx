import { shopInterface } from "@/data/List";

export default function EachShop({store}: {store: shopInterface}) {
  return (
    <div id="eachShop" className="border w-[40vw] py-5">
      <h2 className="font-medium text-xl text-center">
        {store.shop}
      </h2>
      <div className="text-center flex items-center flex-col">
        {store.items.map((item, index) => (
          <div key={index} className="flex justify-between px-5 py-2">
            <span>
              {item.name}: {item.quantity}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
