import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const currencies = ["GBP", "USD", "AUD", "EUR"];
const navigation = {
  categories: [
    {
      name: "Plants",
      featured: [
        {
          name: "Vegetables",
          href: "#",
          imageSrc:
            "https://cdn.pixabay.com/photo/2015/09/09/20/10/carrots-933010_960_720.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Grass",
          href: "#",
          imageSrc:
            "https://cdn.pixabay.com/photo/2018/05/04/21/22/meadow-3375052_960_720.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
    },
    {
      name: "Flowers",
      featured: [
        {
          name: "Flowers",
          href: "#",
          imageSrc:
            "https://cdn.pixabay.com/photo/2017/06/17/10/21/tulips-2411779_960_720.jpg",
          imageAlt:
            "Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.",
        },
        {
          name: "Wildflowers and Herbs",
          href: "#",
          imageSrc:
            "https://cdn.pixabay.com/photo/2017/07/20/17/56/herbs-2523119_960_720.jpg",
          imageAlt: "Model wearing light heather gray t-shirt.",
        },
      ],
    },
    {
      name: "Mushrooms",
      featured: [
        {
          name: "Spawn",
          href: "#",
          imageSrc:
            "https://mushon.uk/wp-content/uploads/IMG_20200422_182123.jpg",
          imageAlt:
            "Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.",
        },
        {
          name: "Cultures",
          href: "#",
          imageSrc:
            "https://mycologyst.art/images/cultivation/agar/agar-dishes-02_1-1500x788.jpg",
          imageAlt: "Model wearing light heather gray t-shirt.",
        },
        {
          name: "Tinctures",
          href: "#",
          imageSrc:
            "https://practicalselfreliance.com/wp-content/uploads/2017/12/Reishi-Tincture-Jars.jpg?is-pending-load=1",
          imageAlt:
            "Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.",
        },
      ],
    },
    {
      name: "House Plants",
      featured: [
        {
          name: "Plants",
          href: "#",
          imageSrc:
            "https://www.ambius.com/blog/wp-content/uploads/2016/09/ThinkstockPhotos-519129338.jpg",
          imageAlt: "Model wearing light heather gray t-shirt.",
        },
        {
          name: "Seeds",
          href: "#",
          imageSrc:
            "https://www.thespruce.com/thmb/H1KucqGRJatlve5_RZUwZuC57O4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-fertilize-houseplants-1902846-granular-148948e7ae264559b99ce5428437a085.JPG",
          imageAlt:
            "Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.",
        },
        {
          name: "Vases",
          href: "#",
          imageSrc:
            "https://cdn.pixabay.com/photo/2017/12/28/15/36/plant-3045473_960_720.jpg",
          imageAlt:
            "Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.",
        },
        {
          name: "Nutrients",
          href: "#",
          imageSrc:
            "https://thegoodearthgarden.com/wp-content/uploads/2019/08/Houseplant-fertilizers.jpg",
          imageAlt:
            "Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.",
        },
      ],
    },
  ],
  pages: [
    { name: "About us", href: "#" },
    // { name: 'Stores', href: '#' },
  ],
};
const categories = [
  {
    name: "Vegetables",
    href: "#",
    imageSrc:
      "https://cdn.pixabay.com/photo/2015/09/09/20/10/carrots-933010_960_720.jpg",
  },
  {
    name: "Flowers",
    href: "#",
    imageSrc:
      "https://cdn.pixabay.com/photo/2017/06/17/10/21/tulips-2411779_960_720.jpg",
  },
  {
    name: "Mushrooms",
    href: "#",
    imageSrc:
      "https://cdn.pixabay.com/photo/2014/07/10/20/55/mushrooms-389421_960_720.jpg",
  },
  {
    name: "House Plants",
    href: "#",
    imageSrc:
      "https://www.ambius.com/blog/wp-content/uploads/2016/09/ThinkstockPhotos-519129338.jpg",
  },
  {
    name: "Vases",
    href: "#",
    imageSrc:
      "https://cdn.pixabay.com/photo/2017/12/28/15/36/plant-3045473_960_720.jpg",
  },
];
const collections = [
  {
    name: "Spring Collection",
    href: "#",
    imageSrc:
      "https://cdn.pixabay.com/photo/2017/04/23/20/36/tulips-2254970_960_720.jpg",
    imageAlt:
      "Brown leather key ring with brass metal loops and rivets on wood table.",
    description:
      "Spring into action with our collection of farming supplies and seeds!",
  },
  {
    name: "Summer Collection",
    href: "#",
    imageSrc:
      "https://cdn.pixabay.com/photo/2016/08/28/23/24/sunflower-1627193_960_720.jpg",
    imageAlt:
      "Natural leather mouse pad on white desk next to porcelain mug and keyboard.",
    description:
      "Stock up on summer essentials with our collection of heat-tolerant seeds and watering equipment.",
  },
  {
    name: "Autumn Collection",
    href: "#",
    imageSrc:
      "https://cdn.pixabay.com/photo/2016/10/03/21/06/pumpkins-1712841_960_720.jpg",
    imageAlt:
      "Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.",
    description:
      "Get ready for fall with our collection of frost-resistant seeds and protective coverings for your plants.",
  },
];
const footerNavigation = {
  shop: [
    { name: "Bags", href: "#" },
    { name: "Tees", href: "#" },
    { name: "Objects", href: "#" },
    { name: "Home Goods", href: "#" },
    { name: "Accessories", href: "#" },
  ],
  company: [
    { name: "Who we are", href: "#" },
    { name: "Sustainability", href: "#" },
    { name: "Press", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy", href: "#" },
  ],
  account: [
    { name: "Manage Account", href: "#" },
    { name: "Returns & Exchanges", href: "#" },
    { name: "Redeem a Gift Card", href: "#" },
  ],
  connect: [
    { name: "Contact Us", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "Pinterest", href: "#" },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <NavBar>
        <div className="relative mx-auto flex max-w-3xl flex-col items-center py-32 px-6 text-center sm:py-64 lg:px-0">
          <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">
            New arrivals are here
          </h1>
          <p className="mt-4 text-xl text-white">
            The new arrivals have, well, newly arrived. Check out the latest
            options from our spring small-batch release while they're still in
            stock.
          </p>
          <a
            href="#"
            className="mt-8 inline-block rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100"
          >
            Shop New Arrivals
          </a>
        </div>
      </NavBar>

      <main>
        {/* Category section */}
        <section
          aria-labelledby="category-heading"
          className="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8"
        >
          <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
            <h2
              id="category-heading"
              className="text-2xl font-bold tracking-tight text-gray-900"
            >
              Shop by Category
            </h2>
            <a
              href="#"
              className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
            >
              Browse all categories
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>

          <div className="mt-4 flow-root">
            <div className="-my-2">
              <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
                <div className="min-w-screen-xl absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
                  {categories.map((category) => (
                    <a
                      key={category.name}
                      href={category.href}
                      className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                    >
                      <span aria-hidden="true" className="absolute inset-0">
                        <img
                          src={category.imageSrc}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </span>
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                      />
                      <span className="relative mt-auto text-center text-xl font-bold text-white">
                        {category.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 px-4 sm:hidden">
            <a
              href="#"
              className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Browse all categories
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </section>

        {/* Featured section */}
        <section
          aria-labelledby="social-impact-heading"
          className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 sm:pt-32 lg:px-8"
        >
          <div className="relative overflow-hidden rounded-lg">
            <div className="absolute inset-0">
              <img
                src="https://cdn.pixabay.com/photo/2017/05/06/14/13/pathway-2289978_960_720.jpg"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="relative bg-gray-900 bg-opacity-75 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
              <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                <h2
                  id="social-impact-heading"
                  className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
                >
                  <span className="block sm:inline">Level up </span>
                  <span className="block sm:inline">your garden</span>
                </h2>
                <p className="mt-3 text-xl text-white">
                  If you're looking to maintain a beautiful and healthy garden,
                  it's important to have the right tools. Our selection of
                  garden tools includes everything you need to plant, prune, and
                  nurture your plants.
                </p>
                <a
                  href="#"
                  className="mt-8 block w-full rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                >
                  Shop Tools
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Collection section */}
        <section
          aria-labelledby="collection-heading"
          className="mx-auto max-w-xl px-4 pt-24 sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8"
        >
          <h2
            id="collection-heading"
            className="text-2xl font-bold tracking-tight text-gray-900"
          >
            Shop by Collection
          </h2>
          <p className="mt-4 text-base text-gray-500">
            Each season, we collaborate with world-class farmers and tool-makers
            to create a collection inspired by the natural world.
          </p>

          <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
            {collections.map((collection) => (
              <a
                key={collection.name}
                href={collection.href}
                className="group block"
              >
                <div
                  aria-hidden="true"
                  className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6"
                >
                  <img
                    src={collection.imageSrc}
                    alt={collection.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">
                  {collection.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {collection.description}
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* Featured section */}
        <section
          aria-labelledby="comfort-heading"
          className="mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8"
        >
          <div className="relative overflow-hidden rounded-lg">
            <div className="absolute inset-0">
              <img
                src="https://cdn.pixabay.com/photo/2019/01/20/18/11/seed-3944361_960_720.jpg"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="relative bg-gray-900 bg-opacity-75 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
              <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                <h2
                  id="comfort-heading"
                  className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
                >
                  Healthy harvests
                </h2>
                <p className="mt-3 text-xl text-white">
                  Are you looking to give your plants the nutrients they need to
                  thrive? Look no further! Our line of plant nutrients is
                  specially formulated to provide your plants with the
                  nourishment they need to grow strong and healthy.
                </p>
                <a
                  href="#"
                  className="mt-8 block w-full rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                >
                  Shop Fertilizers
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  );
}
