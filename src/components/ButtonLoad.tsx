import { Component } from "solid-js";

interface ButtonLoadProps {
  name: string;
  onClick?: () => void;
}
const ButtonLoad: Component<ButtonLoadProps> = ({ name, onClick }) => {
  return (
    <button
      onClick={onClick}
      class="bg-blueCustom200 border-blueCustom400 text-white px-7 py-4 rounded-custom mb-4 text-3xl hover:bg-blue-600 focus:outline-none"
    >
      {name}
    </button>
  );
};

export default ButtonLoad;
