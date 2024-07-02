import { AboutUsCard } from "@/components/ui/AboutUsCard";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CoreValueCard } from "@/components/ui/CoreValueCard";
import { OurTeamCard } from "@/components/ui/OurTeamCard";

const page = () => {
  return (
    <div>
      <div className="container mx-auto">
        
        <Breadcrumb/>
      </div>

      <div className="container mx-auto">
        <AboutUsCard />
      </div>
        <CoreValueCard/>
        <OurTeamCard/>
    </div>
  );
};

export default page;
