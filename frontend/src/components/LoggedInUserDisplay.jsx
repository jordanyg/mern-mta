import React from "react";
import { Link } from "react-router-dom";
import { Plus, Users, ArrowRight } from "lucide-react";
import { useGetOrgsQuery } from "../slices/organizationApiSlice";

const LoggedInUserDisplay = () => {
  const {
    data: organizations = [],
    isLoading,
    error,
  } = useGetOrgsQuery();

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

        {/* Loading */}
        {isLoading && (
          <div className="rounded-3xl bg-white/80 p-6 text-center shadow-xl backdrop-blur-xl">
            Loading organizations...
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="rounded-3xl bg-white/80 p-6 text-center text-red-500 shadow-xl backdrop-blur-xl">
            Failed to load organizations
          </div>
        )}

        {/* Empty State */}
        {!isLoading && organizations.length === 0 && (
          <div className="rounded-3xl bg-white/80 p-10 text-center shadow-xl backdrop-blur-xl">
            <h3 className="text-xl font-semibold text-gray-900">
              No organizations yet
            </h3>

            <p className="mt-2 text-gray-500">
              Create one or join an existing organization.
            </p>
          </div>
        )}

        {/* Organizations */}
        <div className="grid gap-5">
          {organizations.map((org) => (
            <Link
              key={org._id}
              to={`/organization/${org._id}`}
              className="group rounded-3xl border border-white/50 bg-white/80 p-6 shadow-xl backdrop-blur-xl transition hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {org.name}
                  </h3>

                  <p className="mt-2 text-gray-500">
                    {org.members?.length || 0} members
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