type AboutMetricItemProps = {
  label: string;
  value: string;
  description: string;
  isLast?: boolean;
};

export function AboutMetricItem({
  label,
  value,
  description,
  isLast = false,
}: AboutMetricItemProps) {
  return (
    <div
      className={`${
        isLast ? "pb-0" : "border-b border-dark-olive/12 pb-9"
      } pt-9 first:pt-0`}
    >
      <p className="text-[14px] font-medium leading-[1.45] tracking-[-0.02em] text-primary-text">
        {label}
      </p>
      <p className="mt-5 font-title text-[60px] leading-[0.94] tracking-[-0.045em] text-dark-olive">
        {value}
      </p>
      <p className="mt-4 text-[14px] leading-[1.6] tracking-[-0.02em] text-secondary-text">
        {description}
      </p>
    </div>
  );
}
