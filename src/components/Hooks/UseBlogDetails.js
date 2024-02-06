
const UseBlogDetails = async ( id ) => {
    const res = await fetch(`http://localhost:5000/blog/${id}`)
    const data = await res.json()
    return data
};

export default UseBlogDetails;