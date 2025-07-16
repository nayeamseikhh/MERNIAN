import { DownOutlined, UserOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Dropdown,
  Form,
  Input,
  message,
  Space,
  Tooltip,
} from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../Service/Redux/Feature/viewSlice2";
import { addPost } from "../../Service/Redux/Feature/viewSlice";

const handleMenuClick = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};
const items = [
  {
    label: "1st menu item",
    key: "1",
    icon: <UserOutlined />,
  },
  {
    label: "2nd menu item",
    key: "2",
    icon: <UserOutlined />,
  },
  {
    label: "3rd menu item",
    key: "3",
    icon: <UserOutlined />,
    danger: true,
  },
  {
    label: "4rd menu item",
    key: "4",
    icon: <UserOutlined />,
    danger: true,
    disabled: true,
  },
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};

const ProductUploadFill = () => {
  const dispatch = useDispatch();
  const [productDetail, setProductDetail] = useState("");
  const handlePost = () => {
    dispatch(addProduct(productDetail));
    setProductDetail("");
  };
  console.log(setProductDetail);
  return (
    <>
      <div>
        <div className="grid grid-cols-2 gap-x-4 p-4">
          <div>
            <Input
              className="!h-12 w-full !font-bold !justify-between !items-center"
              placeholder="Product Name"
            />
          </div>
          <div>
            <Input
              className="!h-12 w-full !font-bold !justify-between !items-center"
              placeholder="Product Price"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-4 p-4">
          <div>
            <Dropdown menu={menuProps}>
              <Button className="!h-12 w-full !text-white04 !font-bold !justify-between !items-center ">
                <Space className="!gap-x-45 !ml-5">
                  Product Categories
                  <DownOutlined color="!#D9D9D9" />
                </Space>
              </Button>
            </Dropdown>
          </div>
          <div>
            <Dropdown menu={menuProps}>
              <Button className="!h-12 w-full !text-white04 !font-bold !justify-between !items-center">
                <Space className="!gap-x-55 !ml-5">
                  Product Color
                  <DownOutlined color="!#D9D9D9" />
                </Space>
              </Button>
            </Dropdown>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-4 p-4 mb-6">
          <div>
            <Dropdown menu={menuProps}>
              <Button className="!h-12 w-full !text-white04 !font-bold !justify-between !items-center">
                <Space className="!gap-x-55 !ml-5">
                  Product Size
                  <DownOutlined color="!#D9D9D9" />
                </Space>
              </Button>
            </Dropdown>
          </div>
          <div>
            <Input
              className="!h-12 w-full !font-bold !justify-between !items-center"
              placeholder="Product Quentity"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-2 gap-x-4 items-center p-4">
          <button className="p-2 bg-black text-white rounded-xl">
            Image Preview
          </button>
          <button className="p-2 bg-purple01 text-white rounded-xl">
            Image Thumbnail
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-4 my-5 p-4">
        <div className="h-44 w-full bg-purple01"></div>
        <div className="h-44 w-full bg-purple01"></div>
      </div>

      <div>
        <div className="p-4">
          <input
            type="text"
            placeholder="Product description"
            className="h-33 w-full my-4 border border-gray-300 rounded-xl"
          />
        </div>

        <div className=" p-4">
          <h6 className="font-inter font-medium text-sm">
            Additional Information
          </h6>
          <div className="grid grid-cols-2 mt-4 gap-x-4">
            <input
              type="text"
              placeholder="Feature Name"
              className="h-10 w-full border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              placeholder="Feature Value"
              className="h-10 w-full border border-gray-300 rounded-lg"
            />
          </div>
          <div className="grid grid-cols-2 mt-4 gap-x-4">
            <input
              type="text"
              placeholder="Feature Name"
              className="h-10 w-full border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              placeholder="Feature Value"
              className="h-10 w-full border border-gray-300 rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className=" p-4 mr-4">
        <div className="flex gap-4 mb-6 justify-end">
          <button
            className="font-poppins font-semibold text-sm text-white px-12 py-3.5 rounded-lg bg-black hover:bg-purple01
           transition-all ease-linear duration-200"
          >
            Discard
          </button>
          <button
            onClick={handlePost}
            className="font-poppins font-semibold text-sm text-white px-12 py-3.5 rounded-lg bg-purple01 hover:bg-black01
           transition-all ease-linear duration-200"
          >
            Post
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductUploadFill;
