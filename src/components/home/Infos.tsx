import { IconProps, Star } from "phosphor-react";

interface InfoBlockProps {
  icon: IconProps;
  title: string;
  description: string;
}

function InfoBlock(props: InfoBlockProps) {
  return (
    <div className="flex flex-row gap-2 items-start justify-center">
      <div>
        <div className="bg-product-blue rounded-full p-2">
          {icon}
        </div>
      </div>
      <div className="flex flex-col items-center justify-start">
        <div className="font-bold text-blue-300">{props.title}</div>
        <div className="text-sm">{props.description}</div>
      </div>
    </div>
  );
}

export default function Infos() {
  return (
    <section className="my-24">
      <div className="flex flex-row items-center justify-center gap-6">
        <div className="flex flex-row gap-2 items-start justify-center">
          <div>
            <div className="bg-product-blue rounded-full p-2">
              <Star size={24} color="#B9FA02" weight="fill" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start">
            <div className="font-bold text-blue-300">4.9/5</div>
            <div className="text-sm">Ratings</div>
          </div>
        </div>
        <div className="flex flex-row gap-2 items-start justify-center">
          <div>
            <div className="bg-product-blue rounded-full p-2">
              <Star size={24} color="#B9FA02" weight="fill" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start">
            <div className="font-bold text-blue-300">4.9/5</div>
            <div className="text-sm">Ratings</div>
          </div>
        </div>
        <div className="flex flex-row gap-2 items-start justify-center">
          <div>
            <div className="bg-product-blue rounded-full p-2">
              <Star size={24} color="#B9FA02" weight="fill" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start">
            <div className="font-bold text-blue-300">4.9/5</div>
            <div className="text-sm">Ratings</div>
          </div>
        </div>
        <div className="flex flex-row gap-2 items-start justify-center">
          <div>
            <div className="bg-product-blue rounded-full p-2">
              <Star size={24} color="#B9FA02" weight="fill" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start">
            <div className="font-bold text-blue-300">4.9/5</div>
            <div className="text-sm">Ratings</div>
          </div>
        </div>
      </div>
    </section>
  )
}