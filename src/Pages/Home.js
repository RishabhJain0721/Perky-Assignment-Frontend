import React from "react";
import Button from "../Components/Button";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Welcome to the Perky Assignment Project
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          This project was created for a Full-Stack intern opening assignment
          from Perky.
        </p>
        <Button value="Login" navigation="/login" />
      </div>
    </div>
  );
}
