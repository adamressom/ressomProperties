import { authkitMiddleware } from "@workos-inc/authkit-nextjs";

export default authkitMiddleware({
  middlewareAuth: {
    enabled: true,
    unauthenticatedPaths: ["/", "/about", "/team", "/contact", "/properties"],
  },
});

export const config = {
  matcher: ["/", "/contact", "/dashboard/:path*"],
};