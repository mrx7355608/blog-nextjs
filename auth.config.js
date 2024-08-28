const protectedRoutes = ["/dashboard", "/view-blog", "/edit"];

export const authConfig = {
    pages: {
        signIn: "/login",
    },
    callbacks: {
        authorized({ auth, request }) {
            const isLoggedIn = !!auth?.user;
            const route = request.nextUrl.pathname;
            const isProtectedRoute = protectedRoutes.includes(route);

            if (isProtectedRoute) {
                if (isLoggedIn) return true;
                return false;
            } else if (isLoggedIn) {
                if (route.startsWith("/login")) {
                    return Response.redirect(
                        new URL("/dashboard", request.nextUrl),
                    );
                }
            }

            return true;
        },
    },
    providers: [], // Add providers with an empty array for now
};
