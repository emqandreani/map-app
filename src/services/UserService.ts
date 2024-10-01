import { ServiceBase } from "@architecture-it/core";
import { addResponseInterceptorAxios } from "@architecture-it/react-auth";
import axios from "axios";
import env from "@architecture-it/react-env";

const BASE_URL = env("API") + "usuarios";

class UserServices extends ServiceBase {
  constructor() {
    super(BASE_URL);

    addResponseInterceptorAxios(this.client, axios);
  }

  getAll = () => this.client.get("");
}

const UserService = new UserServices();

export default UserService;
