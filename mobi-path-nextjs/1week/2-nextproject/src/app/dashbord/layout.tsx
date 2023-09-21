interface child {
  data: string;
}

export default function DashboardLayout({ children: child }) {
  return (
    <section>
      <h1>dashboard</h1>
      {children}
    </section>
  );
}