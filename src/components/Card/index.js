import React from 'react';
import CheckAll from '../../icons/checkAll';

const Card = (props) => {
    const { title, price, text, data, color, buttonColor, checkColor } = props
    return (
        <div className={`max-w-sm overflow-hidden shadow-lg border rounded-xl h-[470px] ${color}`}>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-3xl font-bold">
                    {price}
                </p>
                <p className="text-xs pb-4">
                    {text}
                </p>
                <hr />
                <div className={`px-6 py-4 rounded-lg my-4 text-center ${buttonColor}`}>Try it for Free</div>
                <hr />
                <div className='my-4'>
                    <p className='font-bold'>What’s Included:</p>
                    <ul>
                        {data.map((i, idx) => (
                            <li key={idx} className='flex gap-2 text-sm py-0.5'>
                                <span><CheckAll checkColor={checkColor} /> </span>
                                <span className=''>{i}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Card;
