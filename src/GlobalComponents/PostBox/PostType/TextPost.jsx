import { FaCommentAlt } from "react-icons/fa";
import like from "../../../assets//Emoji/like 1.png";
import love from "../../../assets//Emoji/love 1.png";
import wow from "../../../assets//Emoji/wow 1.png";
import { profilePicture } from "../../ProfilePicture/ProfilePicture";
import { BiLike, BiSolidLike } from "react-icons/bi";
import { RiShareFill } from "react-icons/ri";
import { Dropdown, Space } from "antd";
import CommentsAndReply from "./CommentsAndReply";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../Service/Redux/Feature/viewSlice";
import VideoPost from "./VideoPost";

const items = [
  {
    label: (
      <a
        href="https://www.antgroup.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Edit Post
      </a>
    ),
    key: "0",
  },
  {
    label: <a onClick={() => dispatch(deletePost(post.id))}>Delete Post</a>,
    key: "1",
  },

  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Repost Post
      </a>
    ),
    key: "2",
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Repost Author
      </a>
    ),
    key: "3",
  },
];

const TextPost = ({ postList }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="bg-white w-full mt-[25px] items-center  rounded-t-[10px]">
        <div className="grid grid-cols-2 justify-between px-5 py-4">
          <div className="flex gap-x-4 items-center">
            <div className="h-[50px] w-[50px] rounded-full border-2 border-black03">
              {profilePicture?.map((data) => (
                <img
                  className="h-full w-full rounded-full object-cover"
                  src={data.image}
                  alt="profileImage"
                  key={data.id}
                />
              ))}
            </div>
            <div>
              <h4 className="font-poppins font-bold text-[16px] cursor-pointer hover:underline">
                MD: Nayeam Seikh
              </h4>
              <p className="font-poppins font-normal text-[12px] text-white04">
                29 minutes ago
              </p>
            </div>
          </div>

          <div className="text-end ">
            <Dropdown
              placement="bottomRight"
              menu={{ items }}
              trigger={["click"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space className="font-bold text-2xl cursor-pointer">...</Space>
              </a>
            </Dropdown>
          </div>
        </div>
        <div className="px-5 py-4">
          <h6 className=" font-poppins font-normal text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            impedit fugiat modi, velit, earum accusamus assumenda molestias
            quidem error perspiciatis nisi. Quia aliquam et iure! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Animi impedit fugiat
            modi, velit, earum accusamus assumenda molestias quidem error
            perspiciatis nisi. Quia aliquam et iure!
          </h6>
          <div className="mx-auto rounded-lg my-4">{}</div>
          <div className="h-[1px] w-full bg-black03 mt-6 mb-3.5" />
          <div className="grid grid-cols-2">
            <div className="flex gap-x-6">
              <div className="flex gap-x-2">
                <div className="flex items-center">
                  <div className="h-6 w-6 rounded-full border-[1px] border-gray-200 z-10">
                    <img
                      className="h-full w-full rounded-full object-cover "
                      src={like}
                      alt=""
                    />
                  </div>
                  <div className="h-6 w-6 rounded-full border-[1px] border-gray-200 -ml-3 z-20">
                    <img
                      className="h-full w-full rounded-full object-cover "
                      src={love}
                      alt=""
                    />
                  </div>
                  <div className="h-6 w-6 rounded-full border-[1px] border-gray-200 -ml-3 z-30">
                    <img
                      className="h-full w-full rounded-full object-cover "
                      src={wow}
                      alt=""
                    />
                  </div>
                </div>

                <p className="font-inter font-bold text-sm ">12</p>
              </div>
              <div className="flex gap-x-2">
                <div className="flex items-center">
                  <div className="h-6 w-6 rounded-full bg-indigo-500 border-[1px] border-gray-200 z-10">
                    {profilePicture?.map((data) => (
                      <img
                        className="h-full w-full rounded-full object-cover"
                        src={data.image}
                        alt="profileImage"
                        key={data.id}
                      />
                    ))}
                  </div>
                  <div className="h-6 w-6 rounded-full bg-indigo-500 border-[1px] border-gray-200 -ml-3 z-20">
                    {profilePicture?.map((data) => (
                      <img
                        className="h-full w-full rounded-full object-cover"
                        src={data.image}
                        alt="profileImage"
                        key={data.id}
                      />
                    ))}
                  </div>
                  <div className="h-6 w-6 rounded-full bg-indigo-500 border-[1px] border-gray-200 -ml-3 z-30">
                    {profilePicture?.map((data) => (
                      <img
                        className="h-full w-full rounded-full object-cover"
                        src={data.image}
                        alt="profileImage"
                        key={data.id}
                      />
                    ))}
                  </div>
                  <div className="h-6 w-6 rounded-full bg-indigo-500 border-[1px] border-gray-200 -ml-3 z-40">
                    {profilePicture?.map((data) => (
                      <img
                        className="h-full w-full rounded-full object-cover"
                        src={data.image}
                        alt="profileImage"
                        key={data.id}
                      />
                    ))}
                  </div>
                </div>
                <div className="font-inter font-bold text-sm ">
                  12 Participants
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-x-4 font-inter font-bold text-sm ">
              <div>13 Comments</div>
              <div>2 Shares</div>
            </div>
          </div>
        </div>
      </div>
      {/* Comment Part */}
      <div className="grid grid-cols-3 bg-white mt-0.5 p-5 text-black03">
        <div className="flex justify-start gap-x-4 items-center ">
          <BiSolidLike size={20} color="#d9d9d9" />
          <p>Like</p>
        </div>
        <div className="flex justify-center gap-x-4 items-center">
          <FaCommentAlt size={20} color="#d9d9d9" />
          <p>Comment</p>
        </div>
        <div className="flex justify-end gap-x-4 items-center">
          <RiShareFill size={20} color="#d9d9d9" />
          <p>Share</p>
        </div>
      </div>
      <CommentsAndReply like={like} love={love} wow={wow} />
      {/* <VideoPost /> */}

      {/* post maping */}
      {postList?.map((post) => (
        <div className="bg-white w-full mt-[25px] items-center  rounded-t-[10px]">
          <div className="grid grid-cols-2 justify-between px-5 py-4">
            <div className="flex gap-x-4 items-center">
              <div className="h-[50px] w-[50px] rounded-full border-2 border-black03">
                {profilePicture?.map((data) => (
                  <img
                    className="h-full w-full rounded-full object-cover"
                    src={data.image}
                    alt="profileImage"
                    key={data.id}
                  />
                ))}
              </div>
              <div>
                <h4 className="font-poppins font-bold text-[16px] cursor-pointer hover:underline">
                  MD: Nayeam Seikh
                </h4>
                <p className="font-poppins font-normal text-[12px] text-white04">
                  29 minutes ago
                </p>
              </div>
            </div>

            <div className="text-end ">
              <Dropdown
                placement="bottomRight"
                menu={{ items }}
                trigger={["click"]}
                postList={postList}
                post={post.id}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space className="font-bold text-2xl cursor-pointer">
                    ...
                  </Space>
                </a>
              </Dropdown>
            </div>
          </div>
          <div className="px-5 py-4">
            <h6 className=" font-poppins font-normal text-sm">
              {post.content}
            </h6>
            <div className="mx-auto rounded-lg my-4">{}</div>
            <div className="h-[1px] w-full bg-black03 mt-6 mb-3.5" />
            <div className="grid grid-cols-2">
              <div className="flex gap-x-6">
                <div className="flex gap-x-2">
                  <div className="flex items-center">
                    <div className="h-6 w-6 rounded-full border-[1px] border-gray-200 z-10">
                      <img
                        className="h-full w-full rounded-full object-cover "
                        src={like}
                        alt=""
                      />
                    </div>
                    <div className="h-6 w-6 rounded-full border-[1px] border-gray-200 -ml-3 z-20">
                      <img
                        className="h-full w-full rounded-full object-cover "
                        src={love}
                        alt=""
                      />
                    </div>
                    <div className="h-6 w-6 rounded-full border-[1px] border-gray-200 -ml-3 z-30">
                      <img
                        className="h-full w-full rounded-full object-cover "
                        src={wow}
                        alt=""
                      />
                    </div>
                  </div>

                  <p className="font-inter font-bold text-sm ">12</p>
                </div>
                <div className="flex gap-x-2">
                  <div className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-indigo-500 border-[1px] border-gray-200 z-10">
                      {profilePicture?.map((data) => (
                        <img
                          className="h-full w-full rounded-full object-cover"
                          src={data.image}
                          alt="profileImage"
                          key={data.id}
                        />
                      ))}
                    </div>
                    <div className="h-6 w-6 rounded-full bg-indigo-500 border-[1px] border-gray-200 -ml-3 z-20">
                      {profilePicture?.map((data) => (
                        <img
                          className="h-full w-full rounded-full object-cover"
                          src={data.image}
                          alt="profileImage"
                          key={data.id}
                        />
                      ))}
                    </div>
                    <div className="h-6 w-6 rounded-full bg-indigo-500 border-[1px] border-gray-200 -ml-3 z-30">
                      {profilePicture?.map((data) => (
                        <img
                          className="h-full w-full rounded-full object-cover"
                          src={data.image}
                          alt="profileImage"
                          key={data.id}
                        />
                      ))}
                    </div>
                    <div className="h-6 w-6 rounded-full bg-indigo-500 border-[1px] border-gray-200 -ml-3 z-40">
                      {profilePicture?.map((data) => (
                        <img
                          className="h-full w-full rounded-full object-cover"
                          src={data.image}
                          alt="profileImage"
                          key={data.id}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="font-inter font-bold text-sm ">
                    12 Participants
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-x-4 font-inter font-bold text-sm ">
                <div>13 Comments</div>
                <div>2 Shares</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 bg-white mt-0.5 p-5 text-black03">
            <div className="flex justify-start gap-x-4 items-center ">
              <BiSolidLike size={20} color="#d9d9d9" />
              <p>Like</p>
            </div>
            <div className="flex justify-center gap-x-4 items-center">
              <FaCommentAlt size={20} color="#d9d9d9" />
              <p>Comment</p>
            </div>
            <div className="flex justify-end gap-x-4 items-center">
              <RiShareFill size={20} color="#d9d9d9" />
              <p>Share</p>
            </div>
          </div>
        </div>
      ))}

      {/* <div className="mt-6 space-y-4">
        {postList.length === 0 ? (
          <p className="text-gray-500">No posts yet.</p>
        ) : (
          postList.map((post) => (
            <div
              key={post.id}
              className="p-4 border rounded-lg bg-gray-100 flex justify-between"
            >
              <span>{post.content}</span>
              <button
                onClick={() => dispatch(deletePost(post.id))}
                className="text-red-500 font-bold"
              >
                X
              </button>
            </div>
          ))
        )}
      </div> */}
    </>
  );
};

export default TextPost;
