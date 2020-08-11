import {isTokenPresent} from "@/services/token";

export function registerGuards(router) {
    registerRequiresAnonymousGuard(router)
    registerRequiresAuthGuard(router)
    registerTitleGuard(router)
}

function registerRequiresAuthGuard(router) {
    router.beforeEach((to, from, next) => {
        if (to.meta.requiresAuth) {
            if (!isTokenPresent()) {
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
            if (isTokenPresent()) {
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

function registerTitleGuard(router) {
    router.beforeEach((to, from, next) => {
        if (to.meta.title) {
            document.title = `${to.meta.title} | Crypta`
            next()
        } else {
            document.title = "Crypta"
            next()
        }
    })
}