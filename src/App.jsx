import React from "react";
import Review from "./Review";

export default function App() {
  return (
    <main className="grid min-h-screen place-items-center bg-slate-100 p-4 text-slate-800">
      <section className="grid w-full max-w-2xl gap-4 sm:gap-8">
        <div className="text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-wide sm:text-4xl">
            Our Reviews
          </h2>
          <hr className="mx-auto w-24 border-t-4 border-blue-400" />
        </div>
        <Review />
      </section>
    </main>
  );
}
