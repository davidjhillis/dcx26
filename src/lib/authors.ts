export type Author = {
  name: string;
  jobTitle: string;
  bio?: string;
  url?: string;
  sameAs?: string[];
  image?: string;
};

const authors: Record<string, Author> = {
  "Barb Mosher Zinck": {
    name: "Barb Mosher Zinck",
    jobTitle: "Sr. Content Strategy Lead",
    bio: "Sr. Content Strategy Lead at DiscoverCX. Two decades covering content management, digital experience, and martech for industry publications including CMSWire and Reworked.",
    sameAs: [
      "https://www.linkedin.com/in/barbmosherzinck/",
      "https://www.cmswire.com/author/barb-mosher-zinck/",
    ],
  },
};

export function getAuthor(name?: string): Author | undefined {
  if (!name) return undefined;
  return authors[name.trim()];
}
