type Props = {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
  active: boolean;
};

export const Button: React.FC<Props> = ({
  disabled,
  active,
  children,
  ...props
}) => {
  let buttonClasses =
    'font-medium md:text-sm text-xs md:px-5 px-2 py-2.5 text-center uppercase rounded rounded-lg';

  if (disabled) {
    buttonClasses += ' text-white bg-amber-400 cursor-not-allowed';
  } else {
    buttonClasses += ' bg-amber-400 hover:bg-amber-500 text-stone-700';
  }

  if (active) {
    buttonClasses += ' bg-amber-500';
  }

  return (
    <button className={buttonClasses} disabled={disabled} {...props}>
      {children}
    </button>
  );
};
