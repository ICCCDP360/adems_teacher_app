import instanceBaseurl from "./auth/HttpInterceptor";

class sidebarlogServices {
  Sidebarlog = (data) => {
    return new Promise((resolve, reject) => {
      instanceBaseurl
        .post(`/api/v1/student/check-account`, data)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export default new sidebarlogServices();
