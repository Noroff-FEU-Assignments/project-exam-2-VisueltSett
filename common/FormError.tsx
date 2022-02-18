interface FormErrorProps {
  children: React.ReactNode;
}

export default function FormError({ children }: FormErrorProps) {
  return <div className="form-error">{children}</div>;
}
