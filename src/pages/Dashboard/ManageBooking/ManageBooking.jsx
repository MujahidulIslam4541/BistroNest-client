const ManageBookings = () => {


  return (
    <div className="p-6">
      <SectionTitle heading="Manage Bookings" subHeading="Manage All Bookings"></SectionTitle>

      <div className="max-w-6xl mx-auto mt-8 px-4">
        <div className="bg-white shadow-md rounded-xl p-6 mb-6">
          <h2 className="text-lg sm:text-2xl font-bold text-gray-700 mb-6">TOTAL Bookings: 0</h2>

          <div className="overflow-x-auto rounded-xl">
            <table className="table">
              <thead className="bg-[#D1A054] text-white text-[16px]">
                <tr>
                  <th>E-mail</th>
                  <th>Transaction ID</th>
                  <th>Price</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>

                  <tr className="hover:bg-gray-50">
                    <td>sdfdsfdg</td>
                    <td>dfvgdss</td>
                    <td>$dfgdgvd</td>
                    <td>sdgvfgfdg</td>

                    <td className="text-center">
                      <select
                      >
                        <option value="pending" disabled>
                          Pending
                        </option>
                        <option value="processing">Processing</option>
                        <option value="delivered">Delivered</option>
                        <option value="canceled">Canceled</option>
                      </select>
                    </td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageBookings;
