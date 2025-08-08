
const PaymentHistory = () => {
    return (
        <div className="max-w-6xl mx-auto mt-8 px-4">
            <div className="bg-white shadow-md rounded-xl p-6 mb-6">
                <h2 className="text-lg sm:text-2xl font-bold text-gray-700 mb-6">TOTAL PAYMENT: 6</h2>
                {/* table section */}
                <div className="overflow-x-auto rounded-xl">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#D1A054] text-white text-[16px]">
                            <tr>
                                <th>Email</th>
                                <th>Category</th>
                                <th>Total Price</th>
                                <th>Payment date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <td>mirifat@gmail.com</td>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>2025-06-08</td>
                            </tr>
                            {/* row 2 */}
                            <tr className="hover:bg-base-300">
                                <td>mirifat@gmail.com</td>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>2025-06-05</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <td>mirifat@gmail.com</td>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td>2025-08-05</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default PaymentHistory
