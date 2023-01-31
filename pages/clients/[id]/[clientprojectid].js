import { useRouter } from "next/router";

function SelectedClientProjectPage() {
  const router = useRouter();

  return (
    <div>
      <h1>
        {router.query.id}'s Page for {router.query.clientprojectid}
      </h1>
    </div>
  );
}

export default SelectedClientProjectPage;
