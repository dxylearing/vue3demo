import service from "./index";

interface LoginData {
  username: string;
  password: string;
}

export function login(data: LoginData) {
  return service({
    url: "login",
    method: "POST",
    data,
  });
}
