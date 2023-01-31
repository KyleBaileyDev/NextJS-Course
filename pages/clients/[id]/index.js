import { useRouter } from "next/router";

function ClientProjects() {
  const router = useRouter();

  function loadProject() {
    //Stuff
    router.push("/clients/Kyle/ProjectA");
    // router.replace
    // No back page functionality
  }

  return (
    <div>
      <h1>{router.query.id}'s Page</h1>
      <button onClick={loadProject}>Load Project A</button>
    </div>
  );
}

export default ClientProjects;
