import { Table } from "@radix-ui/themes";
import React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";

const DashboardTable = ({ currentPosts, openModal }) => {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Date</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Action</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {currentPosts.map((post) => (
          <Table.Row key={post._id}>
            <Table.Cell>
              <a href={`/post/${post._id}`}>{post.title}</a>
            </Table.Cell>
            <Table.Cell>
              {new Date(post.timestamp).toLocaleDateString()}
            </Table.Cell>
            <Table.Cell className="flex">
              <button>
                <a
                  href={`/post/${post._id}`}
                  className="flex justify-center items-center  hover:bg-gray-600/20 text-white font-medium py-1 px-2 rounded-lg mr-2"
                >
                  <FaRegEye color="gray" />
                </a>
              </button>
              <button>
                {" "}
                <a
                  href={`/post/edit/${post._id}`}
                  className="flex justify-center items-center   hover:bg-blue-600/20 text-white font-medium py-1 px-2 rounded-lg mr-2"
                >
                  <AiOutlineEdit color="blue" />
                </a>
              </button>
              <button
                onClick={openModal}
                className="flex justify-center items-center hover:bg-red-600/20 text-white font-medium py-1 px-2 rounded-lg"
              >
                <AiOutlineDelete size={24} color="red" />
              </button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default DashboardTable;
