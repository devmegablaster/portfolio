import React from "react";

function Items({
  icon,
  active,
}: {
  icon: JSX.Element;
  active: boolean | null;
}) {
  return (
    <div
      className={`w-full cursor-pointer duration-100 px-3 py-2 border-2 border-transparent ${
        active
          ? "text-white border-l-white"
          : "text-gray-500 hover:text-gray-200"
      }`}
    >
      {icon}
    </div>
  );
}

export default Items;
