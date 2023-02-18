import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

export default function Review() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const prevPerson = () => {
    setIndex((prev) => {
      const newIndex = prev - 1;
      return newIndex < 0 ? people.length - 1 : newIndex;
    });
  };

  const nextPerson = () => {
    setIndex((prev) => {
      const newIndex = prev + 1;
      return newIndex >= people.length ? 0 : newIndex;
    });
  };

  const randomPerson = () => {
    setIndex((prev) => {
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * people.length);
      } while (prev === newIndex);
      return newIndex;
    });
  };

  return (
    <article className="rounded-3xl bg-white py-6 px-4 text-center text-sm shadow-lg transition-shadow duration-200 hover:shadow-black/20 sm:px-8 sm:text-base">
      <div className="relative mx-auto mb-6 aspect-square w-40">
        <div className="absolute -top-1 -right-2 aspect-square w-full rounded-full bg-blue-400" />
        <img
          src={image}
          alt={name}
          className="relative aspect-square rounded-full object-cover"
        />
        <span className="absolute top-0 left-0 grid aspect-square w-10 translate-y-1/4 place-items-center rounded-full bg-blue-400 text-white">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="mb-1 font-bold capitalize tracking-wide">{name}</h4>
      <p className="mb-2 text-xs uppercase text-blue-400 sm:text-sm">{job}</p>
      <p className="mb-3 text-slate-500">{text}</p>
      <div className="mb-2">
        <button
          onClick={prevPerson}
          className="mx-2 text-xl text-blue-300 transition-colors duration-200 hover:text-blue-400"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextPerson}
          className="mx-2 text-xl text-blue-300 transition-colors duration-200 hover:text-blue-400"
        >
          <FaChevronRight />
        </button>
      </div>
      <button
        onClick={randomPerson}
        className="rounded-full bg-blue-50 py-1 px-4 text-blue-400 transition-colors duration-200 hover:bg-blue-400 hover:text-blue-50"
      >
        Surprise Me
      </button>
    </article>
  );
}
