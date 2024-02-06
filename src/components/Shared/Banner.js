const Banner = () => {
    return (
        <div className="hero min-h-screen bg-center bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/FbxrXQ8/download-25.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className=" text-left text-white lg:w-1/2 lg:pl-10">
                    <h1 className="mb-5 text-4xl font-bold">Discover the World Today: Todays Blog Chronicles</h1>
                    <p className="mb-5">Welcome to Todays Blog, where each day brings a new chapter to unfold. Immerse yourself in a collection of stories, ideas, and experiences that capture the essence of the present moment. Join us on this daily adventure!</p>
                    <button className="btn btn-outline text-white">Get Started</button>
                </div>
                <div className="w-1/2"></div>
            </div>
        </div>
    );
};

export default Banner;