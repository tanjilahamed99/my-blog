import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

const DisplayBlogData = ({ blog }) => {

    return (
        <Link href={
            {
                pathname: '/blogDetails',
                query: {
                    id: blog._id
                }
            }
        }>
            <div className="card  bg-base-100 shadow-lg hover:shadow-xl rounded-xl">
                <Image className="w-full h-[300px]" src={blog?.image} alt={blog?.title} width={600} height={500} />
                <div className="card-body space-y-2">
                    <div>
                        <h2 className="card-title text-sm font-bold">{blog?.author}</h2>
                    </div>
                    <div className="flex justify-between">
                        <h2 className="card-title">{blog?.title.slice(0, 25)}...</h2>
                    </div>
                    <p>{blog?.content.slice(0, 70)}....</p>
                </div>
            </div>
        </Link>
    );
};

DisplayBlogData.propTypes = {
    blog: PropTypes.object
};

export default DisplayBlogData;

