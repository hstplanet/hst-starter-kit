import hst from 'boot/Core'

const routes = [{
        path: '/',
        component: () =>
            import ('layouts/MainLayout.vue'),
        children: [
            // İndex
            {
                path: '',
                component: () =>
                    import ('pages/Index.vue')
            },
		{{#preset.loginsystem}}
            // Mail Verified
            {
                beforeEnter: (to, from, next) => {
                    hst.auth().onAuthStateChanged().then((res) => {
                        if (res.emailStatus !== 'confirmed') {
                            next();
                        } else {
                            next("/");
                        }
                    }).catch(() => {
                        next("/");
                    });
                },
                path: 'mailverified',
                component: () =>
                    import ('pages/Login/emailVerified.vue'),
            },
            // Mail Verified OK
            {
                beforeEnter: (to, from, next) => {
                    hst.auth().onAuthStateChanged().then((res) => {
                        if (res.emailStatus !== 'confirmed') {
                            next();
                        } else {
                            next("/");
                        }
                    }).catch(() => {
                        next("/");
                    });
                },
                path: 'mailverifiedok',
                component: () =>
                    import ('src/pages/Login/OkeMail.vue')
            },
{{/preset.loginsystem}}
        ]
    },
	
	{{#preset.loginsystem}}
    // Login
    {
        path: '/login',
        component: () =>
            import ('layouts/LoginLayout.vue'),
        children: [
            // Giriş
            {
                path: 'signin',
                beforeEnter: (to, from, next) => {
                    hst.auth().onAuthStateChanged().then((res) => {
                        next("/");
                    }).catch(() => {
                        next();
                    });
                },
                component: () =>
                    import ('src/pages/Login/SignIn.vue')
            },
            //Kullanıcı Oluşturma
            {
                path: 'signup',
                beforeEnter: (to, from, next) => {
                    hst.auth().onAuthStateChanged().then((res) => {
                        next("/");
                    }).catch(() => {
                        next();
                    });
                },
                component: () =>
                    import ('pages/Login/SignUp.vue')
            },
            // Reset
        {
            path: 'reset',
            beforeEnter: (to, from, next) => {
                hst.auth().onAuthStateChanged().then((res) => {
                    next("/");
                }).catch(() => {
                    next();
                });
            },
            component: () =>
                import('pages/Login/reset.vue')
        },
        // Password New
        {
            path: 'password-new',
            beforeEnter: (to, from, next) => {
                hst.auth().onAuthStateChanged().then((res) => {
                    next("/");
                }).catch(() => {
                    next();
                });
            },
            component: () =>
                import('pages/Login/password-new.vue')
        },
        ]
    },
{{/preset.loginsystem}}

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '*',
        component: () =>
            import ('pages/Error404.vue')
    }
]

export default routes