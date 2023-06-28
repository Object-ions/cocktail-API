export default class ApiRequest {
  static send() {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;
      request.open('GET', url, true);

      request.onload = function () {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject(this.statusText);
        }
      };

      request.onerror = function () {
        reject(this.statusText);
      };

      request.send();
    });
  }
}
