
import Ads from '@/components/Ads/Ads';
import UseBlogDetails from '@/components/Hooks/UseBlogDetails';
import Navbar from '@/components/Shared/Navbar';
import Image from 'next/image';

const page = async ({ searchParams }) => {

    const id = searchParams?.id
    const data = await UseBlogDetails(id)

    return (
        <div>
            <Navbar />
            {/* hello d*/}
            <div className='grid grid-cols-7 gap-10 justify-center my-10'>
                <div className='col-span-2  flex items-center text-center   justify-center'>
                    <Ads />
                </div>
                <div className='col-span-3'>
                    <Image className='w-full' height={500} width={500} src={data?.image} alt='blog image'></Image>


                    <div className="flex mt-5 items-center gap-3">
                        <div className="w-14 rounded-xl">
                            <Image height={500} width={500} alt='author' src={data?.image} />
                        </div>
                        <div>
                            <h2 className='text-xl font-semibold'>{data?.author}</h2>
                            <h2 className='text- font-bold'>{data?.category}</h2>
                        </div>
                    </div>


                    <div className='space-y-3 my-5'>
                        <h2 className='text-3xl font-bold'>{data?.title}</h2>
                        <p>Due to the explosive growth of DeFi, multiple assets were introduced into Web3 world as anchor coins, such as USDC and USDV. In the current market, there are over 20 asset-backed tokens, with several of them backed by the same underlying assets. In the future, we anticipate the introduction of more tokens that effectively represent the same underlying assets. In theory, the swap ratio between these tokens should be 1:1 since they share the same backing. However, existing DEXs in the market did not fully consider this fundamental aspect when designing their exchange protocols, resulting in high costs for users due to slippage. Therefore, there is an urgent need for a better-designed product that specializes in stablecoin swaps.</p>
                    </div>
                </div>
                <div className='col-span-2  flex items-center text-center   justify-center'>
                    <Ads />
                </div>
            </div>
        </div>
    );
};

export default page;
