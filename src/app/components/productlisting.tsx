import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'The Dandy Chair',
    price: 230,
    image: '/chair.jpeg',
    href: '/product/dandy-chair',
  },
  {
    id: 2,
    name: 'Rustic Vase Set',
    price: 155,
    image: '/vase.jpeg',
    href: '/product/rustic-vase-set',
  },
  {
    id: 3,
    name: 'The Silky Vase',
    price: 125,
    image: '/3.jpeg',
    href: '/product/silky-vase',
  },
  {
    id: 4,
    name: 'The Lucy Lamp',
    price: 399,
    image: '/lamp.jpeg',
    href: '/product/lucy-lamp',
  },
];

const ProductListing = () => {
  return (
    <section className="container mx-auto py-16 px-4 flex flex-col">
      {/* Section Title */}
      <h1 className="text-[30px] font-clash-display font-normal leading-[80px] text-[#2A254B] w-[217px] h-[39px] ml-0">
        New Ceramics
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        {products.map((product) => (
          <Link key={product.id} href={product.href} className="group">
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="w-[305px] h-[462px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={305}
                  height={462}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                {/* Product Name */}
                <h3 className="text-lg font-medium mb-2 font-clash-display font-normal text-[20px] leading-[28px] text-left">
                  {product.name}
                </h3>
                {/* Product Price */}
                <p className="text-gray-600 text-left">£{product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* View Collection Button */}
      <div className="mt-[50px] flex justify-center">
        <Link href="/collections">
          <button
            className="bg-[#F9F9F9] hover:bg-gray-300 text-gray-800 font-satoshi font-normal text-[14px] leading-[24px] px-[32px] py-[16px] rounded-lg w-[170px] h-[56px]"
            style={{ gap: '10px' }}
          >
            View Collection
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ProductListing;
