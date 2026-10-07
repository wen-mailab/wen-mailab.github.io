import { Link } from "react-router-dom";

const NotFound = () => (
  <section className="flex min-h-[60svh] items-center justify-center px-6 py-16" aria-labelledby="not-found-title">
    <div className="max-w-lg text-center">
      <p className="mb-3 text-sm font-medium tracking-widest text-slate-600">404</p>
      <h1 id="not-found-title" className="mb-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
        Page not found
      </h1>
      <p className="mb-6 text-base leading-7 text-slate-700">
        The page you’re looking for doesn’t exist or has moved.
      </p>
      <Link to="/" className="rounded-sm font-medium text-blue-700 underline underline-offset-4 hover:text-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700">
        Return to Home
      </Link>
    </div>
  </section>
);

export default NotFound;
