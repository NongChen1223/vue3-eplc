import axios from "axios";
import request from "@/utils/request";

//登录
export function login() {
  return request.post<string>("/login", {
    username: "admin",
    password: "1234",
  });
}
