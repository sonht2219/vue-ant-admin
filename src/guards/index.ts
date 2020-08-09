import router from "@/router";
import NProgress from "nprogress";
import {setPageTitle} from "@/shared/services/helper/utils";

NProgress.configure({ showSpinner: false });
router.beforeEach((to, from, next) => {
    NProgress.start();
    setPageTitle(to?.meta?.title);
    next();
});

router.afterEach((to, from) => {
    NProgress.done();
});
