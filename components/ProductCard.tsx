import React from 'react';

export default function ProductCard ({ product }: { product : any }){
	return (
		<div className='bg-black rounded-xl p-4 w-full max-w-xs'>
			<img src={product.image} alt={product.title} className='rounded-lg mb-2 w-full h-48 object-cover' />
			<h3 className='text-lg font-semibold'>{product.title}</h3>
			<p className='text-gray 500'>{product.platform} • {product.language}</p>
			<p className='text-blue-600 font-bold mt-2'>{product.price}₺</p>
		</div>
	);
}