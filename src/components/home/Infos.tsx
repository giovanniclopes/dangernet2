import Icon, { Calendar, Star, Trophy, User } from "phosphor-react";

interface InfoBlockProps {
  icon: Icon.IconProps;
  title: string;
  description: string;
}

function InfoBlock(props: InfoBlockProps) {
  return (
    <div className="flex flex-row gap-3 items-start justify-center">
      <div>
        <div className="bg-product-blue rounded-full p-2">
          <>{props.icon}</>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center gap-2">
        <div className="font-extrabold text-3xl text-blue-500">{props.title}</div>
        <div className="text-md">{props.description}</div>
      </div>
    </div>
  );
}

export default function Infos() {
  return (
    <section className="my-24">
      <div className="flex flex-row items-center justify-center gap-24">
        <InfoBlock icon={<Star size={20} weight="fill" color="#B9FA02" />} title={"4.9/5"} description={"Ratings"} />

        <InfoBlock icon={<User size={20} weight="fill" color="#B9FA02" />} title={"1M+"} description={"Customers"} />

        <InfoBlock icon={<Trophy size={20} weight="fill" color="#B9FA02" />} title={"254"} description={"National Awards"} />

        <InfoBlock icon={<Calendar size={20} weight="fill" color="#B9FA02" />} title={"17+"} description={"Years Serving"} />
      </div>
    </section>
  );
}
