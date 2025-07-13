import Container from "../../GlobalComponents/BodyLayout/Container";
import { Input } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Dropdown, message, Space, Tooltip } from "antd";
const handleButtonClick = (e) => {
  message.info("Click on left button.");
  console.log("click left button", e);
};
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

const SearchAndFilterPart = () => {
  return (
    <>
      <Container>
        <div className="grid grid-cols-[1fr_1fr_1fr_.3fr] items-center gap-x-4 bg-white p-4 rounded-xl">
          <div>
            <Input.Search
              placeholder="Filled"
              variant="filled"
              size="large"
              className=""
              rootClassName="custom-searchbox"
            />
          </div>
          <div>
            <Dropdown menu={menuProps}>
              <Button className="!h-12 w-full !font-bold !justify-between !items-center">
                <Space className="!gap-x-60">
                  Data Published
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          </div>
          <div>
            <Dropdown menu={menuProps}>
              <Button className="!h-12 w-full !font-bold !justify-between !items-center">
                <Space className="!gap-x-60">
                  Descending
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          </div>
          <div>
            <button className="font-poppins font-semibold text-sm bg-purple01 text-white p-3 px-4 hover:bg-green01 transition-all ease-linear duration-200  rounded-xl">
              Apply Filters
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SearchAndFilterPart;
