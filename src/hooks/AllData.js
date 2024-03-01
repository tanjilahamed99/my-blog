import { useGetUsersQuery } from "@/redux/feature/Api/baseApi";

export async function GetServerSideProps() {
    // Manually dispatch the query action
    const { data, error } = await useGetUsersQuery().execute();
  
    if (error) {
      return {
        notFound: true, // or handle error
      };
    }
  
    return {
      props: {
        usersData: data,
      },
    };
  }