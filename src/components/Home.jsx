import useFetch from "../useFetch";
import BlogList from "./BlogList";

const Home = () => {
  const { data, message } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="home">
      {data ? <BlogList blogs={data} title="All Blogs" /> : message}
    </div>
  );
};

export default Home;
