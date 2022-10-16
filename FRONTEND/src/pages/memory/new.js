import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import moment from "moment/moment";
import { VscClose, VscCheck, VscAdd } from "react-icons/vsc";
import { BsHeartFill, BsHeart } from "react-icons/bs";

const NewMemory = () => {
  // handle image preview
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  // state variables for the memory entry
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [favorite, setFavorite] = useState(false);
  const [isPublic, setIsPublic] = useState(false);
  const prompt = "What are you grateful for today?";

  // keep track of the character count for the story
  const [storyCount, setStoryCount] = useState(0);

  // add a reference to the actual file input field
  const uploadButton = useRef(null);
  const clickUploadButton = () => {
    uploadButton.current.click();
  };

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    setSelectedFile(e.target.files[0] || undefined);
  };

  const submitMemory = () => {
    console.log("submitting memory");
    // prevent default behavior
    // send the data to the backend
    const formData = new FormData();
    formData.append("api_v1_memory[title]", title);
    formData.append("api_v1_memory[description]", description);
    formData.append("api_v1_memory[favorite]", favorite);
    formData.append("api_v1_memory[isPublic]", isPublic);
    formData.append("api_v1_memory[image]", selectedFile);
    formData.append("api_v1_memory[prompt]", prompt);
  };

  return (
    <>
      <div className="h-full max-w-2xl pb-4 mx-auto bg-white">
        <nav className="flex items-center justify-between w-full p-4 text-2xl sm:text-4xl">
          <VscClose />
          <span className="text-base leading-6 uppercase sm:text-2xl sm:px-6">
            {moment().format("ddd ll")}
          </span>
          <button
            onClick={submitMemory}
            type="button"
            name="submit memory entry"
            className="text-2xl bg-white border-0 sm:text-4xl"
          >
            <VscCheck />
          </button>
        </nav>

        <form className="flex flex-col">
          <div className="bg-[#EDEDED] h-80 sm:h-[427px] relative flex justify-center items-center">
            <label htmlFor="file" className="sr-only">
              Upload Image
            </label>
            <input
              id="file"
              type="file"
              name="image"
              onChange={onSelectFile}
              ref={uploadButton}
              className="hidden"
            />
            {preview && (
              <Image
                src={preview}
                className="absolute"
                layout="fill"
                objectFit="cover"
                quality={100}
                alt="memory media"
              />
            )}
            <button
              id="upload-icon"
              className="bg-[#C0C0C0] sm:p-8 p-6 border-0 flex justify-center items-center cursor-pointer"
              type="button"
              onClick={clickUploadButton}
            >
              <VscAdd className="text-4xl text-white sm:text-6xl" />
            </button>
          </div>

          <div className="mx-6 border-0 border-[#EDEDED] border-b-2 pt-4 pb-2 border-solid sm:mx-20">
            <label htmlFor="title" className="sr-only">
              Title
            </label>
            <input
              id="title"
              type="text"
              name="title"
              placeholder="Title"
              className="text-2xl font-bold text-center border-0 sm:text-4xl placeholder:text-2xl sm:placeholder:text-4xl placeholder:ml-[45%] placeholder:mr-[45%] placeholder:tracking-wider w-full "
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-between mx-6 border-[#EDEDED] border-b-2 py-4 border-solid border-0 items-center sm:mx-20 sm:order-last sm:justify-end sm:gap-x-10 sm:border-0 sm:p-0">
            <button
              type="button"
              className="bg-white border-0"
              onClick={() => setFavorite(!favorite)}
            >
              {favorite ? (
                <BsHeartFill className="text-2xl text-red-600 sm:text-3xl" />
              ) : (
                <BsHeart className="text-2xl sm:text-3xl" />
              )}
            </button>
            <div className="flex gap-x-2">
              <p className="text-xl">Share with public</p>
              <button
                type="button"
                className="relative w-4 h-4 bg-white border-black border-[1px]"
                onClick={() => setIsPublic(!isPublic)}
              >
                {isPublic && (
                  <VscCheck className="absolute bottom-[-2px] text-4xl text-green-500 left-[-6px]" />
                )}
              </button>
            </div>
          </div>

          <div className="py-2 m-6 text-lg font-medium text-center bg-white sm:mx-20 shadow-box rounded-xl">
            <p>{prompt}</p>
          </div>

          <div className="mx-6 sm:mx-20">
            <label htmlFor="description" className="sr-only">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              placeholder="Share your story.."
              className="w-full mx-auto text-xl font-medium min-h-[200px] max-h-max border-0 outline-none"
              onChange={(e) => {
                setStoryCount(e.target.value.length);
                setDescription(e.target.value);
              }}
              value={description}
              required
            />
            <p className="text-base font-medium">
              <span
                className={storyCount < 100 ? "text-red-500" : "text-green-500"}
              >
                {storyCount}
              </span>
              /100
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewMemory;
