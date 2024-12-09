import React from 'react'

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" id='image' src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/01/genshin-impact-ver-1.3-all-that-glitters.jpg?q=50&fit=crop&w=1140&h=&dpr=1.5" alt="product_image1" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        The Conqueror of Demons 
                    </h5>
                </a>
               
               
            </div>
        </div>
    );
}