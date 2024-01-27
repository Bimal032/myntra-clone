import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItem";
const Women = () => {
  const items = useSelector((store) => store.items);
  const finalItems = items.filter((item) => item.type.includes("WOMEN"));
  return (
    <main>
      <div className="items-container">
        {finalItems.map((item) => (
          <HomeItem key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default Women;
