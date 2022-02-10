const stringify = (param) => {
  return JSON.stringify(param);
};

export class UserApiCall {
  constructor(host, get, post, remove, errorCallback) {
    this.get = get;
    this.post = post;
    this.host = host;
    this.remove = remove;
    this.errorCallback = errorCallback;
  }
  async login(loginData) {
    try {
      return await fetch(`${this.host}/${this.post}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: stringify(loginData),
      })
        .then((res) => res.json())
        .then((res) => res);
    } catch (error) {
      this.errorHandler(error);
    }
  }
  errorHandler(error) {
    this.errorCallback(error);
  }
}
