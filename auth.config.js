export const authConfig = {
    pages: {
        signIn: "/login",
    },
    callbacks: {
        authorized({ auth, request }) {
            const isLoggedIn = !!auth?.user;
            const isOnDashboard =
                request.nextUrl.pathname.startsWith("/dashboard");
            const isOnLoginPage = request.nextUrl.pathname.startsWith("/login");

            if (isOnDashboard) {
                if (isLoggedIn) {
                    return true;
                }
                return false; // Redirect unauthenticated users to login page
            } else if (isOnLoginPage) {
                if (isLoggedIn) {
                    return Response.redirect(
                        new URL("/dashboard", request.nextUrl),
                    );
                }
                return true;
            }
            return true;
        },
    },
    providers: [], // Add providers with an empty array for now
};
