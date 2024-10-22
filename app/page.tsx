import { Button } from "@/app/components/ui/button";
import { ChevronRight } from "lucide-react";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Button variant="secondary" size="icon">
        <ChevronRight />
      </Button>
    </div>
  );
};

export default Home;
