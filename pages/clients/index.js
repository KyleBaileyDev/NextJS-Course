import Link from "next/link";

function ClientsPage() {
  const clients = [
    { id: "Kyle", name: "ProjectA" },
    { id: "Joe", name: "Project2" },
  ];

  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((x, i) => (
          <li key={i}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: x.id },
              }}
            >
              {x.id}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
