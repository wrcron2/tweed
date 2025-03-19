import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { profileSelector, setProfile } from "../redux/slices/userProfileSlice";
import { Avatar } from "@radix-ui/themes";
import { useDispatch } from "react-redux";

interface ProfileModalProps {}

const ProfileModal: React.FC<ProfileModalProps> = () => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userData = useSelector(profileSelector);
  const [updateProfileOpen, setUpdateProfileOpen] = useState<boolean>(false);

  const [formValues, setFormValues] = useState({
    name: userData.name || "",
    image: userData.imageUrl || "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onUpdateUser = () => {
    // Dispatch action to update user profile
    dispatch(setProfile({ name: formValues.name, imageUrl: formValues.image }));
    setUpdateProfileOpen(false);
  };
  const onUserProfileModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setUpdateProfileOpen(false);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      popoverRef.current &&
      !popoverRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const renderUpdateProfile = () => {
    return (
      <div className="card ">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">
          Update User Info
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-md font-medium text-gray-700 mb-1"
            >
              First Name
            </label>
            <input
              name="name"
              onChange={handleInputChange}
              type="text"
              id="firstName"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              defaultValue={userData.name}
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-md font-medium text-gray-700 mb-1"
            >
              Image URL
            </label>
            <input
              name="image"
              type="text"
              id="lastName"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              defaultValue={userData.imageUrl}
              onChange={handleInputChange}
            />
          </div>
          <button
            onClick={onUpdateUser}
            type="button"
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            Update
          </button>
          <button
            onClick={() => setUpdateProfileOpen(false)}
            type="button"
            className="bg-red-500 text-white py-2 px-4 rounded-md"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  };

  const renderAccountSettings = () => {
    return (
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">
          Account Settings
        </h3>
        <div className="space-y-3">
          <button
            onClick={() => setUpdateProfileOpen(true)}
            className="flex items-center text-gray-700 hover:text-blue-600 transition"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
            Edit Profile
          </button>

          <button className="flex items-center text-gray-700 hover:text-blue-600 transition">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            Change Password
          </button>

          <button className="flex items-center text-gray-700 hover:text-blue-600">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            Logout
          </button>
        </div>
      </div>
    );
  };

  const renderProfileModal = () => {
    if (isModalOpen) {
      return (
        <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-md mx-4 transform transition-all animate-fadeIn">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-gray-200 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="flex items-center">
                <div className="relative">
                  <Avatar
                    size="3"
                    src={userData?.imageUrl}
                    radius="full"
                    fallback="N/A"
                  />
                </div>
                <div className="ml-4 text-white">
                  <h2 className="text-2xl font-bold">{userData.name}</h2>
                  {/* <p className="opacity-90">{userData.role}</p> */}
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    Contact Information
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 text-gray-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <p className="text-gray-600">{userData?.email}</p>
                    </div>
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 text-gray-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <p className="text-gray-600">
                        Member since {userData.joined}
                      </p>
                    </div>
                  </div>
                </div>

                {updateProfileOpen
                  ? renderUpdateProfile()
                  : renderAccountSettings()}
                {}
              </div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="relative">
      <div
        ref={buttonRef}
        className="avatar mr-6 p-1.5 cursor-pointer"
        onClick={handleClick}
      >
        <div className="w-12 rounded-full overflow-hidden">
          <Avatar
            size="3"
            src={userData?.imageUrl}
            radius="full"
            fallback="N/A"
          />
        </div>
      </div>

      {isOpen && (
        <div
          ref={popoverRef}
          className="absolute right-4 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-10"
        >
          <div className="py-1">
            <a
              onClick={onUserProfileModal}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Your Profile
            </a>
            <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Settings
            </a>
            <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Logout
            </a>
          </div>
        </div>
      )}
      {renderProfileModal()}
    </div>
  );
};

export default ProfileModal;
