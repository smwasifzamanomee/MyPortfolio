import Main from "@/components/pages/Home/Main";
import HorizontalLayout from "@/layout/HorizontalLayout";
import VerticalLayout from "@/layout/VerticalLayout";

export default function Home() {
  return (
    <>
    
    {/* Desktop Layout */}
      <HorizontalLayout className={"sm:hidden md:hidden"}>
        <Main />
      </HorizontalLayout>
      
      {/* Mobile Layout */}
      <VerticalLayout className={"xl:hidden lg:hidden"}>
        <Main />
      </VerticalLayout>
    </>
  )
}