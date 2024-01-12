interface BigTitleProps {
  children: string;
  variant?: "primary" | "secondary";
}

function BigTitle({ children, variant = "primary" }: BigTitleProps) {
  if (variant === "primary") {
    return <h1>{children}</h1>;
  } else {
    return <h2>{children}</h2>;
  }
}

export default BigTitle;
