import { i18n } from 'i18n-config'
import { NextRequest, NextResponse } from 'next/server'

/**
 * @title Middleware for Locale and Authentication Redirection
 * @notice This function handles locale detection and redirection based on authentication status for Next.js applications.
 * @dev Handles three main cases:
 * 1. Redirects bare locale paths (/pt, /en) to their home pages
 * 2. Adds missing locale prefix to paths
 * 3. Allows properly formatted requests to continue
 */
export function middleware(request: NextRequest) {
   /** @dev Extract the pathname and locale from the request. */
   const pathname = request.nextUrl.pathname
   const locale = request.cookies.get('locale')?.value || i18n.defaultLocale

   /**
    * @dev Check if the pathname is just a locale (e.g., /pt, /en)
    * @notice This prevents users from accessing bare locale paths
    */
   const isLocaleOnly = i18n.locales.some((loc) => pathname === `/${loc}`)

   /**
    * @dev Redirect to /home if it's just a locale path
    * @notice Transforms /pt to /pt/home, /en to /en/home, etc.
    */
   if (isLocaleOnly) {
      return NextResponse.redirect(new URL(`${pathname}/home`, request.url))
   }

   /**
    * @dev Check if the pathname is missing a locale prefix
    * @notice Verifies if the path doesn't start with any valid locale
    */
   const pathnameIsMissingLocale = i18n.locales.every(
      (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
   )

   /**
    * @dev Redirect to the URL with the detected locale if missing
    * @notice Adds the appropriate locale prefix to the current path
    */
   if (pathnameIsMissingLocale) {
      return NextResponse.redirect(
         new URL(
            `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
            request.url
         )
      )
   }

   /** @dev Allow the request to continue if none of the above conditions are met. */
   return NextResponse.next()
}

/**
 * @title Middleware Configuration
 * @notice Defines the route patterns for which the middleware is applied.
 * @dev Excludes API routes, static assets, and image optimization files from the middleware.
 */
export const config = {
   matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - api (API routes)
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       */
      '/((?!api|_next/static|_next/image|favicon.ico|svgs/|home/|images/).*)'
   ]
}
