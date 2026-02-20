import {Link } from "react-router-dom"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="w-full max-w-md rounded-lg border border-gray-200 bg-blue-600 p-6 shadow-sm">
        <h1 className="mb-6 text-center text-2xl font-bold text-white">
          Login
        </h1>

        <form className="space-y-4 ">
          <div>
            <label className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              className="mt-1 w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white">
              Password
            </label>
            <input
              type="password"
              className="mt-1 w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>
          <Link to={"/dashboard"}>
          <button
            type="submit"
            className="w-full rounded bg-white py-2 font-medium text-blue-600 hover:bg-gray-400 transition"
          >
            Login
          </button>
          </Link>
          <Link to={"/register"}>
            <div className="text-white">
                no account? create one...
            </div>
          </Link>
        </form>
      </div>
    </div>
  );
}
