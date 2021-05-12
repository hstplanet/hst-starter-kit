const routes = [{
        path: '/',
        component: () =>
            import ('layouts/MainLayout.vue'),
        children: [{
            path: '',
            component: () =>
                import ('pages/Index.vue')
        }]
    },

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

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '*',
        component: () =>
            import ('pages/Error404.vue')
    }
]

export default routes