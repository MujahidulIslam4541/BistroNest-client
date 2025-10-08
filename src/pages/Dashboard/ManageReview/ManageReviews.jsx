import SectionTitle from "../../../components/sectionTitle/SectionTitle";

const ManageReviews = () => {
  // 🔹 Static demo data
  const reviews = [
    {
      _id: "1",
      name: "Mujahidul Islam Rifat",
      email: "rifat@example.com",
      rating: 5,
      comment: "Excellent food and service! Highly recommend the Bistro Combo meal.",
      status: "approved",
      createdAt: "2025-10-07T10:30:00Z",
    },
    {
      _id: "2",
      name: "Nusrat Jahan",
      email: "nusrat@example.com",
      rating: 4,
      comment: "Nice ambiance and friendly staff. Will visit again!",
      status: "pending",
      createdAt: "2025-10-06T15:20:00Z",
    },
    {
      _id: "3",
      name: "Rakib Hasan",
      email: "rakib@example.com",
      rating: 3,
      comment: "Food was okay, but service was a bit slow.",
      status: "rejected",
      createdAt: "2025-10-05T12:00:00Z",
    },
  ];

  return (
    <>
      <SectionTitle heading="Manage Reviews" subHeading="Admin Control Panel" />

      <div className="p-6 bg-base-200 rounded-xl shadow-xl">
        <div className="overflow-x-auto bg-base-100 rounded-lg shadow-lg">
          <table className="table w-full">
            <thead className="bg-primary text-white">
              <tr>
                <th>Reviewer</th>
                <th>Rating</th>
                <th>Comment</th>
                <th>Status</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {reviews.map((review) => (
                <tr key={review._id} className="hover:bg-base-200 transition">
                  <td>
                    <div className="font-semibold text-base">{review.name}</div>
                    <div className="text-xs opacity-70">{review.email}</div>
                    <div className="text-xs opacity-50">
                      {new Date(review.createdAt).toLocaleString()}
                    </div>
                  </td>

                  <td>
                    <div className="badge badge-outline badge-lg text-lg font-medium">
                      ⭐ {review.rating}
                    </div>
                  </td>

                  <td className="max-w-md whitespace-normal">
                    <p className="text-sm text-gray-700">{review.comment}</p>
                  </td>

                  <td>
                    <div
                      className={`badge ${
                        review.status === "approved"
                          ? "badge-success"
                          : review.status === "rejected"
                          ? "badge-error"
                          : "badge-warning"
                      } badge-md text-white`}
                    >
                      {review.status}
                    </div>
                  </td>

                  <td className="text-right">
                    <div className="flex justify-end gap-2">
                      {review.status !== "approved" && (
                        <button className="btn btn-sm btn-outline btn-success">
                          Approve
                        </button>
                      )}
                      {review.status !== "rejected" && (
                        <button className="btn btn-sm btn-warning">Reject</button>
                      )}
                      <button className="btn btn-sm btn-error">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ManageReviews;
