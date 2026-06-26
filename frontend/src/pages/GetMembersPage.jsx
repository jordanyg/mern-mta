import { useParams } from "react-router-dom";
import { useGetOrgMembersQuery } from '../slices/organizationApiSlice'
import { toast } from "react-toastify";

const GetMembersPage = () => {
     const { orgId } = useParams();

  const {
    data: members = [],
    isLoading,
    error,
  } = useGetOrgMembersQuery(orgId);

  if (isLoading) return <h2>Loading...</h2>;

  if (error) {
    toast.error(error)
  } 
  return (
    <div className="max-w-4xl mx-auto mt-10">

      <h1 className="mb-6 text-3xl font-bold">
        Organization Members
      </h1>

      <div className="space-y-4">
        {members.map((member) => (
          <div
            key={member._id}
            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
          >
            <h2 className="font-semibold">
              {member.user.name}
            </h2>

            <p className="text-gray-500">
              {member.user.email}
            </p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default GetMembersPage