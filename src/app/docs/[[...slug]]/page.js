export default function Docs({ params }) {
    if (!params || !params.slug) {
      return <h1>Docs Home Page</h1>; // Handle missing slug gracefully
    }
  
    const slugLength = params.slug.length;
    if (slugLength === 2) {
      return <h1>Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}</h1>;
    } else if (slugLength === 1) {
      return <h1>Viewing docs for feature {params.slug[0]}</h1>;
    } else {
      // Handle cases with more than 2 slugs or invalid format
      return <h1>Invalid slug format</h1>; // Or provide a more informative message
    }
  }
  