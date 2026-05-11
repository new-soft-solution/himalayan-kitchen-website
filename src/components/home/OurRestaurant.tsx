import Image from "next/image";
import Link from "next/link";
import { restaurant } from "@/content/restaurant";

export default function OurRestaurant() {
  const yearsOpen = new Date().getFullYear() - restaurant.foundedYear;

  return (
    <section className="py-[60px] md:py-[100px] lg:py-[140px] overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 items-center">
          {/* Image Side */}
          <div className="md:col-span-6 relative">
            <div className="max-w-[516px] relative mx-auto md:mx-0">
              <Image
                src="/images/interior/dining-room-1.webp"
                alt="The Himalayan Kitchen interior"
                width={516}
                height={400}
                className="w-full h-auto rounded-tl-[60px] md:rounded-tl-[100px] rounded-br-[60px] md:rounded-br-[100px] object-cover"
              />
              {/* Rating Badge */}
              <div className="absolute top-4 right-4 md:top-0 md:right-0 flex items-center justify-center flex-col gap-[5px] bg-primary w-[100px] h-[100px] md:w-[130px] md:h-[130px] rounded-[7px]">
                <svg
                  width="34"
                  height="31"
                  viewBox="0 0 34 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 0L22.2959 9.71076L33.168 11.7467L25.569 19.7842L26.9923 30.7533L17 26.01L7.00765 30.7533L8.43098 19.7842L0.832039 11.7467L11.7041 9.71076L17 0Z"
                    fill="white"
                  />
                </svg>
                <p className="font-manrope font-medium text-sm leading-[19px] text-white">
                  {restaurant.rating} Star Rating
                </p>
              </div>

              {/* Secondary Image */}
              <Image
                src="/images/interior/dining-room-2.webp"
                alt="Himalayan Kitchen ambiance"
                width={280}
                height={280}
                className="hidden md:block w-[200px] lg:w-[280px] h-[200px] lg:h-[280px] object-cover rounded-lg absolute bottom-[3rem] right-[-5rem] lg:right-[-7rem] shadow-2xl"
              />

              {/* Since Badge */}
              <p className="hidden md:block font-satisfy font-normal text-[50px] lg:text-[70px] xl:text-[80px] leading-[100px] lg:leading-[140px] text-white/20 capitalize -rotate-[46.33deg] absolute bottom-[6rem] lg:bottom-[9rem] right-[-5rem] lg:right-[-8rem]">
                Since {restaurant.foundedYear}
              </p>
            </div>
          </div>

          {/* Content Side */}
          <div className="md:col-span-6">
            <h2 className="font-satisfy font-normal subtitle text-primary flex items-center justify-start gap-[15px]">
              <span>
                <svg
                  width="13"
                  height="30"
                  viewBox="0 0 13 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.02392 28.6457L7.97935 17.6722C9.169 17.5219 10.2426 17.1711 11.1421 16.6701C12.3607 15.9518 13.0281 15.0165 12.9991 14.0144L12.9701 11.2919L12.4768 0.418535C12.4478 0.201403 12.1286 0.000973324 11.7224 0.000973324C11.2872 -0.0157292 10.939 0.184701 10.91 0.435238L10.5908 10.5903L7.66018 10.6071L7.25396 0.435238C7.22494 0.201404 6.87675 0.000973324 6.47053 0.000973324C6.00628 -0.0157292 5.62907 0.184701 5.62907 0.451941L5.3099 10.6071L2.3793 10.6238L1.94406 0.451941C1.91504 0.234808 1.59587 0.0343784 1.18965 0.0343784C0.754411 0.0176759 0.40622 0.218106 0.377205 0.468643L0 11.3253L0.0290154 14.0645C0.0290154 15.8349 2.23422 17.3215 5.1358 17.6889L4.43942 28.6624C4.43942 28.6847 4.43942 28.707 4.43942 28.7292C4.49745 29.4475 5.54202 30.032 6.81872 29.9986C8.0664 29.9819 9.08195 29.3639 9.02392 28.6457Z"
                    fill="#DF3F01"
                  />
                </svg>
              </span>
              Our Restaurant
            </h2>
            <h1 className="title font-jakarta font-semibold text-white mb-4 lg:mb-[20px] xl:mb-[33px]">
              A Taste of Nepal in the Heart of Amsterdam
            </h1>
            <p className="font-manrope font-medium text-[14px] lg:text-[16px] xl:text-[18px] leading-[28px] xl:leading-[31px] text-white/80 mb-6 lg:mb-[35px]">
              {restaurant.description}
            </p>

            <div className="flex items-start justify-start flex-col sm:flex-row gap-8 sm:gap-12 md:gap-[50px] mt-6 mb-5 lg:mb-[40px] xl:mb-[55px]">
              <div>
                <div className="icon w-[50px] h-[50px] bg-primary rounded-full flex items-center justify-center mb-4 lg:mb-[25px]">
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.49105 22.5322L7.25301 16.5385L9.94873 16.4307C11.1003 16.5894 12.266 17.1652 13.4379 17.8386L15.5314 17.7552C16.4815 17.7755 17.0166 18.7155 16.1194 19.3828C15.4073 19.9504 14.4368 19.9585 13.4399 19.9077C12.7543 19.9016 12.7604 20.8232 13.4745 20.7968C13.7227 20.8069 13.9913 20.7378 14.2253 20.7276C15.4643 20.6767 16.4754 20.4 17.0614 19.395L17.3462 18.6503L20.4 16.9821C21.9381 16.4063 22.9736 17.8569 21.8709 19.0369C19.6798 20.7683 17.5578 22.347 15.2344 23.5311C13.5579 24.644 11.8368 24.6786 10.0789 23.7366L7.49105 22.5322ZM6.05062 13.3993H24.7477C24.8861 13.3993 25 13.5153 25 13.6516V14.7522C25 14.8885 24.8861 15.0045 24.7477 15.0045H6.05062C5.91227 15.0045 5.79834 14.8906 5.79834 14.7522V13.6516C5.79834 13.5132 5.91227 13.3993 6.05062 13.3993ZM16.1255 2.87276C21.2443 3.2817 25.5554 7.58468 24.9186 12.6506H5.88175C5.25309 7.55212 9.58048 3.24304 14.7359 2.86666V2.04065H13.9221C13.7797 2.04065 13.6617 1.92265 13.6617 1.78023V0.848429C13.6617 0.706014 13.7777 0.588013 13.9221 0.588013H16.9169C17.0593 0.588013 17.1773 0.706014 17.1773 0.848429V1.78023C17.1773 1.92265 17.0593 2.04065 16.9169 2.04065H16.1255V2.87276ZM0 16.333L6.41886 15.9953L6.70369 23.167L0.284831 23.5026L0 16.333Z" fill="white" />
                  </svg>
                </div>
                <h4 className="font-jakarta font-bold text-[16px] lg:text-[18px] xl:text-[20px] leading-[25px] text-white mb-3 lg:mb-[18px]">
                  Authentic Recipes
                </h4>
                <p className="font-manrope font-normal text-[13px] lg:text-[14px] xl:text-[16px] leading-[28px] text-white/60">
                  Traditional Nepali &amp; Indian
                  <br />
                  recipes passed down generations
                </p>
              </div>
              <div>
                <div className="icon w-[50px] h-[50px] bg-primary rounded-full flex items-center justify-center mb-4 lg:mb-[25px]">
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.98769 14.8858L1.70752 13.858C4.24027 8.25851 8.87309 3.87937 14.6062 1.66565L14.6512 1.78232L15.5037 3.99998L15.4975 4.00215C10.3887 5.99042 6.25834 9.89609 3.98769 14.8858Z" fill="white" />
                    <path d="M22.2595 23.1525L5.70002 15.6883C7.78886 11.0967 11.589 7.50302 16.29 5.67365L16.2955 5.67148L17.656 9.20848C17.6092 9.20482 17.5692 9.18148 17.5214 9.18148C16.6723 9.17148 15.8831 9.65 15.8831 11.6454C15.998 11.9153 16.1785 12.1524 16.4079 12.3354C16.6374 12.5183 16.9087 12.6413 17.1975 12.6934C17.4863 12.7454 17.7835 12.7249 18.0623 12.6335C18.3412 12.5422 18.593 12.383 18.795 12.1701L22.8167 22.625C22.8462 22.7017 22.8522 22.7854 22.834 22.8655C22.8158 22.9456 22.7742 23.0185 22.7145 23.075C22.6548 23.1314 22.5797 23.1688 22.4987 23.1825C22.4177 23.1961 22.3344 23.1862 22.2595 23.1525Z" fill="white" />
                  </svg>
                </div>
                <h4 className="font-jakarta font-bold text-[16px] lg:text-[18px] xl:text-[20px] leading-[25px] text-white mb-3 lg:mb-[18px]">
                  Fresh &amp; Pure Ingredients
                </h4>
                <p className="font-manrope font-normal text-[13px] lg:text-[14px] xl:text-[16px] leading-[28px] text-white/60">
                  Finest spices and ingredients
                  <br />
                  sourced for authentic taste
                </p>
              </div>
            </div>

            <Link
              href="/about"
              className="btn w-full md:w-auto inline-flex items-center justify-center gap-[7px] bg-primary px-7 md:px-[46px] rounded-md font-jost font-semibold text-sm md:text-[18px] leading-[50px] md:leading-[58px] text-white hover:bg-primary-dark transition-colors"
            >
              <span className="btn__inner">About Us</span>
              <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.23096 5.78125L1.66846 10.4062C1.51221 10.5625 1.26221 10.5625 1.13721 10.4062L0.512207 9.78125C0.355957 9.625 0.355957 9.40625 0.512207 9.25L4.19971 5.5L0.512207 1.78125C0.355957 1.625 0.355957 1.375 0.512207 1.25L1.13721 0.625C1.26221 0.46875 1.51221 0.46875 1.66846 0.625L6.23096 5.25C6.38721 5.40625 6.38721 5.625 6.23096 5.78125Z" fill="white" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
