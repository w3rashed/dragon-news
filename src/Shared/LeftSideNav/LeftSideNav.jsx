import { useEffect, useState } from "react";
import {  NavLink } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  console.log(categories);
  return (
    <div>
      <h2 className="font-semibold text-xl">All Caterogy</h2>
      {categories.map((category) => (
        <NavLink
          to={`/category/${category.id}`}
          className="grid p-4"
          key={category.id}
        >
          {category.name}
        </NavLink>
      ))}
    </div>
  );
};

export default LeftSideNav;
