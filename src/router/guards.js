import {isAuthenticated} from "@/services/auth";

export function registerGuards(router) {
    registerRequiresAnonymousGuard(router)
    registerRequiresAuthGuard(router)
}

function registerRequiresAuthGuard(router) {
    router.beforeEach((to, from, next) => {
        if (to.meta.requiresAuth) {
            if (!isAuthenticated()) {
                next({
                    name: "Sign in"
                })
            } else {
                next()
            }
        } else {
            next()
        }
    })
}

function registerRequiresAnonymousGuard(router) {
    router.beforeEach((to, from, next) => {
        if (to.meta.requiresAnonymous) {
            if (isAuthenticated()) {
                next({
                    name: "Home"
                })
            } else {
                next()
            }
        } else {
            next()
        }
    })
}