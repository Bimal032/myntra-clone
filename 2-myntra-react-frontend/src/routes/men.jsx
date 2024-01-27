import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItem";
const Men = () => {
  const items = useSelector((store) => store.items);
  const finalItems = items.filter((item) => item.type.includes("MEN"));
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

export default Men;
