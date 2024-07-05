export default {
  async loadGalleries(context) {
    const url = "";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await response.json();
    if (!response.ok) {
      console.log(response);
      return;
    }

    context.commit("loadGalleries", responseData);
  },
  async loadSingleGallery(context, payload){
    const response = await fetch(
      ``,
      {
        method: "POST",
      }
    );
    const responseData = await response.json();
    if (!response.ok) {
      return
    }

    context.commit('loadSingleGallery', responseData)

  }
};
