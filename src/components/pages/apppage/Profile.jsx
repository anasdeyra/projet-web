import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  FiChevronDown,
  FiUser,
  FiSettings,
  FiLogOut,
  FiEdit,
  FiEdit2,
  FiEdit3,
  FiCreditCard,
} from "react-icons/fi";

const Profile = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          id="menu"
          className="flex items-center justify-center gap-x-1.5 rounded-full p-[2px] bg-neutral-900  text-sm font-semibold shadow-sm transition ease-in-out delay-100     hover:bg-neutral-800"
        >
          <img
            src="/team/anas.jpg"
            alt="User"
            className="rounded-full object-cover aspect-square w-10"
          />
          <span className="text-sm font-semibold text-white ml-1">
            Anas Deyra
          </span>

          <FiChevronDown
            color="white"
            size={20}
            className="mr-2 stroke-[3px] pt-[3px]"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute overflow-hidden text-neutral-200 text-sm font-medium right-0 z-10 mt-4 w-48  origin-top-right divide-y divide-neutral-700 rounded-lg bg-neutral-900 shadow-lg shadow-black ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-neutral-800" : "",
                    "flex gap-2 items-center px-4 py-2 text-sm "
                  )}
                >
                  <FiUser />
                  <p>Account</p>
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-neutral-800" : "",
                    "flex gap-2 items-center px-4 py-2 text-sm"
                  )}
                >
                  <FiEdit />
                  <p>Profile</p>
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-neutral-800" : "",
                    "flex gap-2 items-center px-4 py-2 text-sm"
                  )}
                >
                  <FiCreditCard />
                  Go <p>Premium</p>
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-neutral-800" : "",
                    "flex gap-2 items-center px-4 py-2 text-sm"
                  )}
                >
                  <FiSettings />
                  <p>Settings</p>
                </a>
              )}
            </Menu.Item>
          </div>

          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={classNames(
                  active ? "bg-neutral-800" : "",
                  "flex gap-2 items-center px-4 py-2 text-sm "
                )}
              >
                <FiLogOut />
                <p>Logout</p>
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default Profile;
