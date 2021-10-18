import { useRecoilState } from "recoil";
import { useSession } from "next-auth/react";
import { Dialog, Transition } from "@headlessui/react";
import { CameraIcon } from "@heroicons/react/outline";
import { Fragment, useRef, useState } from "react";
import { modalState } from "../atoms/modalAtom";
import {
  collection,
  doc,
  addDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { ref, getDownloadURL, uploadString } from "firebase/storage";
import { db, storage } from "../firebase";

const Modal = () => {
  const [open, setOpen] = useRecoilState(modalState);
  const filePickerRef = useRef(null);
  const captionRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const { data: session } = useSession();

  const uploadPhoto = async () => {
    if (loading) return;
    setLoading(true);

    // create a post and add to firestore
    // we'll get an id of newly created post
    // upload image to storage with the post id
    // get the download URL from storage
    // update origin post with the image url
    const docRef = await addDoc(collection(db, "posts"), {
      username: session.user.username,
      caption: captionRef.current.value,
      profileImg: session.user.image,
      timestamp: serverTimestamp(),
    });

    // get the post id
    console.log("new doc added with id ", docRef.id);
    // upload image to firebase storage
    const imageRef = ref(storage, `posts/${docRef.id}/image`);

    await uploadString(imageRef, selectedFile, "data_url").then(
      async (Snapshot) => {
        // get the  download URL
        const downloadURL = await getDownloadURL(imageRef);
        // update the post in firestore using the doc id
        await updateDoc(doc(db, "posts", docRef.id), {
          image: downloadURL,
        });
      }
    );
    setOpen(false);
    setLoading(false);
    setSelectedFile(null);
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto "
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-[800px] sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          {/* trick browser to center the modal */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              {/* aside upload inputs */}
              {selectedFile ? (
                <img
                  onClick={() => setSelectedFile(null)}
                  className="w-full object-contain cursor-pointer"
                  src={selectedFile}
                  alt=""
                />
              ) : (
                <aside
                  onClick={() => filePickerRef.current.click()}
                  className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100  cursor-pointer"
                >
                  <CameraIcon
                    className="h-6 w-6 text-red-600"
                    aria-hidden="true"
                  />
                </aside>
              )}

              {/*  */}
              <aside className="mt-3 text-center sm:mt-5 ">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Upload a photo
                </Dialog.Title>

                <section>
                  <input
                    ref={filePickerRef}
                    onChange={addImageToPost}
                    type="file"
                    hidden
                  />
                </section>

                <section className="mt-2">
                  <input
                    ref={captionRef}
                    className="border-none focus:ring-0 w-full text-center"
                    type="text"
                    placeholder="Please enter a caption"
                  />
                </section>
              </aside>
              {/* upload button */}
              <div className="mt-5 sm:mt-6">
                <button
                  type="button"
                  disabled={!uploadPhoto}
                  className="inline-flex justify-center w-full  px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 sm:text-sm disabled:bg-gray-300 disabled:cursor-not-allowed disabled:hover:bg-gray-300"
                  onClick={uploadPhoto}
                >
                  {loading ? "Uploading" : "Upload Post"}
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
