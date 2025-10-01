import { cn } from "@/lib/utils";
import { Marquee } from "./ui/marquee";

const reviews = [
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "./logo-2.jpg",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "logo-3.jpg",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "./logo-8.png",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "logo-5.jpg",
  },
  {
    name: "sasaasa",
    username: "@saasasas",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "./logo-7.avif",
  },
];

const firstRow = reviews;

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative h-full  cursor-pointer overflow-hidden rounded "
        // light styles
        // dark styles
      )}
    >
      <img className="rounded-xl object-center" width="140" alt="" src={img} />
    </figure>
  );
};

export function MarqueeCompanies() {
  return (
    <div className="relative flex w-full bg-transparent flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  );
}
