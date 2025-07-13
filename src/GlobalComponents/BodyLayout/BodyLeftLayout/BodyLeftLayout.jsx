import ProfilePart from "./ProfilePart";
import PagePart from "./PagePart";

const BodyLeftLayout = () => {
  return (
    <>
      <div className="w-full h-full bg-white">
        <ProfilePart />
        <PagePart />
      </div>
    </>
  );
};

export default BodyLeftLayout;
