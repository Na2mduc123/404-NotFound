import main_image from "@/assets/Frame 453.png";
import { Button } from "@/components/button";

export default function Main() {
  return (
    <div className="relative w-full">
      <div className="flex flex-col items-center justify-center text-center space-y-6 mt-[82px] mb-[100px]">
        <img
          src={main_image}
          alt="404"
          className="w-[395.96px] h-[273.56px] mb-[14px]"
        />
        <h2 className="text-[34px] font-semibold mb-[10px] ">
          Oops! Page not found
        </h2>
        <span className="text-[16px] font-medium max-w-[459px] mb-[42px] text-frost-grey">
          The page you are looking for might have been removed or temporarily
          unavailable.
        </span>
        <Button variant="primary" className="w-[244px] h-[46px] cursor-pointer">
          Back to HomePage
        </Button>
      </div>
    </div>
  );
}
