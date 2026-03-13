"use client"

export default function Home() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <h1 className="border border-white h-16 w-32 flex items-center justify-center p-4 rounded-xl cursor-pointer" onClick={() => alert("hello world")}>Hello World</h1>
    </div>
  );
}
