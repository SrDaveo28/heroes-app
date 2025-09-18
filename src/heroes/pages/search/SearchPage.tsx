import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";

const SearchPage = () => {
  return (
    <>
      <CustomJumbotron title="Search Superhero" />
      {/* Stats Dashboard */}
      <HeroStats />
      {/* Breadcrumbs */}
      <CustomBreadcrumbs currentPage="Search Superhero" breadcrumbs={[
        { label: "Superheroes", to: "/" },
      ]} />
      {/* Filters */}
      <SearchControls />
    </>
  );
};

export default SearchPage;
