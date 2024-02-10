import Banner from "@/components/Shared/Banner";
import UseAllBlog from "@/components/Hooks/UseAllBlog";
import Navbar from "@/components/Shared/Navbar";
import DisplayBlogData from "@/components/DisplayBlogData/DisplayBlogData";
import Test from "@/components/GTM/Test";

const Home = async () => {

  const data = await UseAllBlog()

  return (
    <div className="container mx-auto">
      <Test />
      <Navbar />
      <Banner />
      <button className="ga-test">Hello Every One</button>
      <div className="my-20">
        <h2 className="text-3xl font-bold text-center">Popular blogs</h2>
        <div className="grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-5">
          {
            data?.map(i => <DisplayBlogData key={i._id} blog={i}></DisplayBlogData>)
          }
        </div>
      </div>
    </div>
  );
}


export default Home
