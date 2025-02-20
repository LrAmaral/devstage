import { ComponentProps } from "react";

interface IconButtonProps extends ComponentProps<"button"> {
  children: React.ReactNode;
}

export default function IconButton(props: IconButtonProps) {
  return (
    <button
      className="p-6 bg-gray-500 text-blue-500 rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900f"
      {...props}
    />
  );
}
