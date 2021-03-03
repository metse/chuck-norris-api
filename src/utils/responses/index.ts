class Response {
  success: boolean;
  code: number;
  data: any;

  constructor(data: any, status: number = 200) {
    this.success = true;
    this.code = status;
    this.data = data;
  }
}

export default Response;