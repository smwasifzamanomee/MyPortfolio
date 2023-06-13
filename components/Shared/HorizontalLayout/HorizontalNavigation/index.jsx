// Horizontal Navigation Component imports section
import Link from "next/link";
import { navigation } from "../../../../data/data";
import Button from "../../../ui/Button";
import { FaPhoneAlt } from "react-icons/fa"
import Image from "next/image";
import CustomLink from "../../../ui/CustomLink";
import { useRouter } from "next/router";

// Horizontal Navigation Component
const index = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div className=" bg-secondary ">
      <nav className="container mx-auto px-3 flex justify-between items-center" aria-label="Top">

        {/* Logo and Menu Icon */}
        
          <div className="relative xl:w-[250px] xl:h-[100px] lg:w-[220px] lg:h-[120px] w-[100px] h-[120px]">
            <Link href={`/`}>
              <Image
                src={"/images/logo2.png"}
                fill
                alt="wasif zaman omee"
                className="object-center object-contain"
              />
            </Link>
          </div>
        

        {/* different pages route field */}
        <div className="flex justify-center items-center gap-8 py-2  xl:gap-16 ">
          {
            navigation.map((navList) => (
              <CustomLink
                key={navList.id}
                route={navList.route}
                pathname={pathname}
              >
                {navList.name}
              </CustomLink>
            ))
          }
        </div>

        {/* Registration Button */}
        <div className="flex xl:gap-4 lg:gap-1 ">
          <>
            <a
              className="flex items-center justify-center gap-x-2 px-4 rounded-full text-white"
              href={`tel:+8801910312566`}
            >
              <FaPhoneAlt /> <span className="text-white hover:text-primary">+8801910312566</span></a>
            <Link href="/registration">
              <Button width={"xl:w-[150px] lg:w-[100px]"} bgColor={"bg-transparent hover:bg-primary"} className={
                "border border-primary text-primary hover:text-white"
              } > Contact
              </Button>
            </Link>
          </>
        </div>
      </nav>
    </div>
  )
}

export default index