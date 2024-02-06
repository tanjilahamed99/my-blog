
const UseAllBlog = async () => {
    const res = await fetch('https://todays-blog-server.vercel.app/blogs')
    const data = await res.json()
    return data
};

export default UseAllBlog;