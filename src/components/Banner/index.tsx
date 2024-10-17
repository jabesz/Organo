import "./Banner.css";

interface BannerProps {
  addressImg: string
  alternativeText?: string
}

export const Banner = ({ addressImg, alternativeText }: BannerProps) => {
  return (
    <header className="banner">
      <img src={addressImg} alt={alternativeText} />
    </header>
  );
};

export default Banner;