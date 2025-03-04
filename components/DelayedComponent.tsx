'use client'

import Loading from "@/app/webgrader/loading";
import { useState,useEffect } from "react";

export default function DelayedComponent() {
    const [isReady, setIsReady] = useState(false);
    
    useEffect(() => {
      const timer = setTimeout(() => setIsReady(true), 3000); // 3 seconds delay
      return () => clearTimeout(timer);
    }, []);
    
    if (!isReady) return <Loading />;
    
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-bold">Web Grader Results</h1>
      </div>
    );
  }