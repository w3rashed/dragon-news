import { useLoaderData } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import LeftSideNav from "../../Shared/LeftSideNav/LeftSideNav";
import NavBar from "../../Shared/NavBar/NavBar";
import RightSideNav from "../../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
  const news = useLoaderData();
  console.log(news);

  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <NavBar></NavBar>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
        <div className="">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="col-span-2 ">
          {news.map((aNews) => (
            <NewsCard proper key={aNews._id} news={aNews}></NewsCard>
          ))}
        </div>
        <div className=" ">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
