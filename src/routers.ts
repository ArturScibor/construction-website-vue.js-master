import { createRouter, createWebHistory } from "vue-router";
import store from "../src/storage/index";
//default routers
import AboutUs from "../src/pages/AboutUs.vue";
import Contact from "../src/pages/TheContact.vue";
import Gallery from "../src/pages/TheGallery.vue";
import LoginPanel from "../src/pages/LoginPanel.vue";

//admin routers
import AddImageGallery from "../src/pages/Admin/AddImageGallery.vue";
import DeleteGallery from "../src/pages/Admin/DeleteGallery.vue";
import EditGallery from "../src/pages/Admin/EditGallery.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/aboutUs" },
    { name: "aboutus", path: "/aboutUs", component: AboutUs },
    { name: "contact", path: "/contact", component: Contact },
    { name: "gallery", path: "/gallery/:nazwa", component: Gallery },
    { name: "login", path: "/login", component: LoginPanel },
    {
      name: "addimagegallery",
      path: "/admin-panel/add-image-gallery",
      component: AddImageGallery,
      meta: { requiresAuth: true },
    },
    {
      name: "deletegallery",
      path: "/admin-panel/delete-gallery",
      component: DeleteGallery,
      meta: { requiresAuth: true },
    },
    {
      name: "editgallery",
      path: "/admin-panel/edit-gallery/:name",
      component: EditGallery,
      meta: { requiresAuth: true },
    },
    { path: "/:notFound(.*)", redirect: "/aboutUs" },
  ],
  linkActiveClass: "active",
});

router.beforeEach((to, _, next) => {
  if (
    to.meta.requiresAuth &&
    store.getters["auth/LoginPanel"].accessToken === null &&
    store.getters["auth/LoginPanel"].refreshToken === null
  ) {
    next("/aboutUs");
  } else {
    next();
  }
});

export default router;
