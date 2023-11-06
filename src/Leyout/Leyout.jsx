import { Outlet } from "react-router-dom";

const Leyout = () => {
    return (
      <div className="scroll-smooth">
        <Outlet></Outlet>
      </div>
    );
};

export default Leyout;