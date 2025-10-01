import { cn } from "@/lib/utils";
import { Marquee } from "./ui/marquee";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "logo-1.jpg",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "logo-6.jpg",
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
    img: "logo-4.jpg",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "logo-5.jpg",
  },
];

const firstRow = reviews;

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative cursor-pointer overflow-hidden rounded flex items-center justify-center"
      )}
    >
      <img
        className="w-36 h-36 rounded-xl object-cover"
        alt={name || "review image"}
        src={img}
      />
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
