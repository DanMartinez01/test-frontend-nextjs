import Image from 'next/image';
import { Product } from '../pages/Explore'
import Button from './Button';
import Link from 'next/link';

type ProductCardProps = {
    product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className='w-full px-2 py-4 rounded-md bg-white-500 relative transition-transform duration-300 hover:scale-105'>
            <Image src={product.imageUrl} width={350} height={200} alt={product.title}
                loader={({ src }) => src}
                className='w-full rounded-md'
            />
            <h2 className='text-xl font-bold mt-4 mb-6'>{product.title}</h2>
            <div className='flex flex-row items-center justify-start mt-2 '>
                <div className='bg-gray-500 rounded-full w-6 h-6'></div>
                <p className='text-black font-bold ml-4'>{product.vendor}</p>
            </div>
            <div className='flex flex-row items-center justify-start mt-1'>
                <Image src="/Assets/icon.png" alt='ratings' width={10} height={10} className='w-10 h-10 -ml-2' />
                <p className='text-gray-500 ml-3'>{product.ratings[0]?.score}</p>
                <p className='text-gray-500 ml-1'>{`(${product.ratings.length})`}</p>
            </div>
            <p className='text-green text-2xl font-bold'>{`$${product.price}`}</p>
            <Button className='bg-purple text-xs md:text-sm lg:text-md px-2 py-1 md:px-4 md:py-2 lg:px-6 lg:py-3 text-white-500 rounded-md absolute -right-3 bottom-4'>
                {parseInt(product.id, 10) === 1 ? (
                    <Link href='/https://danimartinez-portfolio.vercel.app/' className='hover:text-yellow-400 hover:font-semibold'>
                        Check this ChatBot!
                    </Link>
                ) : (
                    "Agregar al carrito"
                )}
            </Button>
        </div>
    );
};

export default ProductCard;
