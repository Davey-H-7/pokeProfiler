import { GetStaticProps } from "next";

export default function Profile () {

    return (

        <>
        <h1> profile </h1>
        </>
    )

}
  
      async function getProfileData (name:string) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        
      if (!res.ok) {
        throw new Error('Failed to fetch data')
      }
  
      console.log(res);
      
      return res.json()

    }

    
    export async function generateStaticParams(context:any) {
        const itemName = context.params?.name as string;
        
        const data = await getProfileData(itemName);
        console.log(data);
        

      if (!data) {
        return {
          props: { hasError: true },
        }
    }
    
    return {
      props: {
        specificStarData: data
      }
    }
    }

