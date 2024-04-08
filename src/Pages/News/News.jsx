import { useParams } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import RightSideNav from "../../Shared/RightSideNav/RightSideNav";
import NavBar from "../../Shared/NavBar/NavBar";

const News = () => {
  const { id } = useParams();
  return (
    <div>
      <div className="my-6">
        <Header></Header>
        <NavBar></NavBar>
      </div>
      <div className="grid md:grid-cols-4 gap-6">
        <div className="border col-span-3">
          <h2>Dragon News</h2>
          <p>{id}</p>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default News;
