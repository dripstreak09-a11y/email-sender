"use client"

import CountOp from "@/components/CountOp";

import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

export default function Home() {

  const count = useSelector( (state: RootState)  => state.count.count);
  return (
    <div className="min-h-screen min-w-screen container flex flex-col items-center justify-center gap-5">
      {/* <TextBox /> */}
      <div className="display text-8xl">{count}</div>
      <CountOp />

      
    </div>
  );
}
