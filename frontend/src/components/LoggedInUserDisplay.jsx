import React from "react";
import { Link } from "react-router-dom";
import { Plus, Users, ArrowRight } from "lucide-react";
import { useGetOrgsQuery } from "../slices/organizationApiSlice";

const LoggedInUserDisplay = () => {
  const {
    data: organizations = [],} = useGetOrgsQuery();

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f8f6f2] px-6 py-10">
      
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-orange-100 opacity-40 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-100 opacity-40 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="mb-10">
          <div className="mb-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow-sm">
            🏢 Your Organizations
          </div>

          <h1 className="text-4xl font-bold text-gray-900">
            Organization Dashboard
          </h1>

          <p className="mt-2 text-gray-500">
            Manage your teams and collaborate with members.
          </p>
        </div>

        {/* Actions */}
        <div className="mb-8 flex flex-wrap gap-4">
          
          <Link
            to="/organization/create"
            className="flex items-center gap-2 rounded-2xl bg-gray-900 px-6 py-4 text-white shadow-lg transition hover:-translate-y-1 hover:bg-gray-800"
          >
            <Plus size={18} />
            Create Organization
          </Link>

          <Link
            to="/organization/join"
            className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-6 py-4 text-gray-700 shadow-sm transition hover:bg-gray-50"
          >
            <Users size={18} />
            Join Organization
          </Link>
        </div>

        

        {/* Empty State */}
        

        {/* Organizations */}
                    <div className="grid gap-4">
            {organizations?.map((org) => (
                <Link
                key={org.organization._id}
                to={`/organizations/${org.organization._id}`}
                className="group block rounded-lg border border-gray-200 p-6 transition hover:border-gray-300 hover:shadow-md"
                >
                <div className="flex items-center justify-between">
                    <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                        {org.organization.name}
                    </h3>

                    <p className="mt-2 text-gray-500">
                        Role: {org.membership}
                    </p>
                    </div>

                    <ArrowRight className="text-gray-400 transition group-hover:translate-x-1" />
                </div>
                </Link>
            ))}
            </div>

      </div>
    </section>
  );
};

export default LoggedInUserDisplay;