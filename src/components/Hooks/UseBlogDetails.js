
const UseBlogDetails = async ( id ) => {
    const res = await fetch(`https://todays-blog-server.vercel.app/blog/${id}`)
    const data = await res.json()
    return data
};

export default UseBlogDetails;