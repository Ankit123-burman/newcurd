import React from 'react'

export default function Totalsection() {
    return (
        <>
            <div className="added-items-section w-1/2 bg-white rounded-md shadow-md p-4 left-10 ">
                <h2 className="text-2xl font-bold mb-4 text-center">Added Items</h2>
                <table className="w-full mb-4">
                    <thead>
                        <tr>
                            <th className="text-lg text-gray-600 p-4">(link unavailable)</th>
                            <th className="text-lg text-gray-600 p-4">Service Name</th>
                            <th className="text-lg text-gray-600 p-4">Price</th>
                        </tr>
                    </thead>
                    <tbody className="tbody">

                    </tbody>
                </table>
                <div className="no-item-added text-center mb-4">
                    <img src="img1.png" alt="img" className="w-16" />
                    <h3 className="text-lg text-gray-600">No Item Added</h3>
                    <p className="text-lg text-gray-600">Add items to the Services bar</p>
                </div>
                <div className="total-amount text-lg font-bold mb-4 text-center">
                    <span id="total-amount" className="text-lg font-bold">Total : 0</span>
                </div>
            </div>
        </>
    )
}
