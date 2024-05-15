
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='bg-red-100'>{children}</div>
  );
}
