// import _ from "lodash";
// import get from "lodash/get";

// class APIResponse {
//   statusCode: number;
//   message: string;

//   constructor(json: unknown) {
//     this.statusCode = get(json, "data.data.status", 500);
//     this.message = get(json, "data.data.message", "Something went wrong");
//     if (_.isArray(this.message)) {
//       this.message = _.first(this.message);
//     }
//   }
// }

// export default APIResponse;

import get from "lodash/get";

class APIResponse {
  statusCode: number;
  message: string;
  raw?: any;

  constructor(input: any) {
    // กำหนด default
    this.statusCode = 500;
    this.message = "Something went wrong";
    this.raw = input;

    // ✅ 1. ถ้ามี response (เช่น AxiosError)
    if (input?.response) {
      this.statusCode = get(input, "response.status", 500);
      this.message =
        get(input, "response.data.message") ||
        get(input, "response.statusText") ||
        this.message;
      return;
    }

    // ✅ 2. ถ้าเป็น Axios success (response ปกติ)
    if (input?.data) {
      this.statusCode = get(input, "data.status", 200);
      this.message = get(input, "data.message", "Success");
      return;
    }

    // ✅ 3. ถ้าเป็น error ปกติ (ไม่ใช่ axios)
    if (input instanceof Error) {
      this.message = input.message;
      return;
    }

    // ✅ 4. ถ้าเป็น string หรือ object อื่น
    if (typeof input === "string") {
      this.message = input;
    } else if (typeof input === "object") {
      this.message = get(input, "message") || JSON.stringify(input);
    }
  }
}

export default APIResponse;
