import _ from "lodash";
import get from "lodash/get";

class APIResponse {
  statusCode: number;
  message: string;

  constructor(json: unknown) {
    this.statusCode = get(json, "data.statusCode", 500);
    this.message = get(json, "data.message", "Something went wrong");
    if (_.isArray(this.message)) {
      this.message = _.first(this.message);
    }
  }
}

export default APIResponse;
