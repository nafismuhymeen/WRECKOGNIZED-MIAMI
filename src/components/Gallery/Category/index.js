import "./category.scss";

const Category = ({ category, setCategory }) => {
  const selectedCategory = (cat) => {
    setCategory(cat);
  };

  // Category Background Color
  const backgroundColor = (cat) => {
    if (cat === category) {
      return "#79b4b7";
    }
    return "initial";
  };

  // Category Text Color
  const textColor = (cat) => {
    if (cat === category) {
      return "white";
    }
    return "#79b4b7";
  };
  return (
    <div className="category">
      <li
        style={{
          backgroundColor: `${backgroundColor("all")}`,
          color: `${textColor("all")}`,
        }}
        onClick={() => selectedCategory("all")}
      >
        All
      </li>
      <li
        style={{
          backgroundColor: `${backgroundColor("space")}`,
          color: `${textColor("space")}`,
        }}
        onClick={() => selectedCategory("space")}
      >
        Public Space
      </li>
      <li
        style={{
          backgroundColor: `${backgroundColor("garbage")}`,
          color: `${textColor("garbage")}`,
        }}
        onClick={() => selectedCategory("garbage")}
      >
        Wreckognized Garbage
      </li>
      <li
        style={{
          backgroundColor: `${backgroundColor("transit")}`,
          color: `${textColor("transit")}`,
        }}
        onClick={() => selectedCategory("transit")}
      >
        Wreckognized Transit
      </li>
      <li
        style={{
          backgroundColor: `${backgroundColor("pieces")}`,
          color: `${textColor("pieces")}`,
        }}
        onClick={() => selectedCategory("pieces")}
      >
        Wynwood Pieces
      </li>
    </div>
  );
};

export default Category;
