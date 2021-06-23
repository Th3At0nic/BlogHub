import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as FcIcons from "react-icons/fc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Add Blog",
    path: "/addBlog",
    icon: <FcIcons.FcAddDatabase />,
    cName: "nav-text",
  },
  {
    title: "Delete Blog",
    path: "/deleteBlog",
    icon: <FontAwesomeIcon icon={faTrashAlt} />,
    cName: "nav-text",
  },
];
