import "./Items.css";
import "../../utils/Borders.scss";

const AllItems = ({ items }) => {
  const loadItems = (itemList) =>
    itemList.map((item, index) => (
      <p className="fs-5 items" key={index}>
        {item}
      </p>
    ));
  return (
    <div className="py-5 d-flex justify-content-center box">
      <div className="inner-box">
        {loadItems(items)}
      </div>
    </div>
  );
};

export default AllItems;
