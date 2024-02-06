
const UseAllBlog = async () => {
    const res = await fetch('http://localhost:5000/blogs')
    const data = await res.json()
    return data
};

export default UseAllBlog;