import instanceBaseurl from "./auth/HttpInterceptor";

class loginverifyServices {
  LoginotpVerify = (datas) => {
    return new Promise((resolve, reject) => {
      instanceBaseurl
        .post(`/api/v1/student/verify-account`, datas)
        .then((respose) => {
          resolve(respose.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}
export default new loginverifyServices();
