import Image from "next/image";
import Link from "next/link";

interface MetricTypes {
  imgUrl: string;
  title: string;
  value: number | string;
  alt: string;
  textStyles?: string;
  isAuthor?: boolean;
  href?: string;
}

const Metric = ({
  imgUrl,
  title,
  value,
  alt,
  textStyles,
  isAuthor,
  href,
}: MetricTypes) => {
  const metricContent = (
    <>
      <Image
        src={imgUrl}
        alt={alt}
        width={16}
        height={16}
        className={`object-contain ${href ? "rounded-full" : ""}`}
      />
      <p className={`${textStyles} flex items-center gap-1`}>
        {value}
        <span
          className={`small-regular line-clamp-1 ${isAuthor ? "max-sm:hidden" : ""}`}
        >
          {title}
        </span>
      </p>
    </>
  );
  if (href) {
    return (
      <Link href={href} className="flex-center gap-1">
        {metricContent}
      </Link>
    );
  }
  return <div className="flex-center flex-wrap gap-1">{metricContent}</div>;
};

export default Metric;
