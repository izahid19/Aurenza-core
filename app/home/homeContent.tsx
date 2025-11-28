import { Button } from "@/components/ui/button";
import { IconArrowNarrowRight } from "@tabler/icons-react";

export default function HomeContent() {
  return (
    <>
      <div className="min-h-screen flex">
        <div className="w-1/2 flex items-center justify-center">
          <div className="max-w-lg">
            <h1 className="text-3xl font-bold leading-snug">
              Revolutionizing Medical <br />
              Learning & Care with
              <br />
              AI + 3D Anatomy
            </h1>

            <p className="text-gray-700 pt-2">
              Explore the human body interactively and access intelligent tools
              for learning, diagnosis, and care.
            </p>

            <Button className="mt-2" variant="outline" size="sm">
              Explore Anatomy{" "}
              <IconArrowNarrowRight className="rotate-320" stroke={2} />
            </Button>
          </div>
        </div>

        <div className="w-1/2 flex items-center justify-center">
          {/* <h1 className="text-3xl font-bold">Right Side (50%)</h1> */}
          <div
            className="flex items-center justify-center"
            style={{ height: "65%", width: "60%", background: "#c2bfbf45" }}
          >
            <img
              src="../../anatomy_figure_img.jpg"
              className="mix-blend-darken"
              alt="anatoy_img"
            />
          </div>
        </div>
      </div>
    </>
  );
}
