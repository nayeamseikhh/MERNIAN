import { Form, Input } from "antd";
import React from "react";

const BillingDetails = () => {
  return (
    <div>
      <div className="w-full bg-white p-8 rounded-xl">
        <h4 className="font-poppins font-medium text-lg ">Billing Details</h4>
        <Form>
          <div className="grid grid-cols-2 gap-x-4 w-full mt-6">
            <Form.Item name="firstname">
              <Input className="!py-[14px]" placeholder="First Name" />
            </Form.Item>
            <Form.Item name="lastname">
              <Input className="!py-[14px]" placeholder="Last name" />
            </Form.Item>
          </div>
          <div className="grid grid-cols-2 gap-x-4 w-full mt-6">
            <Form.Item name="email">
              <Input className="!py-[14px]" placeholder="Email" />
            </Form.Item>
            <Form.Item name="phonenumber">
              <Input className="!py-[14px]" placeholder="Phone Number" />
            </Form.Item>
          </div>
          <div className="w-full mt-6">
            <Form.Item name="address">
              <Input className="!py-[14px]" placeholder="Full Address" />
            </Form.Item>
          </div>
          <div className="grid grid-cols-2 gap-x-4 w-full mt-6">
            <Form.Item name="state">
              <Input className="!py-[14px]" placeholder="New York" />
            </Form.Item>
            <div></div>
          </div>
          <div className="w-full mt-6">
            <Form.Item name="description">
              <Input
                className="!pb-[130px] !pt-4"
                placeholder="Write any additional details here..."
              />
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default BillingDetails;
