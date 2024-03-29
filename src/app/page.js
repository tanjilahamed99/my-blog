import Banner from "@/components/Shared/Banner";
import UseAllBlog from "@/components/Hooks/UseAllBlog";
import Navbar from "@/components/Shared/Navbar";
import DisplayBlogData from "@/components/DisplayBlogData/DisplayBlogData";
import Test from "@/components/GTM/Test";
import Map from "@/components/map/Map";
import ImageCrop from "@/components/imageCroper/Image";
import Image2 from "@/components/image2/Image2";
import Crop from "@/components/image2/Crop";
import { FirstTutorial } from "@/pages/Images/Images";
import ChatGPT from "@/pages/Images/ChatGPT";

const Home = async () => {
  const data = await UseAllBlog();

  return (
    <div className="container mx-auto">
      <Test />
      <Navbar />
      <Banner />
      <button className="ga-test">Hello Every One</button>
      <div className="my-20">
        <h2 className="text-3xl font-bold text-center">Popular blogs</h2>
        <div className="grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-5">
          {data?.map((i) => (
            <DisplayBlogData key={i._id} blog={i}></DisplayBlogData>
          ))}
        </div>
      </div>

      <div className="my-20 border ">
        <h2>Manual copy</h2>
        <FirstTutorial />
      </div>

      <div className="my-10 border">
        <h2>ChatGPT</h2>
        <ChatGPT/>
      </div>

      {/* <Map /> */}
      {/* <ImageCrop /> */}
      <Crop />
      {/* <Image2 /> */}
    </div>
  );
};

export default Home;
