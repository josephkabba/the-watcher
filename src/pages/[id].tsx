import { useRouter } from "next/router";

export default function Detail(): JSX.Element {
  const router = useRouter();

  return (
    <div className="flex flex-col pt-12">
      <hr className="bg-gray-400 h-0.5" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mt-3 "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        onClick={() => router.back()}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>

      <div className="flex flex-col w-full py-10">
        <h1 className="text-5xl font-light">Label of news</h1>
        <h1 className="text-xl font-light">Date 29th March 2022</h1>
      </div>

      <div className="w-full h-96 bg-gray-400"></div>

      <div className="sm:flex sm:flex-row grid grid-cols-1 grid-row-3 pt-9 px-5">
        <div className="flexflex-col shrink-0">
          <h1 className="font-thin text-xl">Written by</h1>
          <h1 className="font-bold text-xl">Hassan Jowakim, CNN</h1>
        </div>
        <div className="place-self-stretch sm:ml-10 flex sm:flex-row sm:pt-0 pt-10">
          <hr className="bg-gray-400 h-0.5 sm:w-0.5 sm:h-full" />
          <p className="font-light sm:ml-9 text-xl text-justify">
            You get a risk-free product. We offer a 30-day money-back guarantee,
            provided that you did not print the materials and your access to the
            files will be fully disabled. If you are not satisfied with our
            product, let us know within 30 days, and we will disable your
            service and give you a full refund. We will however ask what didn't
            work for you so that we can learn and improve. On the Simple Tenses
            Grammar and Exercises Series: I have to say that I am absolutely...
            positively... blown away by the Simple Present Stories and Exercises
            book. What an amazing resource. Not only is the content high
            quality, so is the look and feel. It's beautiful! You explain the
            grammar so clearly and provide so many examples and practice
            exercises that Really Learn English is a well-known and loved
            website for teachers and students around the world. Our expertise is
            creating simple yet powerful learning aids for teachers and
            students. The books and workbooks are carefully designed to improve
            your teaching process and make it more effective. Really Learn
            English is a well-known and loved website for teachers and students
            around the world. Our expertise is creating simple yet powerful
            learning aids for teachers and students. The books and workbooks are
            carefully designed to improve your teaching process and make it more
            effective. Really Learn English is a well-known and loved website
            for teachers and students around the world. Our expertise is
            creating simple yet powerful learning aids for teachers and
            students. The books and workbooks are carefully designed to improve
            your teaching process and make it more effective.
          </p>
        </div>
      </div>
    </div>
  );
}
