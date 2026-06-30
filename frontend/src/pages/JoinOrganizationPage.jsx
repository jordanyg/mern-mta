import React, { useState } from "react";
import { Building2, Lock, Plus } from "lucide-react";
import { useCreateOrgMutation } from "../slices/organizationApiSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useJoinOrgMutation } from "../slices/organizationApiSlice";

const JoinOrganizationPage = () => {
  const [secret, setSecret] = useState("");
  const [name ,setName] = useState("")

  const navigate = useNavigate();

  const [joinOrg, { isLoading }] = useJoinOrgMutation();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await joinOrg({name,
        secret,
      }).unwrap();

      toast.success("joined Organization successfully");

      navigate("/");
    } catch (err) {
      toast.error(err?.data?.message || err?.error);
    }
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f8f6f2] px-6 py-10">
      
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-orange-100 opacity-40 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-100 opacity-40 blur-3xl"></div>

      <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/50 bg-white/80 p-8 shadow-2xl backdrop-blur-xl">
        
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#f8f6f2] px-4 py-2 text-sm font-medium text-gray-600">
            join Organization
          </div>

          <h1 className="text-3xl font-bold text-gray-900">
            join Organization
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            join an new organization 
          </p>
        </div>

        {/* Form */}
        <form onSubmit={submitHandler} className="space-y-5">

          {/* Name */}
          
            <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                          Organization Name
                        </label>
            
                        <div className="flex items-center rounded-2xl border border-gray-200 bg-white px-4">
                          <Building2 className="h-5 w-5 text-gray-400" />
            
                          <input
                            type="text"
                            placeholder="Engineering Team"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-transparent px-3 py-4 text-gray-700 outline-none"
                            required
                          />
                        </div>
                      </div>
          {/* Secret */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Organization Secrett
            </label>

            <div className="flex items-center rounded-2xl border border-gray-200 bg-white px-4">
              <Lock className="h-5 w-5 text-gray-400" />

              <input
                type="password"
                placeholder="Enter organization secret"
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
                className="w-full bg-transparent px-3 py-4 text-gray-700 outline-none"
                required
              />
            </div>

            <p className="mt-2 text-xs text-gray-500">
              Members will need this secret to join the organization.
            </p>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gray-900 py-4 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-70"
          >
            <Plus size={18} />

            {isLoading ? "joining..." : "join Organization"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default JoinOrganizationPage;