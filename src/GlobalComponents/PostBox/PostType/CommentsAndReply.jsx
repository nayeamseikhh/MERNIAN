import { Dropdown, Space } from "antd";
import { profilePicture } from "../../ProfilePicture/ProfilePicture";

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
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Delete Post
      </a>
    ),
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
    key: "1",
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
    key: "1",
  },
];

const CommentsAndReply = ({ like, love, wow }) => {
  return (
    <>
      <div className="bg-white w-full mt-0.5 items-center px-5 py-4">
        <div className="flex gap-x-2 items-center">
          <div>
            <div className="h-[38px] w-[38px] rounded-full border-2 border-black03 ">
              {profilePicture?.map((data) => (
                <img
                  className="h-full w-full rounded-full object-cover "
                  src={data.image}
                  alt="profileImage"
                  key={data.id}
                />
              ))}
            </div>
          </div>
          <div>
            <p className=" font-poppins font-normal text-sm">
              Md: sabbir It’s a always pleasure to do this streams with you. If
              we have at least half half the fun than last time it will be an
              incredible success!
            </p>
          </div>
        </div>
        <div>
          <div className="flex gap-x-6 py-4 ml-10  items-center">
            <div className="flex">
              <div className="h-6 w-6 rounded-full border-[1px] border-gray-200 z-10 object-cover">
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
            <div className="flex gap-x-4 items-center">
              <p className="text-black03 text-[15px]">React!</p>
              <p className="text-black03 text-[15px]">Reply</p>
              <p className="text-black03 text-[15px]">15 minutes ago</p>
              <div className="text-end ">
                <Dropdown
                  placement="bottomRight"
                  menu={{ items }}
                  trigger={["click"]}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <Space className="font-bold text-2xl cursor-pointer">
                      ...
                    </Space>
                  </a>
                </Dropdown>
              </div>
            </div>
          </div>
          {/* sub Comment part */}
          <div className="flex ml-30 gap-x-2">
            <div className="h-[38px] w-[38px] rounded-full border-2 border-black03 ">
              {profilePicture?.map((data) => (
                <img
                  className="h-full w-full rounded-full object-cover "
                  src={data.image}
                  alt="profileImage"
                  key={data.id}
                />
              ))}
            </div>
            <div>
              <div className="flex gap-x-2 items-top">
                <div>
                  <p className=" font-poppins font-normal text-sm">
                    Md: sabbir It’s a always
                  </p>
                  <div className="flex gap-x-6 mt-1 items-center">
                    <div className="flex">
                      <div className="h-6 w-6 rounded-full border-[1px] border-gray-200 z-10 object-cover">
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
                    <div className="flex gap-x-4 items-center">
                      <p className="text-black03 text-[15px]">React!</p>
                      <p className="text-black03 text-[15px]">Reply</p>
                      <p className="text-black03 text-[15px]">15 minutes ago</p>
                      <div className="text-end ">
                        <Dropdown
                          placement="bottomRight"
                          menu={{ items }}
                          trigger={["click"]}
                        >
                          <a onClick={(e) => e.preventDefault()}>
                            <Space className="font-bold text-2xl cursor-pointer">
                              ...
                            </Space>
                          </a>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentsAndReply;
