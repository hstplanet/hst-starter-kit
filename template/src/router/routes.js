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
                        if (!res.firebase.emailVerified) {
                            next();
                        }
                        next("/");
                    }).catch(err => {
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
                        if (res.firebase.emailVerified) {
                            next();
                        }
                        next("/");
                    }).catch(err => {
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
                component: () =>
                    import ('src/pages/Login/SignIn.vue')
            },
            //Kullanıcı Oluşturma
            {
                path: 'signup',
                component: () =>
                    import ('pages/Login/SignUp.vue')
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