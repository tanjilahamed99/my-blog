import Banner from "@/components/Shared/Banner";
import UseAllBlog from "@/components/Hooks/UseAllBlog";
import Navbar from "@/components/Shared/Navbar";
import DisplayBlogData from "@/components/DisplayBlogData/DisplayBlogData";

const Home = async () => {

  const data = await UseAllBlog()

  return (
    <div className="container mx-auto">
      <Navbar />
      <Banner />
      <div className="my-20">
        <h2 className="text-3xl font-bold text-center">Popular blogs</h2>
        <div className="grid ">
          {
            data?.map(i => <DisplayBlogData key={i._id} blog={i}></DisplayBlogData>)
          }
        </div>
      </div>
    </div>
  );
}


export default Home
