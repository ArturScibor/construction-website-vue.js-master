import router from "../../../routers";

export default {
  LoginPanel(context, payload) {
    if (payload.accesToken.length + payload.refreshToken.length !== 440) {
      return;
    }
    localStorage.setItem("authToken", payload.accesToken);
    localStorage.setItem("refreshToken", payload.refreshToken);
    context.commit("LoginPanel", payload);
  },
  tryLogin(context) {
    const authToken = localStorage.getItem("authToken");
    const refreshToken = localStorage.getItem("refreshToken");

    if (authToken === null || refreshToken === null) {
      return;
    }

    context.commit("LoginPanel", {
      accesToken: authToken,
      refreshToken: refreshToken,
    });
  },
  logout(context) {
    localStorage.removeItem("authToken");
    localStorage.removeItem("refreshToken");

    context.commit("LoginPanel", {
      accessToken: null,
      refreshToken: null,
    });

    router.push({
      name: "aboutus",
    });
  },
};
