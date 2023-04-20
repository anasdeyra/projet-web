import { useState } from "react";
import { FiChevronDown as ChevronDownIcon } from "react-icons/fi";
import { Switch } from "@headlessui/react";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SignUp() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="isolate px-6 my-24 lg:px-8">
      <div
        className="absolute inset-x-0 -z-10 transform-gpu  blur-3xl top-32 right-0"
        aria-hidden="true"
      >
        <div
          className="relative right-0 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-emerald-700 to-green-400 opacity-30 "
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-5xl font-bold tracking-tight">Sign up</h2>
        <p className="mt-2 text-lg leading-8 text-gray-200">
          Create Your Account Today and Join Our Community!
        </p>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-neutral-100"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="bg-neutral-900 block w-full rounded-md border-0 px-3.5 py-2 text-neutral-100 shadow-sm ring-1 ring-inset ring-neutral-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-neutral-100"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="bg-neutral-900 block w-full rounded-md border-0 px-3.5 py-2 text-neutral-100 shadow-sm ring-1 ring-inset ring-neutral-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>{" "}
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-medium leading-6 text-neutral-100"
            >
              Phone number
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-neutral-300 font-semibold focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm"
                >
                  <option className="text-neutral-400 font-semibold">US</option>
                  <option className="text-neutral-400 font-semibold">CA</option>
                  <option className="text-neutral-400 font-semibold">EU</option>
                </select>
                <ChevronDownIcon
                  className="pointer-events-none absolute right-3 top-0 h-full w-5 text-neutral-300 "
                  aria-hidden="true"
                />
              </div>
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="bg-neutral-900 block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-neutral-100 shadow-sm ring-1 ring-inset ring-neutral-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-neutral-100"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="bg-neutral-900 block w-full rounded-md border-0 px-3.5 py-2 text-neutral-100 shadow-sm ring-1 ring-inset ring-neutral-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email confirmation"
              className="block text-sm font-medium leading-6 text-neutral-100"
            >
              Confirm Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email confirmation"
                id="email confirmation"
                autoComplete="email"
                className="bg-neutral-900 block w-full rounded-md border-0 px-3.5 py-2 text-neutral-100 shadow-sm ring-1 ring-inset ring-neutral-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-neutral-100"
            >
              Password
            </label>
            <div className="mt-2.5">
              <input
                type="password"
                name="password"
                id="password"
                className="bg-neutral-900 block w-full rounded-md border-0 px-3.5 py-2 text-neutral-100 shadow-sm ring-1 ring-inset ring-neutral-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="password confirmation"
              className="block text-sm font-medium leading-6 text-neutral-100"
            >
              Confirm Password
            </label>
            <div className="mt-2.5">
              <input
                type="password"
                name="password confirmation"
                id="password confirmation"
                className="bg-neutral-900 block w-full rounded-md border-0 px-3.5 py-2 text-neutral-100 shadow-sm ring-1 ring-inset ring-neutral-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <p className="text-neutral-400 text-sm">
            Already have an account?{" "}
            <Link to={"/sign-in"} className="text-emerald-600">
              Sign In!
            </Link>
          </p>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="transition-all active:scale-[0.99] block w-full rounded-md bg-gradient-to-bl from-emerald-700 to-green-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}
