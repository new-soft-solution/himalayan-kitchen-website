import Image from "next/image";
import SectionHeader from "@/components/shared/SectionHeader";
import { menuCategories } from "@/content/menu";

export default function FeaturedDishes() {
  // Get items with images
  const dishesWithImages = menuCategories
    .flatMap((cat) => cat.items.filter((item) => item.image))
    .slice(0, 4);

  // If we don't have 4 items with images, pad with popular items
  const popularItems = menuCategories
    .flatMap((cat) => cat.items.filter((item) => item.isPopular && !item.image))
    .slice(0, 4 - dishesWithImages.length);

  const dishes = [...dishesWithImages, ...popularItems].slice(0, 4);

  return (
    <section className="py-[60px] md:py-[100px] overflow-hidden">
      <div className="section-container">
        <SectionHeader
          subtitle="Chef's Favorites"
          title="Taste Our Best Dishes"
        />

        <div className="mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="group bg-dark-cyan-green rounded-tl-[4rem] rounded-br-[4rem] overflow-hidden relative"
            >
              {/* Image or Placeholder */}
              <div className="relative h-[200px] overflow-hidden">
                {dish.image ? (
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-deep-teal flex items-center justify-center">
                    <svg width="40" height="40" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-30">
                      <path fillRule="evenodd" clipRule="evenodd" d="M7.49105 22.5322L7.25301 16.5385L9.94873 16.4307C11.1003 16.5894 12.266 17.1652 13.4379 17.8386L15.5314 17.7552C16.4815 17.7755 17.0166 18.7155 16.1194 19.3828C15.4073 19.9504 14.4368 19.9585 13.4399 19.9077C12.7543 19.9016 12.7604 20.8232 13.4745 20.7968C13.7227 20.8069 13.9913 20.7378 14.2253 20.7276C15.4643 20.6767 16.4754 20.4 17.0614 19.395L17.3462 18.6503L20.4 16.9821C21.9381 16.4063 22.9736 17.8569 21.8709 19.0369C19.6798 20.7683 17.5578 22.347 15.2344 23.5311C13.5579 24.644 11.8368 24.6786 10.0789 23.7366L7.49105 22.5322ZM6.05062 13.3993H24.7477C24.8861 13.3993 25 13.5153 25 13.6516V14.7522C25 14.8885 24.8861 15.0045 24.7477 15.0045H6.05062C5.91227 15.0045 5.79834 14.8906 5.79834 14.7522V13.6516C5.79834 13.5132 5.91227 13.3993 6.05062 13.3993ZM16.1255 2.87276C21.2443 3.2817 25.5554 7.58468 24.9186 12.6506H5.88175C5.25309 7.55212 9.58048 3.24304 14.7359 2.86666V2.04065H13.9221C13.7797 2.04065 13.6617 1.92265 13.6617 1.78023V0.848429C13.6617 0.706014 13.7777 0.588013 13.9221 0.588013H16.9169C17.0593 0.588013 17.1773 0.706014 17.1773 0.848429V1.78023C17.1773 1.92265 17.0593 2.04065 16.9169 2.04065H16.1255V2.87276ZM0 16.333L6.41886 15.9953L6.70369 23.167L0.284831 23.5026L0 16.333Z" fill="white" />
                    </svg>
                  </div>
                )}
                {/* Price Badge */}
                <div className="absolute top-4 right-4 w-[60px] h-[60px] bg-primary rounded-full flex items-center justify-center">
                  <span className="font-jost font-bold text-[14px] text-white">
                    &euro;{dish.price.toFixed(0)}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 pb-8">
                <h4 className="font-jakarta font-semibold text-[17px] lg:text-[19px] text-white mb-2">
                  {dish.name}
                </h4>
                <p className="font-manrope text-[13px] text-white/60 leading-[22px] line-clamp-2">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
