// import instanceBaseurl from "./auth/HttpInterceptor";

class loginverifyServices {
  useAuth = () => {
    const logged_in = localStorage.getItem("auth");
    return new Promise((resolve) => {
      if (logged_in) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  };
}

export default new loginverifyServices();
